"use client";

import Image from "next/image";
import { JSX, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type InfoItem = {
    label: string;
    value: string;
};

type JourneyItem = {
    step: string;
    title: string;
    text: string;
};

type Capability = {
    title: string;
    text: string;
};

const quickInfo: InfoItem[] = [
    { label: "Role", value: "Front-End Developer" },
    { label: "Main Stack", value: "Next.js, React, TypeScript" },
    { label: "Focus", value: "UX, Performance, Maintainability" },
    { label: "Work Style", value: "Remote / On-site ตามความเหมาะสม" },
];

const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Design",
    "Git / GitHub",
    "Vercel",
    "REST API",
    "UI Optimization",
];

const journeyItems: JourneyItem[] = [
    {
        step: "01",
        title: "เริ่มจากการสร้าง UI ที่ใช้งานง่าย",
        text: "ผมให้ความสำคัญกับการจัดลำดับข้อมูล ปุ่มที่กดง่าย และ layout ที่ช่วยให้ผู้ใช้เข้าใจหน้าเว็บได้เร็ว",
    },
    {
        step: "02",
        title: "ต่อยอดสู่ Web Application",
        text: "พัฒนาโปรเจคด้วย React และ Next.js โดยดูทั้งฝั่งประสบการณ์ผู้ใช้ โครงสร้าง component และการเชื่อมต่อข้อมูล",
    },
    {
        step: "03",
        title: "โฟกัสงานที่พร้อมใช้งานจริง",
        text: "ก่อนส่งงาน ผมให้ความสำคัญกับ lint, build, responsive behavior, performance และรายละเอียดที่ทำให้เว็บดูน่าเชื่อถือ",
    },
];

const capabilities: Capability[] = [
    {
        title: "UX Thinking",
        text: "มอง flow ของผู้ใช้ก่อนลงรายละเอียด เพื่อให้หน้าเว็บพาคนไปยัง action สำคัญได้อย่างเป็นธรรมชาติ",
    },
    {
        title: "Clean Front-End",
        text: "เขียน component ให้แยกหน้าที่ชัดเจน อ่านง่าย และปรับแก้ได้โดยไม่กระทบส่วนอื่นเกินจำเป็น",
    },
    {
        title: "Growth Mindset",
        text: "เปิดรับ feedback และเรียนรู้เครื่องมือใหม่ ๆ เพื่อพัฒนาคุณภาพงานให้ดีขึ้นเรื่อย ๆ",
    },
];

