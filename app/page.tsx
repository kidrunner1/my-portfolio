"use client";

import { JSX, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

const GlobeDemo = dynamic(
  () => import("@/app/components/GithubGlobe").then((mod) => mod.GlobeDemo),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[320px] items-center justify-center rounded-lg border border-white/10 bg-slate-950/60 text-sm text-slate-400">
        Loading interactive globe
      </div>
    ),
  }
);

const highlights = [
  { value: "4+", label: "โปรเจคจริง", detail: "เว็บ แอป และ dashboard" },
  { value: "Next.js", label: "Main Stack", detail: "React, TypeScript, Tailwind" },
  { value: "UX", label: "Focus", detail: "ใช้งานง่าย เร็ว และต่อยอดได้" },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Responsive UI",
  "Performance",
  "GitHub",
  "Deployment",
];

const workPrinciples = [
  {
    title: "ออกแบบจากผู้ใช้จริง",
    text: "จัดลำดับข้อมูลให้สแกนง่าย ลดความซับซ้อน และทำให้ทุก action มีเป้าหมายชัดเจน",
  },
  {
    title: "โค้ดอ่านง่ายและดูแลต่อได้",
    text: "แยก component เป็นระบบ ใช้ TypeScript ช่วยลดข้อผิดพลาด และรักษา pattern ให้สม่ำเสมอ",
  },
  {
    title: "พร้อมสำหรับ Production",
    text: "ให้ความสำคัญกับ build, lint, performance, responsive layout และรายละเอียดเล็ก ๆ ที่กระทบประสบการณ์ใช้งาน",
  },
];

const featuredProjects = [
  {
    title: "KICKS VAULT",
    category: "Full-Stack Web App",
    text: "Luxury sneaker store พร้อม authentication, cart, order และ UI แบบ premium",
  },
  {
    title: "CHEMIMONITORING",
    category: "Dashboard",
    text: "ระบบติดตามข้อมูลภาคสนามผ่าน web dashboard ที่เน้นความชัดเจนและใช้งานจริง",
  },
  {
    title: "Power Of Enrichment",
    category: "Mobile App",
    text: "แอปฝึกทักษะภาษาอังกฤษที่ออกแบบ flow ให้เรียนง่ายและเข้าถึงเร็ว",
  },
];

export default function Home(): JSX.Element {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <section className="relative border-b border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.20),transparent_32%),radial-gradient(circle_at_82%_24%,rgba(244,63,94,0.16),transparent_30%),linear-gradient(135deg,#07111f_0%,#101827_48%,#111827_100%)]">
        <div className="mx-auto grid min-h-[calc(100vh-24px)] max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-28 sm:px-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] lg:gap-12 lg:pt-24">
          <div className="space-y-8" data-aos="fade-right">
            <div className="inline-flex items-center gap-3 rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100">
              <span className="h-2 w-2 rounded-full bg-teal-300" />
              Available for Front-End and Web App projects
            </div>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Krit Daowaset
              </p>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Front-End Developer ที่เปลี่ยนไอเดียให้เป็นเว็บที่ใช้งานได้จริง
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                ผมสร้าง web application ด้วย Next.js, React และ TypeScript โดยเน้น UX ที่ชัดเจน
                ความเร็วในการใช้งาน และโครงสร้างโค้ดที่ทีมสามารถดูแลต่อได้ในระยะยาว
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/Portfolio"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-teal-400 px-6 text-sm font-bold text-slate-950 shadow-lg shadow-teal-950/30 transition hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                ดูผลงานของผม
              </Link>

              <Link
                href="/Contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                ติดต่อร่วมงาน
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-xl font-extrabold text-white">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[580px]" data-aos="fade-left">
            <div className="absolute inset-0 rounded-full bg-teal-300/5 blur-3xl" />
            <div className="absolute inset-x-8 top-8 h-px bg-linear-to-r from-transparent via-teal-200/50 to-transparent" />
            <div className="absolute left-0 top-24 z-10 rounded-lg border border-white/10 bg-slate-950/75 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-sm font-bold text-white">Design {"->"} Build {"->"} Ship</p>
              <p className="mt-1 text-xs text-slate-400">From Thailand to global web standards</p>
            </div>
            <div className="absolute bottom-10 left-0 z-10 max-w-[280px] rounded-lg border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
                Current Focus
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                สร้าง portfolio และ product UI ที่เร็ว สวย ใช้งานง่าย และเล่า value ของงานได้ในไม่กี่วินาที
              </p>
            </div>
            <div className="absolute right-0 top-8 z-10 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-sm font-bold text-white">Production Mindset</p>
              <p className="mt-1 text-xs text-slate-400">Lint, Build, Audit, Deploy</p>
            </div>
            <div className="relative h-[430px] sm:h-[560px] lg:h-[620px]">
              <GlobeDemo />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#07111f] to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-14 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl" data-aos="fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">
              Toolset
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              เทคโนโลยีที่ใช้สร้างประสบการณ์บนเว็บ
            </h2>
          </div>

          <div className="flex max-w-3xl flex-wrap gap-3" data-aos="fade-up" data-aos-delay="100">
            {skills.map((skill) => (
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

      <section className="bg-[#0a1422] px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl" data-aos="fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-300">
              How I Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              วิธีคิดในการออกแบบและพัฒนา
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400">
              ผมให้ความสำคัญกับงานที่ดูดี ใช้งานง่าย และมีระบบหลังบ้านของโค้ดที่ไม่กลายเป็นภาระในอนาคต
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {workPrinciples.map((item, index) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-teal-200/40 hover:bg-white/[0.06]"
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

      <section className="bg-slate-950 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between" data-aos="fade-up">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">
                Selected Work
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                ตัวอย่างผลงานที่สะท้อนสไตล์การทำงาน
              </h2>
            </div>

            <Link
              href="/Portfolio"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/15 px-5 text-sm font-bold text-white transition hover:border-teal-200/50 hover:bg-white/10"
            >
              ดูทั้งหมด
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="rounded-lg border border-white/10 bg-linear-to-b from-white/[0.07] to-white/[0.03] p-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="text-sm font-semibold text-rose-200">{project.category}</p>
                <h3 className="mt-4 text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
