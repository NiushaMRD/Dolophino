"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";

export default function ReservationSection() {
  return (
    <section className="mt-20">
      <div className="relative overflow-hidden rounded-[32px] bg-[#E9F9F4] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        {/* Decorative shapes */}
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#7BC9B6]/20" />
        <div className="absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-[#FF6F91]/10" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-black text-[#4AA991] shadow-sm">
              <Sparkles size={13} />
              PLAN YOUR LEARNING
            </div>

            <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight text-[#24343A] sm:text-4xl lg:text-5xl">
              Ready for your next learning session?
            </h2>

            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-[#52636A]">
              Choose a day, set your preferred time and create a learning
              session that fits your schedule.
            </p>

            <Link
              href="/dashboard?tab=calendar"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#FF6F91] px-5 py-3.5 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-[#E9577B]"
            >
              Book a Session
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0F4] text-[#FF6F91]">
                <CalendarDays size={19} />
              </div>

              <div>
                <p className="text-xs font-black text-[#24343A]">
                  Choose a Date
                </p>

                <p className="mt-1 text-[9px] font-semibold text-[#52636A]">
                  Plan your learning ahead.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9F9F4] text-[#4AA991]">
                <Clock3 size={19} />
              </div>

              <div>
                <p className="text-xs font-black text-[#24343A]">
                  Pick Your Time
                </p>

                <p className="mt-1 text-[9px] font-semibold text-[#52636A]">
                  Set a time that works for you.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF7D8] text-[#A77900]">
                <Sparkles size={19} />
              </div>

              <div>
                <p className="text-xs font-black text-[#24343A]">
                  Keep Learning
                </p>

                <p className="mt-1 text-[9px] font-semibold text-[#52636A]">
                  Stay consistent with your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}