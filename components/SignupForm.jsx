"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { saveUser } from "@/lib/storage";

export default function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectTarget = searchParams.get("redirect");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    language: "English",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
    setError("");

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const email = form.email.trim().toLowerCase();
    const password = form.password.trim();

    if (!firstName || !lastName || !email || !password) {
      setError("Please complete all required fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const newUser = {
      isLoggedIn: true,
      firstName,
      lastName,
      email,
      password,
      level: "A1 — Beginner",
      learningLanguages: [form.language],
      avatar: "",
    };

    saveUser(newUser);

    setSuccess(true);

    setTimeout(() => {
      if (redirectTarget === "placement-test") {
        router.push("/placement-test");
        return;
      }

      router.push("/dashboard");
    }, 700);
  }

  return (
    <main className="min-h-screen bg-[#F7F9F9] px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl items-center gap-10 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <section className="hidden lg:block">
          <Link href="/" className="group inline-flex items-center gap-3">
            <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#E7E0FF] bg-[#F1EDFF] transition duration-300 group-hover:scale-105">
              <img
                src="/l.jpg"
                alt="Dolophino Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-lg font-black tracking-tight text-[#20263A]">
                Dolophino
              </p>

              <p className="text-[8px] font-black tracking-[0.18em] text-[#5B7CFF]">
                LANGUAGE ACADEMY
              </p>
            </div>
          </Link>

          <div className="mt-16 max-w-xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF6B57]">
              START YOUR JOURNEY
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight text-[#20263A] xl:text-6xl">
              Learn a language.
              <br />
              <span className="text-[#5B7CFF]">Build your world.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base font-semibold leading-8 text-[#596276]">
              Create your free Dolophino account and start learning with
              structured lessons, practical exercises and a learning path
              designed around your goals.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {[
              "Personal learning dashboard",
              "Progress tracking and achievements",
              "Access to multiple languages",
              "Flexible learning at your own pace",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDF7E8] text-[#28A866]">
                  <CheckCircle2 size={17} />
                </div>

                <span className="text-sm font-black text-[#30384D]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* FORM */}
        <section className="rounded-[32px] border border-[#E9E4E1] bg-white p-6 shadow-xl shadow-[#20263A]/5 sm:p-8 lg:p-10">
          {/* Mobile Logo */}
          <div className="lg:hidden">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5B7CFF] text-white">
                <BookOpen size={18} />
              </div>

              <span className="text-base font-black text-[#20263A]">
                Dolophino
              </span>
            </Link>
          </div>

          <div className="mt-7 lg:mt-0">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5B7CFF]">
              CREATE ACCOUNT
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#20263A]">
              Welcome to Dolophino 👋
            </h2>

            <p className="mt-3 text-sm font-semibold leading-6 text-[#697386]">
              Create your account and choose the language you want to start
              learning.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Your first name"
              />

              <Input
                label="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Your last name"
              />
            </div>

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            <Input
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
            />

            <div>
              <label
                htmlFor="language"
                className="mb-2 block text-xs font-black text-[#30384D]"
              >
                First Language
              </label>

              <select
                id="language"
                name="language"
                value={form.language}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#E2E6EA] bg-[#FAFBFC] px-4 py-3.5 text-sm font-bold text-[#30384D] outline-none transition focus:border-[#5B7CFF] focus:ring-4 focus:ring-[#5B7CFF]/10"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Chinese">Chinese</option>
              </select>
            </div>

            {error && (
              <div className="rounded-xl bg-[#FFF0ED] px-4 py-3 text-xs font-bold text-[#D9543D]">
                {error}
              </div>
            )}

            {success && (
              <div className="rounded-xl bg-[#DDF7E8] px-4 py-3 text-xs font-bold text-[#238553]">
                Account created successfully! Redirecting...
              </div>
            )}

            <button
              type="submit"
              disabled={success}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#5B7CFF] py-4 text-sm font-black text-white shadow-lg shadow-[#5B7CFF]/20 transition hover:bg-[#496BEF] disabled:cursor-not-allowed disabled:opacity-70"
            >
              Create My Account
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="mt-7 text-center">
            <p className="text-xs font-semibold text-[#697386]">
              Already have an account?
            </p>

            <Link
              href="/dashboard"
              className="mt-1 inline-block text-xs font-black text-[#5B7CFF] hover:underline"
            >
              Go to your dashboard
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-black text-[#30384D]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={
          type === "password"
            ? "new-password"
            : name === "email"
              ? "email"
              : "off"
        }
        className="w-full rounded-xl border border-[#E2E6EA] bg-[#FAFBFC] px-4 py-3.5 text-sm font-bold text-[#30384D] outline-none transition placeholder:text-[#A1A8B5] focus:border-[#5B7CFF] focus:ring-4 focus:ring-[#5B7CFF]/10"
      />
    </div>
  );
}
