import { BookOpen, Globe, Users, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Globe,
    number: "01",
    title: "Learn Your Way",
    text: "Flexible lessons designed around your pace, schedule and personal goals, so learning can easily become part of your everyday routine.",
    bg: "bg-[#E8E1FF]",
    iconBg: "bg-[#6C4BF4]",
    iconColor: "text-white",
    accent: "bg-[#FF6B9D]",
  },
  {
    icon: Users,
    number: "02",
    title: "Learn With Experts",
    text: "Get guidance from experienced instructors and learn alongside a growing global community of language learners.",
    bg: "bg-[#DDF8F2]",
    iconBg: "bg-[#279782]",
    iconColor: "text-white",
    accent: "bg-[#FFC857]",
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Practice What Matters",
    text: "Focus on useful vocabulary, real conversations and practical skills that you can confidently use beyond the classroom.",
    bg: "bg-[#FFE0EA]",
    iconBg: "bg-[#E85B89]",
    iconColor: "text-white",
    accent: "bg-[#6C4BF4]",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F4] px-3.5 py-2">
              <span className="h-2 w-2 rounded-full bg-[#FF6B9D]" />

              <span className="text-xs font-black text-[#C34870]">
                Why Dolophino?
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-[#181625] sm:text-4xl lg:text-5xl">
              Learning that fits{" "}
              <span className="text-[#6C4BF4]">your life.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm font-semibold leading-7 text-[#686575] sm:text-base">
            Everything you need to turn language learning into a practical,
            enjoyable and consistent part of your life.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[30px] border border-[#ECE7E1] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#181625]/10"
              >
                {/* Visual Area */}
                <div className={`relative h-40 ${feature.bg}`}>
                  <span className="absolute right-5 top-3 text-6xl font-black text-black/5">
                    {feature.number}
                  </span>

                  <div className="absolute bottom-5 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${feature.iconBg} ${feature.iconColor}`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Accent */}
                  <span
                    className={`absolute right-6 bottom-6 h-3 w-3 rounded-full ${feature.accent}`}
                  />

                  <span className="absolute right-10 bottom-10 h-2 w-2 rounded-full bg-white/80" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-black text-[#181625]">
                      {feature.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[#B4AFBB] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6C4BF4]"
                    />
                  </div>

                  <p className="mt-3 text-sm font-semibold leading-7 text-[#686575]">
                    {feature.text}
                  </p>

                  <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[#F0ECE8]">
                    <div
                      className={`h-full w-1/3 rounded-full ${feature.accent} transition-all duration-500 group-hover:w-2/3`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}