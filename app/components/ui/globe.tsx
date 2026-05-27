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
    globeColor?: string;
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    emissive?: string;
    emissiveIntensity?: number;
    shininess?: number;
    polygonColor?: string;
    ambientLight?: string;
    directionalLeftLight?: string;
    directionalTopLight?: string;
    pointLight?: string;
    arcDashLength?: number;
    arcDashGap?: number;
    arcDashAnimateTime?: number;
    ringMaxRadius?: number;
    ringRepeatPeriod?: number;
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
const cameraZ = 285;

/* ================= GLOBE ================= */

function Globe({
    globeConfig,
    data,
}: {
    globeConfig: GlobeConfig;
    data: ArcData[];
}): JSX.Element {

    const globe = useMemo(() => new ThreeGlobe(), []);

    /* ---------- MATERIAL ---------- */

    useEffect(() => {
        const material = globe.globeMaterial() as MeshPhongMaterial;

        material.color = new Color(globeConfig.globeColor ?? "#07111f");
        material.emissive = new Color(globeConfig.emissive ?? "#0f766e");
        material.emissiveIntensity = globeConfig.emissiveIntensity ?? 0.16;
        material.shininess = globeConfig.shininess ?? 0.55;
    }, [globe, globeConfig]);

    /* ---------- MAP + ARCS ---------- */

    useEffect(() => {
        globe
            .hexPolygonsData((countries as GlobeCountries).features)
            .hexPolygonResolution(3)
            .hexPolygonMargin(0.62)
            .showAtmosphere(true)
            .atmosphereColor(globeConfig.atmosphereColor ?? "#2dd4bf")
            .atmosphereAltitude(globeConfig.atmosphereAltitude ?? 0.14)
            .hexPolygonColor(() => globeConfig.polygonColor ?? "rgba(148, 163, 184, 0.34)");

        globe
            .arcsData(data)
            .arcStartLat((d: object) => (d as ArcData).startLat)
            .arcStartLng((d: object) => (d as ArcData).startLng)
            .arcEndLat((d: object) => (d as ArcData).endLat)
            .arcEndLng((d: object) => (d as ArcData).endLng)
            .arcColor((d: object) => (d as ArcData).color)
            .arcAltitude((d: object) => (d as ArcData).arcAlt)
            .arcDashLength(globeConfig.arcDashLength ?? 0.72)
            .arcDashGap(globeConfig.arcDashGap ?? 10)
            .arcDashAnimateTime(globeConfig.arcDashAnimateTime ?? 2600);

    }, [globe, globeConfig, data]);

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
                .ringMaxRadius(globeConfig.ringMaxRadius ?? 4.2)
                .ringPropagationSpeed(RING_PROPAGATION_SPEED)
                .ringRepeatPeriod(globeConfig.ringRepeatPeriod ?? 2400);

        }, 2000);

        return () => clearInterval(interval);

    }, [globe, globeConfig, data]);

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
            dpr={[1, 1.25]}
            frameloop="always"
            gl={{
                alpha: true,
                antialias: false,
                powerPreference: "low-power",
            }}
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
                enablePan={false}
                autoRotate
                autoRotateSpeed={
                    globeConfig.autoRotateSpeed ?? 0.5
                }
            />

        </Canvas>
    );
}

