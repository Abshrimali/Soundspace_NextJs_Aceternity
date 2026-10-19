"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-bold tracking-wide">
            Soundspace
          </Link>
          <p className="mt-2 text-sm text-gray-400">
            A place to learn, create, and share your music.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-white">
            Lessons
          </Link>
          <Link href="/projects" className="transition hover:text-white">
            Instructors
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Get in touch
          </Link>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {year ?? "2026"} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
