import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F5]">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#E8E1FF]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[430px] w-[430px] rounded-full bg-[#FFE2EC]" />

      <div className="pointer-events-none absolute left-[42%] top-32 hidden h-20 w-20 rotate-12 rounded-3xl bg-[#FFF0B8] lg:block" />

      <div className="pointer-events-none absolute right-[46%] bottom-20 hidden h-12 w-12 rounded-full bg-[#CFF6EE] lg:block" />

      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-[1400px] items-center gap-14 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-20">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5DFFF] bg-white px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEE9FF]">
              <Sparkles size={13} className="text-[#6C4BF4]" />
            </span>

            <span className="text-xs font-extrabold text-[#4D3BA8]">
              Learn languages differently
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.04] tracking-tight text-[#181625] sm:text-5xl lg:text-[70px]">
            Your language.
            <span className="mt-2 block text-[#6C4BF4]">
              Your new world.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base font-semibold leading-8 text-[#686575] sm:text-lg">
            Learn languages with practical courses, engaging lessons and a
            learning experience built around real communication.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6C4BF4] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#6C4BF4]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#5335D1]"
            >
              Start Learning

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/#courses"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E4DFD8] bg-white px-6 py-3.5 text-sm font-extrabold text-[#181625] transition duration-300 hover:-translate-y-1 hover:border-[#D6CEFF] hover:bg-[#F8F5FF]"
            >
              Explore Courses
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <div className="flex -space-x-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#FFD6E3] text-xs font-black text-[#8E3152]">
                A
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#DCD4FF] text-xs font-black text-[#503CA7]">
                M
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#FFE7A8] text-xs font-black text-[#8A6510]">
                S
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#CFF3EA] text-xs font-black text-[#247668]">
                +
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Star
                  size={14}
                  fill="currentColor"
                  className="text-[#FFC857]"
                />

                <span className="text-sm font-black text-[#181625]">
                  4.9/5
                </span>
              </div>

              <p className="mt-0.5 text-[11px] font-bold text-[#777481]">
                Loved by 29K+ learners
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
          {/* Main Image Container */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[42px] bg-gradient-to-br from-[#DDD5FF] via-[#FFE0EA] to-[#FFF0B5] opacity-80 blur-sm" />

            <div className="relative overflow-hidden rounded-[38px] border-8 border-white bg-white shadow-2xl shadow-[#6C4BF4]/10">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
                <img
                  src="/p1.jpg"
                  alt="Student learning a language online"
                  className="h-full w-full object-cover"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181625]/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Course Card */}
            <div className="absolute -left-4 top-8 w-[190px] rounded-2xl border border-white/80 bg-white p-4 shadow-xl sm:-left-10 sm:w-[210px]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEE9FF] text-[#6C4BF4]">
                  <Play size={17} fill="currentColor" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-extrabold uppercase tracking-wider text-[#85818E]">
                    Continue learning
                  </p>

                  <p className="mt-1 truncate text-xs font-black text-[#181625]">
                    Everyday English
                  </p>
                </div>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#EEEAF7]">
                <div className="h-full w-[78%] rounded-full bg-[#6C4BF4]" />
              </div>

              <div className="mt-2 flex justify-between text-[9px] font-bold text-[#777481]">
                <span>78% completed</span>
                <span>18/24</span>
              </div>
            </div>

            {/* Floating Students Card */}
            <div className="absolute -right-3 top-24 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDF8F2] text-[#279782]">
                  <Users size={18} />
                </div>

                <div>
                  <p className="text-[9px] font-bold text-[#85818E]">
                    Active learners
                  </p>

                  <p className="mt-0.5 text-sm font-black text-[#181625]">
                    29K+
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement Card */}
            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E1F8F1] text-[#279782]">
                  <CheckCircle2 size={19} />
                </div>

                <div>
                  <p className="text-[9px] font-bold text-[#777481]">
                    Achievement unlocked
                  </p>

                  <p className="text-xs font-black text-[#181625]">
                    10 Day Streak 🔥
                  </p>
                </div>
              </div>
            </div>

            {/* Rating Card */}
            <div className="absolute -bottom-4 right-3 rounded-2xl border border-white bg-[#181625] px-4 py-3 shadow-xl sm:-right-7">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFC857]">
                  <Star
                    size={15}
                    fill="currentColor"
                    className="text-[#181625]"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold text-[#B7B4C0]">
                    COURSE RATING
                  </p>

                  <p className="text-sm font-black text-white">4.9 / 5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Dots */}
          <div className="absolute -right-4 -top-5 grid grid-cols-3 gap-1.5 sm:-right-7">
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-[#6C4BF4]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}