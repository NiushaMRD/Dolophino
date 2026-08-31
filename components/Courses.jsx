import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const courses = [
  {
    title: "English",
    level: "Beginner to Advanced",
    description:
      "Build real confidence in speaking, listening, reading and writing.",
    students: "12.4k",
    rating: "4.9",
    price: "$49",
    image: "/am.jpg",
    bg: "bg-[#DCD4FF]",
    accent: "#6C4BF4",
    badge: "Most Popular",
  },
  {
    title: "Spanish",
    level: "Beginner to Advanced",
    description:
      "Learn practical Spanish for everyday conversations and travel.",
    students: "9.2k",
    rating: "4.9",
    price: "$45",
    image: "/sp.jpg",
    bg: "bg-[#FFE0A8]",
    accent: "#E88B00",
    badge: "Popular",
  },
  {
    title: "French",
    level: "Beginner to Advanced",
    description:
      "Master essential French through practical and engaging lessons.",
    students: "7.8k",
    rating: "4.8",
    price: "$49",
    image: "/pa.jpg",
    bg: "bg-[#D8E4FF]",
    accent: "#4775E8",
    badge: "Trending",
  },
  {
    title: "German",
    level: "Beginner to Advanced",
    description:
      "Develop strong German skills for work, study and everyday life.",
    students: "6.4k",
    rating: "4.8",
    price: "$47",
    image: "/ge.jpg",
    bg: "bg-[#D8F4EC]",
    accent: "#269B7E",
    badge: "New",
  },
  {
    title: "Italian",
    level: "Beginner to Advanced",
    description:
      "Speak natural Italian through culture, conversation and practice.",
    students: "5.7k",
    rating: "4.9",
    price: "$45",
    image: "/it.jpg",
    bg: "bg-[#FFDCE8]",
    accent: "#E85B89",
    badge: "Popular",
  },
  {
    title: "Japanese",
    level: "Beginner to Advanced",
    description:
      "Learn Japanese from the basics with practical lessons and culture.",
    students: "4.9k",
    rating: "4.8",
    price: "$52",
    image: "/ja.jpg",
    bg: "bg-[#FFE0E7]",
    accent: "#E65375",
    badge: "Trending",
  },
  {
    title: "Chinese",
    level: "Beginner to Advanced",
    description:
      "Build useful Mandarin skills for conversations, travel and business.",
    students: "4.3k",
    rating: "4.8",
    price: "$52",
    image: "/ch.jpg",
    bg: "bg-[#FFF0B8]",
    accent: "#D59A00",
    badge: "New",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-[#FFFDFB] py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F1EDFF] px-3.5 py-2">
              <span className="h-2 w-2 rounded-full bg-[#6C4BF4]" />

              <span className="text-xs font-black text-[#5A42C4]">
                Explore Dolophino
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#181625] sm:text-4xl lg:text-5xl">
              Choose your language.
            </h2>

            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-[#686575] sm:text-base">
              Pick a language, follow a clear learning path and build skills
              you can actually use in the real world.
            </p>
          </div>

          <Link
            href="/dashboard?tab=courses"
            className="group inline-flex w-fit items-center gap-2 rounded-xl bg-[#F4F0FF] px-4 py-3 text-sm font-black text-[#6C4BF4] transition duration-300 hover:bg-[#EAE4FF]"
          >
            View all courses

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Course Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group overflow-hidden rounded-[28px] border border-[#ECE7E1] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#181625]/10"
            >
              {/* Image */}
              <div
                className={`relative h-56 overflow-hidden ${course.bg}`}
              >
                <img
                  src={course.image}
                  alt={`${course.title} language course`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[9px] font-black text-[#181625] shadow-md">
                  {course.badge}
                </div>

                {/* Language Label */}
                <div
                  className="absolute bottom-4 left-4 rounded-xl px-3 py-2 text-xs font-black text-white shadow-lg backdrop-blur-sm"
                  style={{ backgroundColor: `${course.accent}E6` }}
                >
                  {course.title}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-black text-[#181625]">
                      {course.title}
                    </h3>

                    <p className="mt-1 text-[10px] font-extrabold text-[#85818E]">
                      {course.level}
                    </p>
                  </div>

                  <span className="text-lg font-black text-[#181625]">
                    {course.price}
                  </span>
                </div>

                <p className="mt-3 text-xs font-semibold leading-6 text-[#686575]">
                  {course.description}
                </p>

                {/* Rating + Students */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <Star
                      size={14}
                      fill="currentColor"
                      className="text-[#FFC857]"
                    />

                    <span className="text-xs font-black text-[#181625]">
                      {course.rating}
                    </span>
                  </div>

                  <span className="h-1 w-1 rounded-full bg-[#D8D4D0]" />

                  <span className="text-xs font-bold text-[#777481]">
                    {course.students} learners
                  </span>
                </div>

                {/* Button */}
                <Link
                  href={`/dashboard?tab=courses&course=${course.title.toLowerCase()}`}
                  className="group/button mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#6C4BF4] py-3.5 text-xs font-black text-white shadow-sm shadow-[#6C4BF4]/15 transition duration-300 hover:bg-[#5335D1]"
                >
                  View Course

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}