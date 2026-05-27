"use client";

import Image from "next/image";
import { JSX, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type ContactMethod = {
    label: string;
    value: string;
    href: string;
    helper: string;
};

type CollaborationItem = {
    title: string;
    text: string;
};

const contactMethods: ContactMethod[] = [
    {
        label: "Email",
        value: "kritdaowaset@gmail.com",
        href: "mailto:kritdaowaset@gmail.com",
        helper: "เหมาะสำหรับส่งรายละเอียดงาน brief หรือคำถามเกี่ยวกับโปรเจค",
    },
    {
        label: "Phone",
        value: "+66 65 296 9841",
        href: "tel:+66652969841",
        helper: "ใช้สำหรับนัดคุยรายละเอียดงานหรือ follow-up ที่ต้องการความรวดเร็ว",
    },
    {
        label: "GitHub",
        value: "github.com/kidrunner1",
        href: "https://github.com/kidrunner1",
        helper: "ดู repository และตัวอย่างโค้ดเพิ่มเติมได้จากโปรไฟล์ GitHub",
    },
];

const collaborationItems: CollaborationItem[] = [
    {
        title: "สร้างเว็บไซต์ Portfolio / Landing Page",
        text: "ช่วยออกแบบหน้าเว็บให้เล่า value ชัดเจน ดูน่าเชื่อถือ และ responsive บนทุกอุปกรณ์",
    },
    {
        title: "พัฒนา Web Application",
        text: "ร่วมพัฒนา UI, component, dashboard หรือ feature ใหม่ด้วย Next.js, React และ TypeScript",
    },
    {
        title: "ปรับ UX/UI ของโปรเจคเดิม",
        text: "ช่วยจัด layout, flow, spacing, interaction และ performance ให้โปรเจคดูดีและใช้งานง่ายขึ้น",
    },
];

const responseSteps = [
    "ส่งรายละเอียดงานหรือไอเดียที่อยากทำ",
    "คุยเป้าหมาย ผู้ใช้ และขอบเขตงาน",
    "เริ่มออกแบบ flow แล้วพัฒนาเป็นหน้าเว็บจริง",
];

export default function ContactPage(): JSX.Element {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 80,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
            <section className="border-b border-white/10 bg-[radial-gradient(circle_at_18%_18%,rgba(20,184,166,0.18),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(244,63,94,0.14),transparent_28%),linear-gradient(135deg,#07111f_0%,#0f172a_52%,#111827_100%)] px-6 pb-20 pt-28 sm:px-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)]">
                    <div className="space-y-8" data-aos="fade-right">
                        <div className="inline-flex items-center rounded-lg border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100">
                            Let&apos;s build something useful
                        </div>

                        <div className="space-y-5">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                                Contact
                            </p>
                            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                                มีไอเดียหรือโปรเจคที่อยากทำให้ดีขึ้น มาคุยกันได้เลย
                            </h1>
                            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                                ถ้าคุณต้องการเว็บไซต์ portfolio, landing page, dashboard หรือ web application
                                ที่ดูดี ใช้งานง่าย และพร้อมต่อยอด ผมพร้อมช่วยเปลี่ยนไอเดียให้เป็นงานจริง
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <a
                                href="mailto:kritdaowaset@gmail.com"
                                className="inline-flex h-12 items-center justify-center rounded-lg bg-teal-400 px-6 text-sm font-bold text-slate-950 shadow-lg shadow-teal-950/30 transition hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                                ส่งอีเมลหาผม
                            </a>

                            <a
                                href="https://github.com/kidrunner1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                                ดู GitHub
                            </a>
                        </div>
                    </div>

                    <div className="relative" data-aos="fade-left">
                        <div className="absolute -inset-3 rounded-lg bg-linear-to-r from-teal-300/20 to-rose-300/20 blur-2xl" />
                        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
                            <Image
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
                                alt="Developer workspace"
                                width={900}
                                height={720}
                                priority
                                className="h-[420px] w-full object-cover sm:h-[520px]"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-transparent p-6">
                                <p className="text-sm font-semibold text-teal-200">Open for collaboration</p>
                                <p className="mt-2 text-2xl font-black text-white">Web app, UI/UX, Front-End</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10 bg-slate-950 px-6 py-14 sm:px-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
                    {contactMethods.map((method, index) => (
                        <a
                            key={method.label}
                            href={method.href}
                            target={method.label === "GitHub" ? "_blank" : undefined}
                            rel={method.label === "GitHub" ? "noopener noreferrer" : undefined}
                            className="group rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-teal-200/40 hover:bg-white/[0.06]"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                {method.label}
                            </p>
                            <p className="mt-3 break-words text-xl font-black text-white group-hover:text-teal-200">
                                {method.value}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                {method.helper}
                            </p>
                        </a>
                    ))}
                </div>
            </section>

            <section className="bg-[#0a1422] px-6 py-20 sm:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl" data-aos="fade-up">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-300">
                            Collaboration
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                            เรื่องที่ติดต่อมาคุยกันได้
                        </h2>
                        <p className="mt-4 text-base leading-8 text-slate-400">
                            ไม่ว่าจะเป็นโปรเจคใหม่หรือโปรเจคเดิมที่อยากยกระดับ UX/UI ผมช่วยมองทั้งภาพรวม
                            รายละเอียดหน้าเว็บ และโครงสร้าง front-end ให้ไปในทิศทางเดียวกัน
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
                        {collaborationItems.map((item, index) => (
                            <article
                                key={item.title}
                                className="rounded-lg border border-white/10 bg-linear-to-b from-white/[0.07] to-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-teal-200/40"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-300/10 text-sm font-bold text-teal-200">
                                    0{index + 1}
                                </div>
                                <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-slate-950 px-6 py-20 sm:px-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
                    <div className="space-y-4" data-aos="fade-right">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">
                            Response Flow
                        </p>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            เริ่มคุยงานได้ง่าย ๆ ใน 3 ขั้นตอน
                        </h2>
                        <p className="text-base leading-8 text-slate-400">
                            ถ้ายังไม่มี brief ที่สมบูรณ์ก็ไม่เป็นไรครับ ส่งไอเดียคร่าว ๆ มาก่อนได้
                            แล้วค่อยช่วยกันจัดขอบเขตและลำดับความสำคัญของงาน
                        </p>
                    </div>

                    <div className="space-y-4">
                        {responseSteps.map((step, index) => (
                            <div
                                key={step}
                                className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-300/10 text-sm font-bold text-rose-200">
                                    {index + 1}
                                </div>
                                <p className="text-base font-semibold leading-7 text-white">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0a1422] px-6 py-20 sm:px-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30" data-aos="fade-right">
                        <Image
                            src="https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_1280.jpg"
                            alt="Workspace desk"
                            width={900}
                            height={600}
                            className="aspect-video w-full object-cover"
                        />
                    </div>

                    <div className="space-y-6" data-aos="fade-left">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-300">
                            Availability
                        </p>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            พร้อมคุยงาน Front-End และ UX/UI
                        </h2>
                        <p className="text-base leading-8 text-slate-400">
                            ผมเปิดรับงาน project-based, collaboration และโอกาสร่วมงานที่เกี่ยวกับ web application,
                            dashboard, landing page หรือการปรับ UX/UI ให้โปรเจคเดิมดูดีขึ้น
                        </p>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Location
                                </p>
                                <p className="mt-2 font-bold text-white">Thailand</p>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    Work Mode
                                </p>
                                <p className="mt-2 font-bold text-white">Remote / On-site</p>
                            </div>
                        </div>

                        <a
                            href="mailto:kritdaowaset@gmail.com?subject=Project%20Inquiry"
                            className="inline-flex h-12 items-center justify-center rounded-lg bg-teal-400 px-6 text-sm font-bold text-slate-950 transition hover:bg-teal-300"
                        >
                            เริ่มคุยโปรเจค
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
