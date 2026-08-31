import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe2,
  Languages,
  Sparkles,
  Users,
} from "lucide-react";

const points = [
  "Structured learning paths",
  "Practical real-world lessons",
  "Progress tracking",
  "Certificates of completion",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#FFF9F5] py-20 sm:py-24 lg:py-28">
      {/* Decorative Shapes */}
      <div className="pointer-events-none absolute -left-24 top-20 h-48 w-48 rounded-full bg-[#E8E1FF]" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-[#FFE0EA]" />

      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        {/* LEFT VISUAL */}
        <div className="relative mx-auto w-full max-w-[570px]">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[38px] border-8 border-white bg-[#E8E1FF] shadow-2xl shadow-[#6C4BF4]/10">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
              <Image
                src="/p2.jpg"
                alt="Students learning languages together"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#181625]/35 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute -right-3 top-8 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-right-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0B8] text-[#9B7200]">
                <Languages size={20} />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wide text-[#85818E]">
                  Available
                </p>

                <p className="mt-0.5 text-lg font-black text-[#181625]">
                  7 Languages
                </p>
              </div>
            </div>
          </div>

          {/* Floating Learners */}
          <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDF8F2] text-[#279782]">
                <Users size={18} />
              </div>

              <div>
                <p className="text-[9px] font-bold text-[#85818E]">
                  Global community
                </p>

                <p className="text-xs font-black text-[#181625]">
                  29K+ learners
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Dots */}
          <div className="absolute -left-3 -top-5 grid grid-cols-3 gap-1.5 sm:-left-7">
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-[#FF6B9D]"
              />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">
          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F1EDFF] px-3.5 py-2">
            <Sparkles size={14} className="text-[#6C4BF4]" />

            <span className="text-xs font-black text-[#5A42C4]">
              Why Dolophino?
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight text-[#181625] sm:text-4xl lg:text-5xl">
            Language learning should feel{" "}
            <span className="text-[#6C4BF4]">exciting.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm font-semibold leading-8 text-[#686575] sm:text-base">
            We believe learning a language is more than memorizing vocabulary
            and completing exercises. It is about gaining the confidence to
            communicate, connect with people and experience the world from a
            new perspective.
          </p>

          <p className="mt-4 max-w-2xl text-sm font-semibold leading-8 text-[#686575] sm:text-base">
            Dolophino brings structured courses, practical conversations,
            engaging exercises and clear progress tracking together in one
            simple learning experience.
          </p>

          {/* Points */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {points.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-3 rounded-2xl p-4 ${
                  index % 2 === 0
                    ? "bg-[#F1EDFF]"
                    : "bg-[#FFF0F4]"
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    index % 2 === 0
                      ? "bg-white text-[#6C4BF4]"
                      : "bg-white text-[#E85B89]"
                  }`}
                >
                  <CheckCircle2 size={17} />
                </div>

                <span className="text-xs font-black text-[#181625]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Mini Feature */}
          <div className="mt-7 flex flex-col gap-4 rounded-3xl border border-[#EAE3FF] bg-white p-5 shadow-sm sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#6C4BF4] text-white">
              <BookOpen size={21} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-black text-[#181625]">
                Learn with a clear path
              </p>

              <p className="mt-1 text-xs font-semibold leading-6 text-[#777481]">
                From your first lesson to confident conversations, every step
                is designed to move you forward.
              </p>
            </div>

            <div className="hidden h-10 w-px bg-[#ECE8F3] sm:block" />

            <div className="flex items-center gap-2 text-xs font-black text-[#6C4BF4]">
              <Globe2 size={16} />
              Global learning
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/dashboard"
            className="group mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#6C4BF4] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#6C4BF4]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#5335D1]"
          >
            Start Your Journey

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}