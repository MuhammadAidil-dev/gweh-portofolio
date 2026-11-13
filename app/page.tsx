import Link from "next/link";
import { StatusCard } from "../features/status/components/card/StatusCard";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">Solvix Frontend</h1>
        <p className="text-sm text-zinc-600">
          Contoh request publik (tanpa token) + auth flow via Zustand memory.
        </p>
      </header>
      <StatusCard />
      <Link href="/login" className="text-sm underline">
        Login
      </Link>
    </section>
  );
}
