export type Project = {
    id: number;
    category: string;
    title: string;
    description: string;
    details: string[];
    images: string[];
    liveUrl?: string;
    githubUrl?: string;
    role: string;
    year: string;
    status: string;
    stack: string[];
    impact: string;
};

const projects: Project[] = [
    {
        id: 1,
        category: "Full-Stack Web Application",
        title: "KICKS VAULT",
        role: "Full-Stack Developer",
        year: "2026",
        status: "Live",
        impact: "สร้างประสบการณ์ร้านรองเท้า online ที่ดู premium พร้อม flow การซื้อที่ชัดเจน",
        description:
            "Luxury sneaker store web application ที่ออกแบบด้วยแนวคิด dark editorial UI เน้นภาพสินค้า ความน่าเชื่อถือ และประสบการณ์แบบ premium พร้อมระบบ authentication, cart, order และ inventory",
        details: [
            "พัฒนา full-stack ด้วย Next.js, TypeScript, Prisma และ PostgreSQL",
            "ออกแบบ luxury UI พร้อม responsive layout และ interaction ที่เหมาะกับสินค้า fashion",
            "วางระบบ authentication, cart, order และ inventory สำหรับการใช้งานจริง",
            "ใช้ Server Components และแนวคิด performance-first เพื่อลดภาระฝั่ง client",
            "เตรียมโครงสร้างโปรเจคให้ต่อยอด feature ใหม่ได้ง่าย",
        ],
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
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
        githubUrl: "https://github.com/kidrunner1/kicks-vault",
        liveUrl: "https://kicks-vault.vercel.app/",
    },
    {
        id: 2,
        category: "Dashboard",
        title: "CHEMIMONITORING",
        role: "Front-End Developer",
        year: "2025",
        status: "Prototype",
        impact: "ช่วยจัดข้อมูลภาคสนามให้อ่านง่ายและติดตามสถานะได้เร็วขึ้นผ่าน dashboard",
        description:
            "ระบบติดตามและแสดงผลข้อมูลทางเคมีผ่าน web dashboard ที่ออกแบบมาเพื่อการใช้งานจริงในภาคสนาม โดยเน้นการอ่านข้อมูลเร็ว การจัดลำดับความสำคัญ และ layout ที่ชัดเจน",
        details: [
            "พัฒนา front-end ด้วย React และ Tailwind CSS",
            "ออกแบบ dashboard สำหรับแสดงผลข้อมูลแบบ realtime-oriented",
            "จัดโครงสร้าง component ให้แยกส่วนและรองรับการขยายระบบ",
            "โฟกัสการอ่านค่าและสถานะสำคัญให้ผู้ใช้ตัดสินใจได้เร็ว",
        ],
        stack: ["React", "Tailwind CSS", "Dashboard UI", "Responsive Design"],
        images: [
            "/images/Project/CHEMI1.png",
            "/images/Project/CHEMI2.png",
            "/images/Project/CHEMI3.png",
        ],
        githubUrl: "https://github.com/atttyys/cemi-iot-mtr",
    },
    {
        id: 3,
        category: "Mobile Application",
        title: "Power Of Enrichment (POE)",
        role: "Mobile Developer",
        year: "2025",
        status: "Completed",
        impact: "ทำให้การฝึก reading comprehension เป็น flow ที่เข้าใจง่ายและใช้งานบนมือถือได้สะดวก",
        description:
            "Mobile application สำหรับการเรียนรู้ภาษาอังกฤษและฝึกทักษะการอ่าน ออกแบบ flow ให้เข้าใจง่าย เหมาะกับผู้ใช้ที่ต้องการฝึกทำแบบทดสอบและติดตามการเรียนรู้ของตัวเอง",
        details: [
            "พัฒนา mobile app ด้วย React Native และ Expo",
            "ออกแบบหน้าฝึก reading comprehension ให้ใช้งานง่าย",
            "จัด flow แบบทดสอบให้ลดความสับสนของผู้ใช้",
            "ให้ความสำคัญกับ layout บนอุปกรณ์หน้าจอขนาดต่าง ๆ",
        ],
        stack: ["React Native", "Expo", "Mobile UI", "Learning Flow"],
        images: [
            "/images/Project/M1.png",
            "/images/Project/M2.png",
            "/images/Project/M3.png",
            "/images/Project/M4.png",
            "/images/Project/M5.png",
            "/images/Project/M6.png",
        ],
        githubUrl: "https://github.com/kidrunner1/POE-EnglishTest",
    },
    {
        id: 4,
        category: "Web Application",
        title: "ENFA-Website",
        role: "Front-End Developer",
        year: "2025",
        status: "Live",
        impact: "ทดลองแนวทาง visual design และ micro interaction สำหรับ web application",
        description:
            "เว็บไซต์ทดลองแนวคิด UI/UX สำหรับ web application โดยเน้น modern layout, responsive design และ micro animation เพื่อทำให้หน้าเว็บดูมีชีวิตมากขึ้น",
        details: [
            "ออกแบบ responsive layout สำหรับ desktop และ mobile",
            "สร้าง visual direction แบบ modern UI",
            "เพิ่ม micro animation เพื่อช่วยให้ interaction น่าสนใจ",
            "ปรับโครงสร้างหน้าให้เหมาะกับการนำเสนอข้อมูล",
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "Animation"],
        images: [
            "/images/Project/EN1.png",
            "/images/Project/EN2.png",
            "/images/Project/EN3.png",
            "/images/Project/EN4.png",
            "/images/Project/EN7.png",
            "/images/Project/EN6.png",
        ],
        liveUrl: "https://enfa-engineering-is3nelu6r-kidrunner1s-projects.vercel.app/",
        githubUrl: "https://github.com/kidrunner1/ENFA-Website",
    },
];

export default projects;
