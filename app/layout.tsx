import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Muhammad Aidil — Web Developer",
  description: "Portofolio Muhammad Aidil, web developer yang membangun website dan aplikasi sesuai kebutuhan bisnis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">{children}</body>
    </html>
  );
}
