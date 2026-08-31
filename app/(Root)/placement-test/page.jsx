"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  getUser,
  savePlacementBooking,
} from "../../../lib/storage";

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Japanese",
  "Chinese",
];

const times = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "04:00 PM",
  "06:00 PM",
  "07:30 PM",
];

export default function PlacementTestPage() {
  const router = useRouter();

  const [user] = useState(() => getUser());

  const [form, setForm] = useState({
    name: user?.isLoggedIn
      ? `${user.firstName} ${user.lastName}`
      : "",
    email: user?.isLoggedIn ? user.email : "",
    language: user?.favoriteLanguage || "English",
    date: "",
    time: "",
    goal: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.language ||
      !form.date ||
      !form.time
    ) {
      setError("Please complete all required fields.");

      return;
    }

    const booking = {
      ...form,
      id: Date.now(),
      status: "Requested",
      createdAt: new Date().toISOString(),
    };

    savePlacementBooking(booking);
    setSubmitted(true);
  }

  if (!user?.isLoggedIn) {
    return (
      <main className="min-h-screen bg-[#F7F9F9] px-5 py-10 sm:px-8">
        <div className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center">
          <div className="w-full rounded-[32px] border border-[#E0E8EA] bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF0EB] text-[#FF9678]">
              <CalendarDays size={28} />
            </div>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-[#FF9678]">
              Placement Test
            </p>

            <h1 className="mt-2 text-3xl font-black text-[#24343A]">
              Let&apos;s find your level.
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm font-semibold leading-7 text-[#52636A]">
              Create your free Dolophino account first, then you can book a
              placement test and choose your preferred language, date and time.
            </p>

            <Link
              href="/signup?redirect=placement-test"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#FF9678] px-6 py-3.5 text-sm font-black text-white"
            >
              Create Account
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/"
              className="mt-4 flex items-center justify-center gap-2 text-xs font-black text-[#7896A3]"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#FFF9F6] px-5 py-10 sm:px-8">
        <div className="mx-auto flex min-h-[80vh] max-w-2xl items-center justify-center">
          <div className="w-full rounded-[32px] border border-[#E8DDD8] bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF6EC] text-[#477052]">
              <CheckCircle2 size={38} />
            </div>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-[#FF9678]">
              Booking received
            </p>

            <h1 className="mt-2 text-3xl font-black text-[#24343A]">
              Your placement test is requested!
            </h1>

            <p className="mt-4 text-sm font-semibold leading-7 text-[#52636A]">
              We&apos;ve saved your request for{" "}
              <strong>{form.language}</strong> on{" "}
              <strong>{form.date}</strong> at{" "}
              <strong>{form.time}</strong>.
            </p>

            <div className="mt-7 rounded-2xl bg-[#FFF7F3] p-5 text-left">
              <p className="text-[10px] font-black uppercase tracking-wider text-[#FF9678]">
                What happens next?
              </p>

              <p className="mt-2 text-xs font-semibold leading-6 text-[#52636A]">
                A Dolophino learning advisor will review your request and
                confirm the final appointment time with you.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/dashboard?tab=calendar"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF9678] px-5 py-3 text-xs font-black text-white"
              >
                View My Calendar
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#EEF3F4] px-5 py-3 text-xs font-black text-[#24343A]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F9F9] px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1150px]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-black text-[#7896A3]"
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>

        <div className="mt-7 grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="relative overflow-hidden rounded-[32px] bg-[#7896A3] p-7 text-white sm:p-9">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#FF9678]/30" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7896A3]">
                <CalendarDays size={25} />
              </div>

              <p className="mt-10 text-xs font-black uppercase tracking-[0.18em] text-white/80">
                Find your level
              </p>

              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Book your placement test.
              </h1>

              <p className="mt-5 text-sm font-semibold leading-7 text-white/90">
                Tell us when you&apos;re available and which language you want
                to assess. We&apos;ll use the session to understand your
                current skills and recommend the right learning path.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Personalized level assessment",
                  "Choose your preferred language",
                  "Flexible appointment times",
                  "Recommended learning path",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 p-3"
                  >
                    <CheckCircle2 size={16} />

                    <span className="text-xs font-bold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-[#E0E8EA] bg-white p-6 shadow-sm sm:p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FF9678]">
                Reserve a session
              </p>

              <h2 className="mt-2 text-2xl font-black text-[#24343A]">
                Choose a time that works for you.
              </h2>

              <p className="mt-2 text-xs font-semibold leading-6 text-[#52636A]">
                You can update your preferred details before submitting the
                request.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>

              <Select
                label="Language"
                name="language"
                value={form.language}
                onChange={handleChange}
                options={languages}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                />

                <Select
                  label="Preferred Time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  options={times}
                  placeholder="Choose a time"
                />
              </div>

              <label className="block">
                <span className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#7896A3]">
                  Learning Goal
                </span>

                <textarea
                  name="goal"
                  value={form.goal}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what you want to achieve..."
                  className="w-full resize-none rounded-xl border border-[#DDE7E9] bg-[#F9FBFB] px-4 py-3 text-sm font-semibold text-[#24343A] outline-none placeholder:text-[#9AA7AB] focus:border-[#FF9678] focus:bg-white"
                />
              </label>

              {error && (
                <div className="rounded-2xl bg-[#FFF0EB] px-4 py-3 text-xs font-bold text-[#C85F42]">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FF9678] py-4 text-sm font-black text-white transition hover:bg-[#E77D5F]"
              >
                Request Placement Test
                <ArrowRight size={17} />
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#7896A3]">
        {label}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#DDE7E9] bg-[#F9FBFB] px-4 py-3.5 text-sm font-semibold text-[#24343A] outline-none placeholder:text-[#9AA7AB] focus:border-[#FF9678] focus:bg-white"
      />
    </label>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-black uppercase tracking-wider text-[#7896A3]">
        {label}
      </span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-[#DDE7E9] bg-[#F9FBFB] px-4 py-3.5 text-sm font-semibold text-[#24343A] outline-none focus:border-[#FF9678] focus:bg-white"
      >
        {placeholder && (
          <option value="">
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}