export default function AboutPage(): JSX.Element {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });
    }, []);

    return (
        <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
            <section className="border-b border-white/10 bg-[radial-gradient(circle_at_20%_18%,rgba(20,184,166,0.18),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(244,63,94,0.14),transparent_28%),linear-gradient(135deg,#07111f_0%,#0f172a_52%,#111827_100%)] px-6 pb-20 pt-28 sm:px-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)]">
                    <div className="space-y-8" data-aos="fade-right">
                        <div className="inline-flex items-center rounded-lg border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100">
                            About Krit Daowaset
                        </div>

                        <div className="space-y-5">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                                Front-End Developer
                            </p>

                            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                                ผมชอบสร้างเว็บที่ดูดี ใช้งานง่าย และมีโค้ดที่ทีมดูแลต่อได้
                            </h1>

                            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                                ผมคือ Front-End Developer ที่สนใจการพัฒนา Web Application ด้วย Next.js,
                                React และ TypeScript โดยเน้นการออกแบบประสบการณ์ผู้ใช้ โครงสร้างโค้ดที่ชัดเจน
                                และคุณภาพของงานที่พร้อมนำไปใช้งานจริง
                            </p>

                            <p className="max-w-3xl text-base leading-8 text-slate-400">
                                เป้าหมายของผมคือการเติบโตเป็น developer ที่สร้างระบบได้อย่างมั่นใจ
                                ทำงานร่วมกับทีมได้ดี และส่งมอบผลงานที่ช่วยให้ผู้ใช้รู้สึกว่าเว็บใช้งานง่ายตั้งแต่ครั้งแรก
                            </p>
                        </div>
                    </div>

                    <div className="relative" data-aos="fade-left">
                        <div className="absolute -inset-3 rounded-lg bg-linear-to-r from-teal-300/20 to-rose-300/20 blur-2xl" />
                        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
                            <Image
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                                alt="Workspace dashboard visual"
                                width={800}
                                height={900}
                                priority
                                className="h-[420px] w-full object-cover sm:h-[520px]"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-transparent p-6">
                                <p className="text-sm font-semibold text-teal-200">Currently building</p>
                                <p className="mt-2 text-2xl font-black text-white">Better web experiences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10 bg-slate-950 px-6 py-14 sm:px-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-4">
                    {quickInfo.map((item, index) => (
                        <div
                            key={item.label}
                            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                {item.label}
                            </p>
                            <p className="mt-3 text-base font-bold leading-6 text-white">{item.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#0a1422] px-6 py-20 sm:px-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
                    <div data-aos="fade-right">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">
                            Stack & Skill
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                            เครื่องมือที่ใช้สร้างงานให้เป็นระบบ
                        </h2>
                        <p className="mt-4 text-base leading-8 text-slate-400">
                            ผมเลือกใช้เครื่องมือที่ช่วยให้พัฒนาเร็วขึ้น แต่ยังคุมคุณภาพของ UI,
                            performance และ maintainability ได้ดี
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3" data-aos="fade-left">
                        {techStack.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-slate-950 px-6 py-20 sm:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl" data-aos="fade-up">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-300">
                            My Journey
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                            เส้นทางและแนวทางการทำงาน
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
                        {journeyItems.map((item, index) => (
                            <article
                                key={item.step}
                                className="rounded-lg border border-white/10 bg-linear-to-b from-white/[0.07] to-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-teal-200/40"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <p className="text-sm font-black text-teal-200">{item.step}</p>
                                <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0a1422] px-6 py-20 sm:px-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
                    <div className="space-y-4" data-aos="fade-right">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">
                            Work Values
                        </p>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            สิ่งที่ผมให้ความสำคัญ
                        </h2>
                        <p className="text-base leading-8 text-slate-400">
                            งานที่ดีสำหรับผมไม่ใช่แค่หน้าตาสวย แต่ต้องตอบโจทย์ผู้ใช้จริง
                            โหลดได้ดีบนหลายอุปกรณ์ และมีโครงสร้างที่พร้อมเติบโตไปกับโปรเจค
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {capabilities.map((item, index) => (
                            <article
                                key={item.title}
                                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 px-6 py-20 sm:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-aos="fade-up">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-300">
                                Location
                            </p>
                            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                                พร้อมทำงานทั้ง Remote และ On-site
                            </h2>
                        </div>
                        <p className="max-w-2xl text-sm leading-7 text-slate-400">
                            ปัจจุบันอยู่ในประเทศไทย และพร้อมพูดคุยรายละเอียดงานเพื่อเลือกวิธีทำงานที่เหมาะกับโปรเจคที่สุด
                        </p>
                    </div>

                    <div
                        className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30"
                        data-aos="zoom-in"
                    >
                        <div className="h-[300px] w-full sm:h-[400px] md:h-[460px]">
                            <iframe
                                title="Location Map"
                                src="https://www.google.com/maps?q=17.210138351741154,103.648646739886&z=15&output=embed"
                                className="h-full w-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 border-t border-white/10 p-6 md:grid-cols-3">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Base
                                </p>
                                <p className="mt-2 font-bold text-white">Thailand</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Availability
                                </p>
                                <p className="mt-2 font-bold text-white">Project-based / Collaboration</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Preferred Work
                                </p>
                                <p className="mt-2 font-bold text-white">Web App, Portfolio, Dashboard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
