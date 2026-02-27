/* ================= TYPES ================= */

export type Project = {
    id: number;
    category: string;
    title: string;
    description: string;
    details: string[];
    images: string[];
    liveUrl?: string;
    githubUrl?: string;
};

/* ================= DATA ================= */

const projects: Project[] = [

    {
        id: 1,

        category: "Full-Stack Web Application",

        title: "KICKS VAULT",

        description:
            "Luxury Sneaker Store Web Application ที่ออกแบบด้วยแนวคิด Dark Editorial UI เน้นประสบการณ์ระดับ Premium พร้อมระบบ Authentication, Cart, Order และ Production-grade Architecture พัฒนาด้วย Next.js 16, TypeScript และ PostgreSQL",

        details: [

            "พัฒนา Full-Stack ด้วย Next.js 16, TypeScript และ PostgreSQL",

            "ออกแบบ Luxury UI พร้อม Animation และ Responsive Design",

            "ระบบ Authentication, Cart, Order และ Inventory",

            "ใช้ Prisma ORM และ Production-ready Architecture",

            "Optimize Performance ด้วย Server Component และ ISR",

        ],

        images: [

            "/images/Project/kicks1.png",
            "/images/Project/kicks2.png",
            "/images/Project/kicks3.png",
            "/images/Project/kicks4.png",
            "/images/Project/kicks5.png",
            "/images/Project/kicks6.png",
            "/images/Project/kicks7.png",
            "/images/Project/kicks8.png",
            "/images/Project/kicks9.png",
            "/images/Project/kicks10.png",

        ],

        githubUrl:
            "https://github.com/kidrunner1/kicks-vault",

        liveUrl:
            "https://kicks-vault.vercel.app/login",

    },

    {
        id: 2,
        category: "Web Application",
        title: "CHEMIMONITORING",
        description:
            "ระบบติดตามและแสดงผลข้อมูลทางเคมีผ่าน Web Dashboard ที่ออกแบบมาเพื่อการใช้งานจริงในภาคสนาม",

        details: [
            "พัฒนา Front-End ด้วย React และ Tailwind CSS",
            "ออกแบบ Dashboard สำหรับแสดงผลข้อมูลแบบ Realtime",
            "โครงสร้างโค้ดแยกส่วนชัดเจน รองรับการขยายระบบ",
        ],

        images: [
            "/images/Project/CHEMI1.png",
            "/images/Project/CHEMI2.png",
            "/images/Project/CHEMI3.png",
        ],

        githubUrl:
            "https://github.com/atttyys/cemi-iot-mtr",
    },

    {
        id: 3,
        category: "Mobile Application",
        title: "Power Of Enrichment (POE)",

        description:
            "แอปพลิเคชันเพื่อการเรียนรู้ภาษาอังกฤษ เพื่อพัฒนาทักษะการอ่าน",

        details: [
            "พัฒนาแอปด้วย React Native และ Expo",
            "ฝึก Reading Comprehension",
            "UI ใช้งานง่าย",
        ],

        images: [
            "/images/Project/M1.png",
            "/images/Project/M2.png",
            "/images/Project/M3.png",
            "/images/Project/M4.png",
            "/images/Project/M5.png",
            "/images/Project/M6.png",
        ],

        githubUrl:
            "https://github.com/kidrunner1/POE-EnglishTest",
    },

    {
        id: 4,
        category: "Web Application",
        title: "ENFA-Website",

        description:
            "ทดลองแนวคิด UI/UX สำหรับ Web Application",

        details: [
            "Responsive Design",
            "Modern UI",
            "Micro animation",
        ],

        images: [
            "/images/Project/EN1.png",
            "/images/Project/EN2.png",
            "/images/Project/EN3.png",
            "/images/Project/EN4.png",
            "/images/Project/EN7.png",
            "/images/Project/EN6.png",
        ],

        liveUrl:
            "https://enfa-engineering-is3nelu6r-kidrunner1s-projects.vercel.app/",

        githubUrl:
            "https://github.com/kidrunner1/ENFA-Website",
    },

];

export default projects;