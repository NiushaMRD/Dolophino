"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Home,
  BookOpen,
  GitBranch,
  ClipboardCheck,
  CalendarDays,
  Award,
  MessageCircle,
  Bell,
  User,
  Settings,
  LogOut,
  X,
  Globe2,
  Sparkles,
} from "lucide-react";

const mainItems = [
  {
    label: "Overview",
    icon: Home,
    tab: "overview",
  },
  {
    label: "My Courses",
    icon: BookOpen,
    tab: "courses",
  },
  {
    label: "Learning Paths",
    icon: GitBranch,
    tab: "paths",
  },
  {
    label: "Assignments",
    icon: ClipboardCheck,
    tab: "assignments",
  },
  {
    label: "Calendar",
    icon: CalendarDays,
    tab: "calendar",
  },
  {
    label: "Certificates",
    icon: Award,
    tab: "certificates",
  },
  {
    label: "Messages",
    icon: MessageCircle,
    tab: "messages",
  },
  {
    label: "Notifications",
    icon: Bell,
    tab: "notifications",
  },
];

const bottomItems = [
  {
    label: "Profile",
    icon: User,
    tab: "profile",
  },
  {
    label: "Settings",
    icon: Settings,
    tab: "settings",
  },
];

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "overview";

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-[#24343A]/30 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-[#EEE5E1] bg-white transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-[88px] items-center justify-between border-b border-[#F0E8E4] px-6">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
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
              <p className="text-base font-black tracking-tight text-[#24343A]">
                Dolophino
              </p>

              <p className="text-[8px] font-extrabold tracking-[0.14em] text-[#6B58C9]">
                LANGUAGE ACADEMY
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF0EA] text-[#24343A] lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="mb-4 rounded-2xl bg-[#F1EDFF] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#6B58C9]">
                <Sparkles size={17} />
              </div>

              <div>
                <p className="text-[10px] font-black text-[#24343A]">
                  Learning Hub
                </p>

                <p className="mt-0.5 text-[8px] font-bold text-[#52636A]">
                  7 languages available
                </p>
              </div>
            </div>
          </div>

          <p className="mb-3 px-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#6B58C9]">
            Learning
          </p>

          <nav className="space-y-1">
            {mainItems.map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.tab;

              return (
                <Link
                  key={item.tab}
                  href={`/dashboard?tab=${item.tab}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-extrabold transition ${
                    active
                      ? "bg-[#F1EDFF] text-[#24343A]"
                      : "text-[#52636A] hover:bg-[#FFF8F5] hover:text-[#24343A]"
                  }`}
                >
                  <Icon
                    size={18}
                    className={
                      active
                        ? "text-[#6B58C9]"
                        : "text-[#7A898E]"
                    }
                  />

                  <span>{item.label}</span>

                  {item.tab === "notifications" && (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF6F61] px-1.5 text-[9px] font-black text-white">
                      3
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="my-7 h-px bg-[#F0E8E4]" />

          <p className="mb-3 px-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#6B58C9]">
            Account
          </p>

          <nav className="space-y-1">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.tab;

              return (
                <Link
                  key={item.tab}
                  href={`/dashboard?tab=${item.tab}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-extrabold transition ${
                    active
                      ? "bg-[#FFF0EA] text-[#24343A]"
                      : "text-[#52636A] hover:bg-[#FFF8F5]"
                  }`}
                >
                  <Icon
                    size={18}
                    className={
                      active
                        ? "text-[#FF6F61]"
                        : "text-[#7A898E]"
                    }
                  />

                  <span>{item.label}</span>
                </Link>
              );
            })}

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-extrabold text-[#52636A] transition hover:bg-[#FFF0EA] hover:text-[#C85F42]"
            >
              <LogOut size={18} />
              <span>Log Out</span>
            </Link>
          </nav>
        </div>

        {/* User Card */}
        <div className="border-t border-[#F0E8E4] p-4">
          <Link
            href="/dashboard?tab=profile"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 rounded-2xl bg-[#FFF8F5] p-3 transition hover:bg-[#FFF0EA]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6B58C9] text-sm font-black text-white">
              S
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-black text-[#24343A]">
                Sofia Morgan
              </p>

              <p className="truncate text-[10px] font-bold text-[#52636A]">
                English • B1 Level
              </p>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}