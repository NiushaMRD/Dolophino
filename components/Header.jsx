"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Courses",
      href: "/#courses",
    },
    {
      label: "About",
      href: "/#about",
    },
    {
      label: "FAQ",
      href: "/#faq",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#EEE9E3] bg-[#FFFDFB]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* =========================
            LOGO
        ========================= */}

        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Dolophino Home"
        >
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#E7E0FF] bg-[#F1EDFF] transition duration-300 group-hover:scale-105">
            {
             
              <img
                src="/l.jpg"
                alt="Dolophino Logo"
                className="h-full w-full object-cover"
              />
            }
          </div>

          <div>
            <span className="block text-lg font-black tracking-tight text-[#181625]">
              Dolophino
            </span>

            <span className="hidden text-[9px] font-extrabold tracking-[0.18em] text-[#6C4BF4] sm:block">
              LANGUAGE ACADEMY
            </span>
          </div>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative text-sm font-extrabold text-[#686575] transition duration-200 hover:text-[#6C4BF4]"
            >
              {item.label}

              <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 scale-0 rounded-full bg-[#FF6B9D] transition-transform duration-200 group-hover:scale-100" />
            </Link>
          ))}
        </nav>

        {/* =========================
            DESKTOP ACTIONS
        ========================= */}

        <div className="hidden items-center gap-2 lg:flex">

          <Link
            href="/dashboard"
            className="rounded-xl px-4 py-2.5 text-sm font-extrabold text-[#686575] transition duration-200 hover:bg-[#F5F2FF] hover:text-[#6C4BF4]"
          >
            Log In
          </Link>

          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#6C4BF4] px-5 py-3 text-sm font-extrabold text-white shadow-md shadow-[#6C4BF4]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#5335D1]"
          >
            Get Started

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* =========================
            MOBILE BUTTON
        ========================= */}

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1EDFF] text-[#6C4BF4] transition hover:bg-[#E7E0FF] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}

      {open && (
        <div className="border-t border-[#EEE9E3] bg-[#FFFDFB] px-5 py-5 shadow-lg shadow-black/5 lg:hidden">

          <nav className="flex flex-col gap-1.5">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-extrabold text-[#181625] transition hover:bg-[#F4F0FF] hover:text-[#6C4BF4]"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#EEE9E3] pt-4">

              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-[#E1DCD6] bg-white px-4 py-3 text-center text-sm font-extrabold text-[#181625] transition hover:border-[#D6CEFF] hover:bg-[#F8F5FF]"
              >
                Log In
              </Link>

              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-[#6C4BF4] px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#5335D1]"
              >
                Get Started
              </Link>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}