import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#7896A3] py-20 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-5 text-center sm:px-8">
        <p className="text-sm font-extrabold text-white">
          Your next chapter starts here.
        </p>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to speak with confidence?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white">
          Choose your language, start your first lesson and build a skill that
          stays with you for life.
        </p>

        <Link
          href="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-[#24343A] transition hover:bg-[#F5F8F8]"
        >
          Get Started
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}