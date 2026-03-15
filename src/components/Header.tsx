"use client";

import Image from "next/image";
import { useState } from "react";

const CALENDLY_URL = "https://calendly.com";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo-rt.svg"
            alt="RT Creative Studio"
            width={160}
            height={24}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#offres" className="text-sm font-medium text-text hover:text-primary">
            Offres
          </a>
          <a href="#contact" className="text-sm font-medium text-text hover:text-primary">
            Contact
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[15px] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #146DFC, #0C4196)" }}
          >
            Parlons de votre projet
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-text transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-text transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-text transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-gray-100 bg-white px-6 py-6 md:hidden">
          <a href="#offres" onClick={() => setMenuOpen(false)} className="text-base font-medium">
            Offres
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-base font-medium">
            Contact
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[15px] px-5 py-3 text-center text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #146DFC, #0C4196)" }}
          >
            Parlons de votre projet
          </a>
        </nav>
      )}
    </header>
  );
}
