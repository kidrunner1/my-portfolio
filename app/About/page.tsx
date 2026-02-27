"use client";

import { JSX, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type JourneyItem = {
    title: string;
    color: string;
    text: string;
};

export default function AboutPage(): JSX.Element {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });
    }, []);

    const journeyItems: JourneyItem[] = [
        {
            title: "เทคโนโลยีที่ใช้",
            color: "text-purple-400",
            text: "React, Next.js, JavaScript, Tailwind CSS รวมถึงเครื่องมือที่ช่วยให้การพัฒนาเป็นระบบ",
        },
        {
            title: "วิธีคิดในการพัฒนา",
            color: "text-pink-400",
            text: "เน้นความเรียบง่ายของโค้ด แยกโครงสร้างชัดเจน และเลือกใช้เทคโนโลยีให้เหมาะกับงาน",
        },
        {
            title: "เป้าหมายระยะยาว",
            color: "text-red-400",
            text: "พัฒนาตัวเองให้เป็น Developer ที่สร้างระบบคุณภาพและเติบโตไปพร้อมกับทีม",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">

            {/* Section 1: Intro */}
            <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text */}
                <div className="space-y-6" data-aos="fade-right">

                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
                        data-aos="zoom-in"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                            Krit Daowaset
                        </span>
                    </h1>

                    <h2
                        className="text-xl sm:text-2xl text-slate-300 font-medium"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Front-End Developer
                    </h2>

                    <p
                        className="text-slate-300 text-lg leading-relaxed max-w-xl"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        ผมเป็น Front-End Developer ที่สนใจการพัฒนา Web Application
                        ด้วยเทคโนโลยีสมัยใหม่ โดยให้ความสำคัญกับโครงสร้างโค้ดที่ชัดเจน
                        ประสบการณ์ผู้ใช้ และประสิทธิภาพของระบบ
                    </p>

                    <p
                        className="text-slate-400 leading-relaxed max-w-xl"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        ผมสนุกกับการเรียนรู้สิ่งใหม่ ๆ และพยายามพัฒนาทักษะอย่างต่อเนื่อง
                        เพื่อสร้างผลงานที่สามารถนำไปใช้งานได้จริงในระดับ Production
                    </p>

                </div>

                {/* Image */}
                <div className="flex justify-center md:justify-end" data-aos="fade-left">
                    <div className="relative group">

                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition" />

                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                            alt="Profile visual"
                            className="relative w-full max-w-md rounded-2xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />

                    </div>
                </div>

            </section>

            {/* Section 2 */}
            <section className="bg-slate-800/50 backdrop-blur-sm py-24">

                <div className="max-w-5xl mx-auto px-6 space-y-12">

                    <h3
                        className="text-3xl sm:text-4xl font-bold text-center"
                        data-aos="fade-up"
                    >
                        เส้นทางและแนวทางการทำงาน
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {journeyItems.map((item, index) => (
                            <div
                                key={item.title}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="bg-slate-900 p-6 rounded-xl border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                            >
                                <h4 className={`text-lg font-semibold mb-3 ${item.color}`}>
                                    {item.title}
                                </h4>

                                <p className="text-slate-300 leading-relaxed">
                                    {item.text}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* Section 3 */}
            <section className="py-24 px-6">

                <div className="max-w-6xl mx-auto space-y-10">

                    <div className="text-center space-y-3" data-aos="fade-up">

                        <h3 className="text-3xl sm:text-4xl font-bold">
                            ที่อยู่ของผม
                        </h3>

                        <p className="text-slate-400">
                            พิกัดสถานที่ปัจจุบันที่ใช้ทำงานและพัฒนาโปรเจกต์
                        </p>

                    </div>

                    <div
                        className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                        data-aos="zoom-in"
                    >

                        <div className="w-full h-[300px] sm:h-[400px] md:h-[450px]">
                            <iframe
                                title="Location Map"
                                src="https://www.google.com/maps?q=17.210138351741154,103.648646739886&z=15&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="p-6 text-center" data-aos="fade-up" data-aos-delay="200">

                            <p className="text-slate-300 font-medium">
                                📍 หมู่บ้านตาดโพนไผ่
                            </p>

                            <p className="text-slate-400 text-sm mt-1">
                                พร้อมทำงานแบบ Remote และ On-site ตามความเหมาะสม
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}