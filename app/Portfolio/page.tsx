"use client";

import Image from "next/image";
import { JSX, useMemo, useState } from "react";
import projects, { type Project } from "../project_data/project";

type ProjectImageCarouselProps = {
    images: string[];
    title: string;
};

function ProjectImageCarousel({
    images,
    title,
}: ProjectImageCarouselProps): JSX.Element {
    const [index, setIndex] = useState<number>(0);

    if (images.length === 0) {
        return (
            <div className="flex aspect-[3/2] items-center justify-center rounded-lg border border-white/10 bg-slate-950 text-sm text-slate-400">
                No image available
            </div>
        );
    }

    const prev = () => {
        setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
    };

    const next = () => {
        setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    };

    return (
        <div className="group relative w-full overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-2xl shadow-black/30">
            <div className="relative aspect-[3/2]">
                <Image
                    src={images[index]}
                    alt={`${title} screenshot ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    priority={index === 0}
                />
            </div>

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={prev}
                        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-white/15 bg-slate-950/80 text-lg font-bold text-white shadow-lg backdrop-blur transition hover:border-teal-200/50 hover:bg-slate-900"
                        aria-label={`Previous ${title} screenshot`}
                    >
                        {"<"}
                    </button>

                    <button
                        type="button"
                        onClick={next}
                        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-white/15 bg-slate-950/80 text-lg font-bold text-white shadow-lg backdrop-blur transition hover:border-teal-200/50 hover:bg-slate-900"
                        aria-label={`Next ${title} screenshot`}
                    >
                        {">"}
                    </button>
                </>
            )}

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 backdrop-blur">
                {images.map((image, imageIndex) => (
                    <button
                        key={image}
                        type="button"
                        onClick={() => setIndex(imageIndex)}
                        className={`h-2 rounded-full transition ${imageIndex === index ? "w-6 bg-teal-300" : "w-2 bg-white/40 hover:bg-white/70"}`}
                        aria-label={`Show ${title} screenshot ${imageIndex + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}): JSX.Element {
    return (
        <article
            className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20"
            data-aos="fade-up"
            data-aos-delay={(index % 2) * 120}
        >
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
                <ProjectImageCarousel images={project.images} title={project.title} />

                <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
                    <div className="space-y-5">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-lg border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-teal-200">
                                {project.category}
                            </span>
                            <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
                                {project.status}
                            </span>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black text-white sm:text-4xl">
                                {project.title}
                            </h2>
                            <p className="mt-3 text-sm font-semibold text-rose-200">
                                {project.role} · {project.year}
                            </p>
                        </div>

                        <p className="text-base leading-8 text-slate-300">
                            {project.description}
                        </p>

                        <div className="rounded-lg border border-white/10 bg-slate-950/60 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                Impact
                            </p>
                            <p className="mt-2 text-sm leading-7 text-slate-300">
                                {project.impact}
                            </p>
                        </div>

                        <ul className="space-y-3 text-sm leading-7 text-slate-400">
                            {project.details.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 items-center justify-center rounded-lg bg-teal-400 px-5 text-sm font-bold text-slate-950 transition hover:bg-teal-300"
                            >
                                View Live
                            </a>
                        )}

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/15 px-5 text-sm font-bold text-white transition hover:border-teal-200/50 hover:bg-white/10"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function PortfolioPage(): JSX.Element {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const categories = useMemo(
        () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
        []
    );

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") {
            return projects;
        }

        return projects.filter((project) => project.category === activeCategory);
    }, [activeCategory]);

    return (
        <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
            <section className="border-b border-white/10 bg-[radial-gradient(circle_at_18%_18%,rgba(20,184,166,0.18),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(244,63,94,0.14),transparent_28%),linear-gradient(135deg,#07111f_0%,#0f172a_52%,#111827_100%)] px-6 pb-16 pt-28 sm:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.55fr)] lg:items-end">
                        <div className="space-y-6" data-aos="fade-up">
                            <div className="inline-flex rounded-lg border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100">
                                Selected Projects
                            </div>

                            <div className="space-y-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                                    Portfolio
                                </p>
                                <h1 className="max-w-4xl text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                                    ผลงานที่เล่าให้เห็นทั้ง UI, UX และวิธีคิดในการพัฒนา
                                </h1>
                                <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                                    รวมโปรเจคที่ผมได้พัฒนา ตั้งแต่ web application, dashboard ไปจนถึง mobile app
                                    โดยแต่ละงานเน้นการออกแบบที่ใช้งานจริง โครงสร้างที่ต่อยอดได้ และประสบการณ์ที่ชัดเจนสำหรับผู้ใช้
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3" data-aos="fade-left">
                            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                                <p className="text-3xl font-black text-white">{projects.length}</p>
                                <p className="mt-1 text-xs leading-5 text-slate-400">Featured projects</p>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                                <p className="text-3xl font-black text-white">
                                    {projects.filter((project) => project.liveUrl).length}
                                </p>
                                <p className="mt-1 text-xs leading-5 text-slate-400">Live demos</p>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                                <p className="text-3xl font-black text-white">
                                    {categories.length - 1}
                                </p>
                                <p className="mt-1 text-xs leading-5 text-slate-400">Categories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10 bg-slate-950 px-6 py-8 sm:px-10">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
                    {categories.map((category) => {
                        const active = category === activeCategory;

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-lg border px-4 py-2 text-sm font-bold transition ${active
                                    ? "border-teal-300 bg-teal-300 text-slate-950"
                                    : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-teal-200/50 hover:bg-white/10"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
            </section>

            <section className="bg-[#0a1422] px-6 py-20 sm:px-10">
                <div className="mx-auto max-w-7xl space-y-10">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
