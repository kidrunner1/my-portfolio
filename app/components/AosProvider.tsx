"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

export default function AosProvider(): null {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            easing: "ease-out-cubic",
            offset: 80,
        });
    }, []);

    useEffect(() => {
        AOS.refreshHard();
    }, [pathname]);

    return null;
}
