"use client";

import dynamic from "next/dynamic";
import { JSX } from "react";

type ArcData = {
    order: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: string;
};

type GlobeConfig = {
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

const World = dynamic(
    () => import("@/app/components/ui/globe").then((mod) => mod.World),
    {
        ssr: false,
    }
);

const routeColors = {
    teal: "#2dd4bf",
    cyan: "#67e8f9",
    rose: "#fb7185",
    slate: "#94a3b8",
};

const bangkok = {
    lat: 13.7563,
    lng: 100.5018,
};

const sampleArcs: ArcData[] = [
    {
        order: 1,
        startLat: bangkok.lat,
        startLng: bangkok.lng,
        endLat: 1.3521,
        endLng: 103.8198,
        arcAlt: 0.18,
        color: routeColors.teal,
    },
    {
        order: 2,
        startLat: bangkok.lat,
        startLng: bangkok.lng,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.22,
        color: routeColors.cyan,
    },
    {
        order: 3,
        startLat: bangkok.lat,
        startLng: bangkok.lng,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.16,
        color: routeColors.teal,
    },
    {
        order: 4,
        startLat: bangkok.lat,
        startLng: bangkok.lng,
        endLat: 37.7749,
        endLng: -122.4194,
        arcAlt: 0.38,
        color: routeColors.rose,
    },
    {
        order: 5,
        startLat: bangkok.lat,
        startLng: bangkok.lng,
        endLat: 51.5072,
        endLng: -0.1276,
        arcAlt: 0.34,
        color: routeColors.cyan,
    },
    {
        order: 6,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.16,
        color: routeColors.slate,
    },
    {
        order: 7,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: 37.7749,
        endLng: -122.4194,
        arcAlt: 0.28,
        color: routeColors.rose,
    },
    {
        order: 8,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 40.7128,
        endLng: -74.006,
        arcAlt: 0.18,
        color: routeColors.teal,
    },
];

export function GlobeDemo(): JSX.Element {
    const globeConfig: GlobeConfig = {
        globeColor: "#07111f",
        atmosphereColor: "#2dd4bf",
        atmosphereAltitude: 0.16,
        emissive: "#0f766e",
        emissiveIntensity: 0.18,
        shininess: 0.55,
        polygonColor: "rgba(148, 163, 184, 0.34)",
        ambientLight: "#67e8f9",
        directionalLeftLight: "#fb7185",
        directionalTopLight: "#ffffff",
        pointLight: "#2dd4bf",
        arcDashLength: 0.72,
        arcDashGap: 10,
        arcDashAnimateTime: 2600,
        ringMaxRadius: 4.2,
        ringRepeatPeriod: 2400,
        autoRotateSpeed: 0.34,
    };

    return (
        <div className="relative h-full w-full">
            <div className="absolute inset-6 rounded-full bg-teal-300/10 blur-3xl" />
            <div className="absolute inset-x-10 bottom-8 h-24 rounded-full bg-rose-400/10 blur-3xl" />
            <World
                data={sampleArcs}
                globeConfig={globeConfig}
            />
        </div>
    );
}
