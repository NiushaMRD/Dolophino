"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What languages can I learn?",
    answer:
      "Dolophino currently offers structured learning paths for English, Spanish, French, German, Italian, Japanese and Chinese. Each language is designed with beginner-friendly foundations and pathways toward intermediate and advanced communication.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "Yes. Every language has a beginner-friendly starting point. You can build your foundation step by step before moving into more advanced lessons, conversations and practical exercises.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely. Dolophino is designed around flexible learning. You can choose when to study, continue lessons from where you stopped and keep track of your progress through your learning dashboard.",
  },
  {
    question: "What will I learn in the courses?",
    answer:
      "Courses combine vocabulary, grammar, listening, reading, writing and practical conversation. The goal is to help you build skills that are useful in real situations rather than simply memorizing isolated words.",
  },
  {
    question: "Do I receive a certificate?",
    answer:
      "Yes. Eligible completed courses can include certificates of completion that become available through your Dolophino dashboard after finishing the required learning path.",
  },
  {
    question: "Can I learn more than one language?",
    answer:
      "Yes. You can explore different language courses and build your own learning journey. Whether you want to focus on one language or gradually explore several, your dashboard keeps your courses organized in one place.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#FFF9F5] py-20 sm:py-24 lg:py-28">
      {/* Decorative Shapes */}
      <div className="pointer-events-none absolute -right-24 top-10 h-52 w-52 rounded-full bg-[#E8E1FF]" />

      <div className="pointer-events-none absolute -left-20 bottom-10 h-48 w-48 rounded-full bg-[#DDF8F2]" />

      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F1EDFF] px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-[#6C4BF4]" />

            <span className="text-xs font-black text-[#5A42C4]">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#181625] sm:text-4xl lg:text-5xl">
            Questions? We&apos;ve got{" "}
            <span className="text-[#6C4BF4]">answers.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-[#686575] sm:text-base">
            Everything you need to know before starting your language learning
            journey with Dolophino.
          </p>
        </div>

        {/* FAQ */}
        <div className="relative mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-[#EAE4DE] bg-white shadow-sm transition duration-300 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-6">
                {/* Number */}
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[10px] font-black ${
                    index % 2 === 0
                      ? "bg-[#F1EDFF] text-[#6C4BF4]"
                      : "bg-[#FFF0F4] text-[#E85B89]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 text-left text-sm font-black text-[#181625] sm:text-base">
                  {faq.question}
                </span>

                <ChevronDown
                  size={18}
                  className="shrink-0 text-[#6C4BF4] transition duration-300 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-[#F0ECE8] px-5 pb-5 pt-4 pl-[68px] text-sm font-semibold leading-7 text-[#686575] sm:px-6 sm:pl-[74px]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-3xl bg-[#181625] p-6 text-center sm:p-8">
          <p className="text-lg font-black text-white">
            Ready to start learning?
          </p>

          <p className="mt-2 text-sm font-semibold text-[#BDB9C6]">
            Choose your language and take the first step today.
          </p>
        </div>
      </div>
    </section>
  );
}