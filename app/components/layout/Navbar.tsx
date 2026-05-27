"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { JSX } from "react";

type NavLink = {
    href: string;
    label: string;
    helper: string;
};

const navLinks: NavLink[] = [
    { href: "/", label: "Home", helper: "Intro" },
    { href: "/About", label: "About", helper: "Profile" },
    { href: "/Portfolio", label: "Projects", helper: "Work" },
];

const MenuIcon = (): JSX.Element => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="h-5 w-5"
        aria-hidden="true"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7h16M4 12h16M4 17h16"
        />
    </svg>
);

const CloseIcon = (): JSX.Element => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="h-5 w-5"
        aria-hidden="true"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);

export default function Navbar(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    return (
        <header className="fixed left-1/2 top-4 z-50 w-[94%] max-w-5xl -translate-x-1/2">
            <nav className="rounded-lg border border-white/10 bg-slate-950/82 px-3 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-3 rounded-lg px-2 py-1.5 transition hover:bg-white/[0.04]"
                        aria-label="Go to home page"
                    >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-300 text-sm font-black text-slate-950 shadow-lg shadow-teal-950/30">
                            KD
                        </span>
                        <span className="hidden leading-tight sm:block">
                            <span className="block text-sm font-black tracking-tight text-white">
                                Krit Daowaset
                            </span>
                            <span className="block text-xs font-medium text-slate-400 group-hover:text-slate-300">
                                Front-End Developer
                            </span>
                        </span>
                    </Link>

                    <div className="hidden items-center rounded-lg border border-white/10 bg-white/[0.03] p-1 md:flex">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`rounded-md px-4 py-2 text-sm font-bold transition ${active
                                        ? "bg-white text-slate-950 shadow-sm"
                                        : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                        <Link
                            href="/Contact"
                            className={`inline-flex h-10 items-center justify-center rounded-lg px-5 text-sm font-black transition ${isActive("/Contact")
                                ? "bg-white text-slate-950"
                                : "bg-teal-400 text-slate-950 hover:bg-teal-300"
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen((current) => !current)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-teal-200/50 hover:bg-white/10 hover:text-white md:hidden"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${open
                        ? "max-h-[420px] opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="mt-3 border-t border-white/10 pt-3">
                        <div className="grid gap-2">
                            {[...navLinks, { href: "/Contact", label: "Contact", helper: "Start a project" }].map((link) => {
                                const active = isActive(link.href);

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`rounded-lg border px-4 py-3 transition ${active
                                            ? "border-teal-300 bg-teal-300 text-slate-950"
                                            : "border-white/10 bg-white/[0.04] text-white hover:border-teal-200/50 hover:bg-white/10"
                                            }`}
                                    >
                                        <span className="block text-sm font-black">{link.label}</span>
                                        <span className={`mt-1 block text-xs ${active ? "text-slate-800" : "text-slate-400"}`}>
                                            {link.helper}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
