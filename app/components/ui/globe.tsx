"use client";

import { useEffect, useRef, useState, JSX } from "react";
import { Color, Group } from "three";
import ThreeGlobe from "three-globe";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/app/data/globe.json";

/* ================= TYPES ================= */

export type ArcData = {
    order: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: string;
};

export type GlobeConfig = {
    ambientLight?: string;
    directionalLeftLight?: string;
    directionalTopLight?: string;
    pointLight?: string;
    autoRotateSpeed?: number;
};

/* ================= CONSTANTS ================= */

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

/* ================= GLOBE ================= */

function Globe({
    globeConfig,
    data,
}: {
    globeConfig: GlobeConfig;
    data: ArcData[];
}): JSX.Element {

    const globeRef = useRef<any>(null);
    const groupRef = useRef<Group | null>(null);
    const [ready, setReady] = useState(false);

    /* ---------- INIT ---------- */

    useEffect(() => {
        if (!globeRef.current && groupRef.current) {
            globeRef.current = new ThreeGlobe();
            groupRef.current.add(
                globeRef.current as unknown as Group
            );
            setReady(true);
        }
    }, []);

    /* ---------- MATERIAL ---------- */

    useEffect(() => {
        if (!ready) return;

        const material = globeRef.current.globeMaterial();

        material.color = new Color("#1d072e");
        material.emissive = new Color("#000000");
        material.emissiveIntensity = 0.1;
        material.shininess = 0.9;
    }, [ready]);

    /* ---------- MAP + ARCS ---------- */

    useEffect(() => {
        if (!ready || !data) return;

        const globe = globeRef.current;

        globe
            .hexPolygonsData((countries as any).features)
            .hexPolygonResolution(3)
            .hexPolygonMargin(0.7)
            .showAtmosphere(true)
            .atmosphereColor("#ffffff")
            .atmosphereAltitude(0.1)
            .hexPolygonColor(() => "rgba(255,255,255,0.7)");

        globe
            .arcsData(data)
            .arcStartLat((d: any) => d.startLat)
            .arcStartLng((d: any) => d.startLng)
            .arcEndLat((d: any) => d.endLat)
            .arcEndLng((d: any) => d.endLng)
            .arcColor((d: any) => d.color)
            .arcAltitude((d: any) => d.arcAlt)
            .arcDashLength(0.9)
            .arcDashGap(15)
            .arcDashAnimateTime(2000);

    }, [ready, data]);

    /* ---------- RINGS ---------- */

    useEffect(() => {
        if (!ready || !data) return;

        const interval = setInterval(() => {

            const ringsData = data.map((d) => ({
                lat: d.startLat,
                lng: d.startLng,
                color: d.color,
            }));

            globeRef.current
                .ringsData(ringsData)
                .ringColor((e: any) => e.color)
                .ringMaxRadius(5)
                .ringPropagationSpeed(RING_PROPAGATION_SPEED)
                .ringRepeatPeriod(2000);

        }, 2000);

        return () => clearInterval(interval);

    }, [ready, data]);

    return (
        <group
            ref={groupRef}
            position={[0, 0, 0]}
        />
    );
}

/* ================= WORLD ================= */

export function World({
    globeConfig,
    data,
}: {
    globeConfig: GlobeConfig;
    data: ArcData[];
}): JSX.Element {

    return (
        <Canvas
            camera={{ position: [0, 0, cameraZ], fov: 50 }}
            frameloop="always" // ✅ สำคัญ
        >

            <ambientLight
                color={globeConfig.ambientLight ?? "#ffffff"}
                intensity={0.6}
            />

            <directionalLight
                color={globeConfig.directionalLeftLight ?? "#ffffff"}
                position={[-400, 100, 400]}
            />

            <directionalLight
                color={globeConfig.directionalTopLight ?? "#ffffff"}
                position={[-200, 500, 200]}
            />

            <pointLight
                color={globeConfig.pointLight ?? "#ffffff"}
                position={[-200, 500, 200]}
            />

            <Globe globeConfig={globeConfig} data={data} />

            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={
                    globeConfig.autoRotateSpeed ?? 0.5
                }
            />

        </Canvas>
    );
}

/* ================= DEMO ================= */

export function GlobeDemo(): JSX.Element {

    const config: GlobeConfig = {
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        autoRotateSpeed: 0.5,
    };

    const arcs: ArcData[] = [
        {
            order: 1,
            startLat: 13.7563,
            startLng: 100.5018,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.3,
            color: "#3b82f6",
        },
    ];

    return (
        <div className="w-full h-full">
            <World globeConfig={config} data={arcs} />
        </div>
    );
}