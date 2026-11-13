export const technologyGroups = [
  {
    title: "Bahasa",
    label: "Bahasa pemrograman",
    items: [
      { name: "JavaScript", logo: "javascript" },
      { name: "TypeScript", logo: "typescript" },
    ],
  },
  {
    title: "Frontend",
    label: "Teknologi frontend",
    items: [
      { name: "Next.js", logo: "next" },
      { name: "Tailwind CSS", logo: "tailwind" },
    ],
  },
  {
    title: "Backend",
    label: "Teknologi backend",
    items: [{ name: "Express.js", logo: "express" }],
  },
  {
    title: "Database",
    label: "Database",
    items: [
      { name: "MongoDB", logo: "mongodb" },
      { name: "PostgreSQL", logo: "postgresql" },
    ],
  },
  {
    title: "Tools",
    label: "Tools pengembangan dan kolaborasi",
    items: [
      { name: "GitHub", logo: "github" },
      { name: "Postman", logo: "postman" },
      { name: "Notion", logo: "notion" },
      { name: "Figma", logo: "figma" },
    ],
  },
] as const;

export const services = [
  {
    number: "01",
    category: "Pengembangan",
    title: "Pengembangan website",
    description: "Website dan aplikasi web yang disesuaikan dengan kebutuhan bisnis.",
    icon: "browser",
  },
  {
    number: "02",
    category: "Antarmuka",
    title: "Antarmuka web",
    description: "Antarmuka responsif dengan Next.js dan Tailwind CSS.",
    icon: "layout",
  },
  {
    number: "03",
    category: "Integrasi",
    title: "Integrasi layanan",
    description: "API dengan Express.js serta penyimpanan data MongoDB atau PostgreSQL.",
    icon: "database",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Pahami kebutuhan",
    description: "Samakan tujuan, pengguna, dan ruang lingkup proyek.",
    output: "Brief proyek",
  },
  {
    number: "02",
    title: "Susun rencana",
    description: "Tetapkan prioritas fitur, jadwal, dan cara berkomunikasi.",
    output: "Rencana kerja",
  },
  {
    number: "03",
    title: "Kembangkan dan tinjau",
    description: "Bangun solusi secara bertahap, lalu tinjau bersama klien.",
    output: "Versi siap diuji",
  },
  {
    number: "04",
    title: "Uji dan serah terima",
    description: "Periksa hasil akhir, lalu serahkan proyek dan dokumentasinya.",
    output: "Proyek siap digunakan",
  },
] as const;

export const profileSkills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "GitHub",
  "Postman",
  "Notion",
  "Figma",
] as const;

