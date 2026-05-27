"use client";

import { JSX, useEffect, useMemo } from "react";
import { Color, MeshPhongMaterial } from "three";
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

type GlobeCountries = {
    features: object[];
};

type RingData = {
    lat: number;
    lng: number;
    color: string;
};

/* ================= CONSTANTS ================= */

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

/* ================= GLOBE ================= */

function Globe({
    data,
}: {
    data: ArcData[];
}): JSX.Element {

    const globe = useMemo(() => new ThreeGlobe(), []);

    /* ---------- MATERIAL ---------- */

    useEffect(() => {
        const material = globe.globeMaterial() as MeshPhongMaterial;

        material.color = new Color("#1d072e");
        material.emissive = new Color("#000000");
        material.emissiveIntensity = 0.1;
        material.shininess = 0.9;
    }, [globe]);

    /* ---------- MAP + ARCS ---------- */

    useEffect(() => {
        globe
            .hexPolygonsData((countries as GlobeCountries).features)
            .hexPolygonResolution(3)
            .hexPolygonMargin(0.7)
            .showAtmosphere(true)
            .atmosphereColor("#ffffff")
            .atmosphereAltitude(0.1)
            .hexPolygonColor(() => "rgba(255,255,255,0.7)");

        globe
            .arcsData(data)
            .arcStartLat((d: object) => (d as ArcData).startLat)
            .arcStartLng((d: object) => (d as ArcData).startLng)
            .arcEndLat((d: object) => (d as ArcData).endLat)
            .arcEndLng((d: object) => (d as ArcData).endLng)
            .arcColor((d: object) => (d as ArcData).color)
            .arcAltitude((d: object) => (d as ArcData).arcAlt)
            .arcDashLength(0.9)
            .arcDashGap(15)
            .arcDashAnimateTime(2000);

    }, [globe, data]);

    /* ---------- RINGS ---------- */

    useEffect(() => {
        const interval = setInterval(() => {

            const ringsData: RingData[] = data.map((d) => ({
                lat: d.startLat,
                lng: d.startLng,
                color: d.color,
            }));

            globe
                .ringsData(ringsData)
                .ringColor((e: object) => (e as RingData).color)
                .ringMaxRadius(5)
                .ringPropagationSpeed(RING_PROPAGATION_SPEED)
                .ringRepeatPeriod(2000);

        }, 2000);

        return () => clearInterval(interval);

    }, [globe, data]);

    return (
        <primitive object={globe} />
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

            <Globe data={data} />

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
