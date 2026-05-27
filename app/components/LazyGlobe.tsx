"use client";

import dynamic from "next/dynamic";
import { JSX, useEffect, useState } from "react";

const GlobeDemo = dynamic(
    () => import("@/app/components/GithubGlobe").then((mod) => mod.GlobeDemo),
    {
        ssr: false,
        loading: () => <GlobePlaceholder />,
    }
);

function GlobePlaceholder(): JSX.Element {
    return (
        <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-slate-950/45">
            <div className="absolute h-64 w-64 rounded-full border border-teal-200/20 bg-teal-300/5 shadow-[0_0_80px_rgba(45,212,191,0.18)]" />
            <div className="absolute h-44 w-44 rounded-full border border-rose-200/10" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Global web craft
            </p>
        </div>
    );
}

export default function LazyGlobe(): JSX.Element {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const load = () => setReady(true);
        const mobileQuery = window.matchMedia("(max-width: 767px)");
        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (mobileQuery.matches || reducedMotionQuery.matches) {
            return undefined;
        }

        const browserWindow = window as Window & {
            requestIdleCallback?: (
                callback: IdleRequestCallback,
                options?: IdleRequestOptions
            ) => number;
            cancelIdleCallback?: (handle: number) => void;
        };

        const delayId = globalThis.setTimeout(() => {
            if (!browserWindow.requestIdleCallback || !browserWindow.cancelIdleCallback) {
                load();
            }
        }, 2200);

        if (browserWindow.requestIdleCallback && browserWindow.cancelIdleCallback) {
            const idleId = browserWindow.requestIdleCallback(load, { timeout: 2600 });
            return () => {
                globalThis.clearTimeout(delayId);
                browserWindow.cancelIdleCallback?.(idleId);
            };
        }

        return () => globalThis.clearTimeout(delayId);
    }, []);

    return ready ? <GlobeDemo /> : <GlobePlaceholder />;
}
