"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import ReservationCalendar from "@/components/ReservationCalendar";
import {
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flame,
  MessageCircle,
  Play,
  Target,
  TrendingUp,
  Users,
  Settings,
  User,
  Send,
  Camera,
  Check,
  X,
  Globe2,
  Headphones,
  Mic,
  PenLine,
  Trophy,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import Sidebar from "@/components/Sidebar";
import CourseCard from "@/components/CourseCard";

/* =========================================================
   DATA
========================================================= */

const courses = [
  {
    title: "English",
    subtitle: "English Conversation",
    progress: 78,
    lessons: 24,
    completed: 18,
    color: "bg-[#DDF7F0]",
    icon: "EN",
    image: "/am1.jpg",
  },
  {
    title: "Spanish",
    subtitle: "Everyday Spanish",
    progress: 52,
    lessons: 30,
    completed: 16,
    color: "bg-[#FFE4B8]",
    icon: "ES",
    image: "/sp1.jpg",
  },
  {
    title: "French",
    subtitle: "French Essentials",
    progress: 31,
    lessons: 28,
    completed: 9,
    color: "bg-[#E8DEFF]",
    icon: "FR",
    image: "/pa1.jpg",
  },
  {
    title: "German",
    subtitle: "German Foundations",
    progress: 24,
    lessons: 26,
    completed: 6,
    color: "bg-[#FFF0B8]",
    icon: "DE",
    image: "/ge1.jpg",
  },
  {
    title: "Italian",
    subtitle: "Italian for Beginners",
    progress: 18,
    lessons: 22,
    completed: 4,
    color: "bg-[#DDF3FF]",
    icon: "IT",
    image: "/it1.jpg",
  },
  {
    title: "Japanese",
    subtitle: "Japanese Essentials",
    progress: 12,
    lessons: 32,
    completed: 3,
    color: "bg-[#FFDDE8]",
    icon: "JP",
    image: "/ja1.jpg",
  },
  {
    title: "Chinese",
    subtitle: "Mandarin Basics",
    progress: 8,
    lessons: 30,
    completed: 2,
    color: "bg-[#FFE0DC]",
    icon: "ZH",
    image: "/ch1.jpg",
  },
];

const activities = [
  {
    icon: CheckCircle2,
    title: "Completed a lesson",
    text: "English Conversation • Lesson 18",
    time: "12 min ago",
  },
  {
    icon: Award,
    title: "Achievement unlocked",
    text: "10 Day Learning Streak",
    time: "Yesterday",
  },
  {
    icon: BookOpen,
    title: "Started a new course",
    text: "French Essentials",
    time: "2 days ago",
  },
];

const achievements = [
  {
    title: "10 Day Streak",
    text: "Learn for 10 consecutive days",
    icon: Flame,
    unlocked: true,
  },
  {
    title: "First Course",
    text: "Complete your first course",
    icon: BookOpen,
    unlocked: true,
  },
  {
    title: "Conversation Pro",
    text: "Complete 20 speaking lessons",
    icon: MessageCircle,
    unlocked: false,
  },
  {
    title: "Language Explorer",
    text: "Start 3 different languages",
    icon: Globe2,
    unlocked: false,
  },
];

const defaultMessages = [
  {
    id: 1,
    name: "Emma Wilson",
    role: "English Instructor",
    initials: "EW",
    color: "bg-[#FFDDE8]",
    messages: [
      {
        from: "them",
        text: "Hi Sofia! Great work on your speaking exercise.",
        time: "10:20 AM",
      },
      {
        from: "me",
        text: "Thank you! I really enjoyed the conversation practice.",
        time: "10:24 AM",
      },
      {
        from: "them",
        text: "That's great to hear! Keep practicing every day.",
        time: "10:25 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Dolophino Team",
    role: "Academy",
    initials: "D",
    color: "bg-[#DDF7F0]",
    messages: [
      {
        from: "them",
        text: "Your new Japanese course is now available.",
        time: "Yesterday",
      },
      {
        from: "me",
        text: "Awesome! I'll check it out.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 3,
    name: "James Carter",
    role: "Learning Partner",
    initials: "JC",
    color: "bg-[#E8DEFF]",
    messages: [
      {
        from: "them",
        text: "Want to practice Spanish together tomorrow?",
        time: "Yesterday",
      },
    ],
  },
];

/* =========================================================
   MAIN
========================================================= */

export default function Dashboard() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const tab = searchParams.get("tab") || "overview";

  const [mobileOpen, setMobileOpen] = useState(false);

  const renderContent = () => {
    switch (tab) {
      case "courses":
        return <CoursesView />;

      case "paths":
        return <LearningPathsView />;

      case "assignments":
        return <AssignmentsView />;

      case "calendar":
        return <CalendarView />;

      case "certificates":
        return <CertificatesView />;

      case "messages":
        return <MessagesView />;

      case "notifications":
        return <NotificationsView />;

      case "profile":
        return <ProfileView />;

      case "settings":
        return <SettingsView />;

      default:
        return (
          <Overview
            courses={courses}
            activities={activities}
            achievements={achievements}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <div className="flex min-h-screen">
        <Sidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <main className="min-w-0 flex-1">
          {/* Mobile Header */}
          <div className="sticky top-0 z-30 flex h-[68px] items-center justify-between border-b border-[#E5E7EB] bg-white/95 px-4 backdrop-blur sm:px-5 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0F4] text-[#24343A]"
            >
              <Settings size={19} />
            </button>

            <Link
              href="/"
              className="text-base font-black text-[#24343A]"
            >
              Dolophino
            </Link>

            <Link
              href="/dashboard?tab=notifications"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0F4] text-[#24343A]"
            >
              <Bell size={18} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FF6F91]" />
            </Link>
          </div>

          <div className="mx-auto max-w-[1500px] p-4 sm:p-7 lg:p-10">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   OVERVIEW
========================================================= */

function Overview({ courses, activities, achievements }) {
  return (
    <div>
      <section className="relative overflow-hidden rounded-[30px] bg-[#7BC9B6] p-6 text-white shadow-sm sm:p-8 lg:p-10">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 right-40 h-44 w-44 rounded-full bg-[#FF6F91]/25" />
        <div className="absolute bottom-5 right-10 hidden h-20 w-20 rounded-full bg-[#FFD85A]/40 lg:block" />

        <div className="relative max-w-3xl">
          <p className="text-xs font-bold text-white/90">
            Monday, August 31, 2026
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Good morning, Sofia 👋
          </h1>

          <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white">
            Keep your momentum going. You&apos;re building real language skills
            one lesson at a time.
          </p>

          <Link
            href="/dashboard?tab=courses"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-black text-[#24343A] transition hover:-translate-y-0.5"
          >
            Continue Learning
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 flex justify-center lg:absolute lg:right-10 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-white/25 sm:h-36 sm:w-36">
            <div className="text-center">
              <p className="text-3xl font-black">78%</p>
              <p className="mt-1 text-[10px] font-bold">
                Weekly Goal
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={BookOpen}
          title="Active Courses"
          value="3"
          text="Currently learning"
        />

        <StatCard
          icon={Flame}
          title="Learning Streak"
          value="12 days"
          text="Keep it going!"
          accent
        />

        <StatCard
          icon={Clock3}
          title="Learning Time"
          value="18h 42m"
          text="This month"
        />

        <StatCard
          icon={Award}
          title="Achievements"
          value="8"
          text="Unlocked"
        />
      </section>

      <section className="mt-10">
        <SectionHeading
          title="Continue Learning"
          text="Pick up where you left off."
          href="/dashboard?tab=courses"
          action="View All"
        />

        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <WeeklyChart />

        <div className="rounded-3xl border border-[#E5E7EB] bg-[#FFF8DF] p-6">
          <SectionHeading
            title="Weekly Goal"
            text="You're almost there."
          />

          <div className="mt-8 flex justify-center">
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[13px] border-[#FFE9A6]">
              <div className="absolute inset-[-13px] rounded-full border-[13px] border-transparent border-t-[#FF6F91] border-r-[#FF6F91] -rotate-45" />

              <div className="text-center">
                <p className="text-3xl font-black text-[#24343A]">
                  78%
                </p>

                <p className="mt-1 text-[10px] font-bold text-[#52636A]">
                  3h 54m left
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/dashboard?tab=calendar"
            className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#FF6F91] py-3 text-xs font-black text-white transition hover:bg-[#E9577B]"
          >
            Plan Your Week
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-5 xl:grid-cols-2">
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
          <SectionHeading
            title="Upcoming Lesson"
            text="Your next scheduled learning session."
            href="/dashboard?tab=calendar"
            action="Calendar"
          />

          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#E9F9F4] p-5 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#7BC9B6] text-white">
              <Play size={22} fill="currentColor" />
            </div>

            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-wider text-[#4AA991]">
                English • B1
              </p>

              <h3 className="mt-1 text-sm font-black text-[#24343A]">
                Everyday Conversations
              </h3>

              <div className="mt-2 flex flex-wrap gap-4 text-[10px] font-bold text-[#52636A]">
                <span className="flex items-center gap-1">
                  <CalendarDays size={12} />
                  Today, 6:00 PM
                </span>

                <span className="flex items-center gap-1">
                  <Clock3 size={12} />
                  35 min
                </span>
              </div>
            </div>

            <Link
              href="/dashboard?tab=courses&lesson=english-conversations"
              className="flex h-10 items-center justify-center rounded-xl bg-white px-4 text-xs font-black text-[#24343A] shadow-sm"
            >
              Open
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
          <SectionHeading
            title="Recent Activity"
            text="Your latest learning updates."
            href="/dashboard?tab=notifications"
            action="View All"
          />

          <div className="mt-5 space-y-2">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div
                  key={activity.title}
                  className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-[#F7F9F9]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF0F4] text-[#FF6F91]">
                    <Icon size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-black text-[#24343A]">
                      {activity.title}
                    </p>

                    <p className="mt-1 truncate text-[10px] font-semibold text-[#52636A]">
                      {activity.text}
                    </p>
                  </div>

                  <span className="shrink-0 text-[9px] font-bold text-[#7A898E]">
                    {activity.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading
          title="Achievements"
          text="Small wins add up to big progress."
          href="/dashboard?tab=certificates"
          action="View All"
        />

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <div
                key={achievement.title}
                className={`rounded-3xl border p-5 ${
                  achievement.unlocked
                    ? "border-[#E5E7EB] bg-white"
                    : "border-dashed border-[#D5DFE2] bg-[#F3F5F5]"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    achievement.unlocked
                      ? "bg-[#FFF0F4] text-[#FF6F91]"
                      : "bg-[#E5E9EA] text-[#7A898E]"
                  }`}
                >
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-sm font-black text-[#24343A]">
                  {achievement.title}
                </h3>

                <p className="mt-2 text-[10px] font-semibold leading-5 text-[#52636A]">
                  {achievement.text}
                </p>

                <p
                  className={`mt-4 text-[9px] font-black ${
                    achievement.unlocked
                      ? "text-[#4AA991]"
                      : "text-[#7A898E]"
                  }`}
                >
                  {achievement.unlocked ? "UNLOCKED" : "LOCKED"}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-10 overflow-hidden rounded-3xl bg-[#253B43] p-6 text-white sm:p-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-black text-[#FFD85A]">
              RECOMMENDED FOR YOU
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Ready to explore another language?
            </h2>

            <p className="mt-2 max-w-xl text-xs font-semibold leading-6 text-white/80">
              Try Japanese, Chinese, German or Italian and expand your
              learning journey.
            </p>
          </div>

          <Link
            href="/dashboard?tab=courses"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FF6F91] px-5 py-3.5 text-xs font-black text-white"
          >
            Explore Courses
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   CHART
========================================================= */

function WeeklyChart() {
  const data = [
    ["Mon", 55],
    ["Tue", 72],
    ["Wed", 40],
    ["Thu", 88],
    ["Fri", 65],
    ["Sat", 94],
    ["Sun", 48],
  ];

  return (
    <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
      <SectionHeading
        title="Weekly Activity"
        text="Your learning activity this week."
      />

      <div className="mt-7 flex h-[220px] items-end justify-between gap-2 border-b border-[#E8EEF0] px-1 sm:gap-3 sm:px-2">
        {data.map(([day, height]) => (
          <div
            key={day}
            className="flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <span className="text-[8px] font-black text-[#52636A] sm:text-[9px]">
              {height}%
            </span>

            <div
              className="w-full max-w-[34px] rounded-t-xl bg-[#7BC9B6] transition hover:bg-[#FF6F91]"
              style={{ height: `${height}%` }}
            />

            <span className="text-[9px] font-bold text-[#52636A] sm:text-[10px]">
              {day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SHARED
========================================================= */

function StatCard({ icon: Icon, title, value, text, accent }) {
  return (
    <div className="rounded-3xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
          accent ? "bg-[#FFF0F4] text-[#FF6F91]" : "bg-[#E9F9F4] text-[#4AA991]"
        }`}
      >
        <Icon size={19} />
      </div>

      <p className="mt-5 text-[10px] font-black text-[#52636A]">
        {title}
      </p>

      <p className="mt-1 text-2xl font-black text-[#24343A]">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-bold text-[#7A898E]">
        {text}
      </p>
    </div>
  );
}

function SectionHeading({ title, text, href, action }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-xl font-black text-[#24343A]">
          {title}
        </h2>

        <p className="mt-1 text-xs font-semibold text-[#52636A]">
          {text}
        </p>
      </div>

      {href && (
        <Link
          href={href}
          className="hidden shrink-0 items-center gap-1 text-[10px] font-black text-[#4AA991] sm:flex"
        >
          {action}
          <ChevronRight size={14} />
        </Link>
      )}
    </div>
  );
}

function PageTitle({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#4AA991]">
        {eyebrow}
      </p>

      <h1 className="mt-2 text-3xl font-black tracking-tight text-[#24343A] sm:text-4xl">
        {title}
      </h1>

      <p className="mt-2 max-w-2xl text-sm font-semibold leading-7 text-[#52636A]">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   COURSES
========================================================= */

function CoursesView() {
  const [filter, setFilter] = useState("all");

  const filteredCourses =
    filter === "active"
      ? courses.filter((course) => course.progress > 0)
      : courses;

  return (
    <div>
      <PageTitle
        eyebrow="YOUR LEARNING"
        title="My Courses"
        description="Continue your courses, explore new languages and build practical communication skills."
      />

      <div className="mt-7 flex flex-wrap gap-2">
        {[
          ["all", "All Languages"],
          ["active", "In Progress"],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-full px-4 py-2 text-[10px] font-black transition ${
              filter === value
                ? "bg-[#FF6F91] text-white"
                : "bg-white text-[#52636A] border border-[#E5E7EB]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-[#E5E7EB] bg-white p-6">
        <SectionHeading
          title="Overall Progress"
          text="Your progress across all active languages."
        />

        <div className="mt-7 space-y-5">
          {courses.slice(0, 5).map((course) => (
            <div key={course.title}>
              <div className="mb-2 flex justify-between">
                <span className="text-xs font-black text-[#24343A]">
                  {course.title}
                </span>

                <span className="text-xs font-black text-[#FF6F91]">
                  {course.progress}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-[#EEF1F2]">
                <div
                  className="h-full rounded-full bg-[#FF6F91]"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PATHS
========================================================= */

function LearningPathsView() {
  const paths = [
    {
      title: "English Fluency",
      level: "B1 → B2",
      progress: 68,
      courses: 4,
      color: "bg-[#DDF7F0]",
    },
    {
      title: "Travel Spanish",
      level: "A1 → A2",
      progress: 35,
      courses: 3,
      color: "bg-[#FFE4B8]",
    },
    {
      title: "French Foundations",
      level: "A1 → A2",
      progress: 20,
      courses: 4,
      color: "bg-[#E8DEFF]",
    },
    {
      title: "Japanese Starter",
      level: "A1",
      progress: 12,
      courses: 5,
      color: "bg-[#FFDDE8]",
    },
  ];

  return (
    <div>
      <PageTitle
        eyebrow="YOUR ROADMAP"
        title="Learning Paths"
        description="Follow structured paths designed to take you from one level to the next."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {paths.map((path) => (
          <div
            key={path.title}
            className={`rounded-3xl border border-[#E5E7EB] ${path.color} p-6`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black text-[#52636A]">
                  {path.level}
                </p>

                <h3 className="mt-2 text-lg font-black text-[#24343A]">
                  {path.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[#52636A]">
                  {path.courses} courses included
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#FF6F91] shadow-sm">
                <TrendingUp size={20} />
              </div>
            </div>

            <div className="mt-7">
              <div className="mb-2 flex justify-between text-[10px] font-black">
                <span className="text-[#52636A]">Progress</span>
                <span className="text-[#24343A]">
                  {path.progress}%
                </span>
              </div>

              <div className="h-2.5 rounded-full bg-white/70">
                <div
                  className="h-full rounded-full bg-[#FF6F91]"
                  style={{ width: `${path.progress}%` }}
                />
              </div>
            </div>

            <Link
              href={`/dashboard?tab=courses&path=${path.title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#24343A] py-3 text-xs font-black text-white"
            >
              Continue Path
              <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ASSIGNMENTS
========================================================= */

function AssignmentsView() {
  const assignments = [
    ["Speaking Practice", "English", "Today", "Due Soon"],
    ["Vocabulary Quiz", "Spanish", "Tomorrow", "Pending"],
    ["Listening Exercise", "French", "Sep 3", "Pending"],
    ["Writing Task", "English", "Sep 5", "Completed"],
    ["Kanji Practice", "Japanese", "Sep 7", "Pending"],
  ];

  return (
    <div>
      <PageTitle
        eyebrow="YOUR WORK"
        title="Assignments"
        description="Stay on top of exercises, quizzes and practice tasks."
      />

      <div className="mt-8 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white">
        <div className="hidden grid-cols-[2fr_1fr_1fr_1fr] gap-5 border-b border-[#EDF1F2] px-6 py-4 text-[10px] font-black uppercase tracking-wider text-[#4AA991] sm:grid">
          <span>Assignment</span>
          <span>Language</span>
          <span>Due</span>
          <span>Status</span>
        </div>

        {assignments.map(([name, language, due, status]) => (
          <div
            key={name}
            className="grid gap-3 border-b border-[#EDF1F2] px-5 py-5 last:border-0 sm:grid-cols-[2fr_1fr_1fr_1fr] sm:items-center sm:gap-5 sm:px-6"
          >
            <div>
              <p className="text-xs font-black text-[#24343A]">
                {name}
              </p>

              <p className="mt-1 text-[10px] font-semibold text-[#52636A]">
                Practice assignment
              </p>
            </div>

            <span className="text-[10px] font-bold text-[#52636A]">
              {language}
            </span>

            <span className="text-[10px] font-bold text-[#52636A]">
              {due}
            </span>

            <span
              className={`w-fit rounded-full px-3 py-1 text-[9px] font-black ${
                status === "Completed"
                  ? "bg-[#E4F6EE] text-[#3F8C73]"
                  : status === "Due Soon"
                  ? "bg-[#FFF0F4] text-[#D95878]"
                  : "bg-[#FFF7D8] text-[#A77900]"
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   CALENDAR
========================================================= */

/* =========================================================
   CALENDAR
========================================================= */

function CalendarView() {
  return (
    <div>
      <PageTitle
        eyebrow="YOUR SCHEDULE"
        title="Calendar"
        description="Plan your lessons and keep your learning routine consistent."
      />

      <div className="mt-8">
        <ReservationCalendar />
      </div>
    </div>
  );
}

/* =========================================================
   CERTIFICATES
========================================================= */

function CertificatesView() {
  const certificates = [
    ["English Foundations", "Completed June 2026"],
    ["Spanish Beginner", "Completed July 2026"],
  ];

  return (
    <div>
      <PageTitle
        eyebrow="YOUR ACHIEVEMENTS"
        title="Certificates"
        description="Your completed learning milestones and certificates."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {certificates.map(([title, date]) => (
          <div
            key={title}
            className="relative overflow-hidden rounded-3xl bg-[#7BC9B6] p-7 text-white"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />

            <Award size={32} />

            <p className="mt-8 text-[9px] font-black tracking-wider">
              D O L O P H I N O
            </p>

            <h3 className="mt-2 text-xl font-black">{title}</h3>

            <p className="mt-2 text-xs font-semibold">{date}</p>

            <Link
              href={`/dashboard?tab=certificates&certificate=${title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-[#24343A]"
            >
              View Certificate
              <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MESSAGES
========================================================= */
function MessagesView() {
  const [contacts, setContacts] = useState(defaultMessages);
  const [selectedId, setSelectedId] = useState(1);
  const [message, setMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  /* Load saved messages only after the component mounts */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dolophino-messages");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setContacts(parsed);
        }
      }
    } catch (error) {
      console.error("Failed to load messages:", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  /* Save messages whenever they change */
  useEffect(() => {
    if (!loaded) return;

    try {
      localStorage.setItem(
        "dolophino-messages",
        JSON.stringify(contacts)
      );
    } catch (error) {
      console.error("Failed to save messages:", error);
    }
  }, [contacts, loaded]);

  const selectedContact = contacts.find(
    (contact) => contact.id === selectedId
  );

  const sendMessage = () => {
    const trimmed = message.trim();

    if (!trimmed || !selectedContact) {
      return;
    }

    const newMessage = {
      from: "me",
      text: trimmed,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setContacts((current) =>
      current.map((contact) =>
        contact.id === selectedId
          ? {
              ...contact,
              messages: [...contact.messages, newMessage],
            }
          : contact
      )
    );

    setMessage("");
  };

  return (
    <div>
      <PageTitle
        eyebrow="COMMUNITY"
        title="Messages"
        description="Chat with instructors, classmates and the Dolophino team."
      />

      <div className="mt-8 grid min-h-[600px] overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white lg:grid-cols-[300px_1fr]">
        {/* Contacts */}
        <div className="border-b border-[#E5E7EB] lg:border-b-0 lg:border-r">
          <div className="border-b border-[#EDF1F2] p-5">
            <p className="text-xs font-black text-[#24343A]">
              Conversations
            </p>

            <p className="mt-1 text-[10px] font-semibold text-[#52636A]">
              {contacts.length} active conversations
            </p>
          </div>

          <div className="p-3">
            {contacts.map((contact) => {
              const lastMessage =
                contact.messages[contact.messages.length - 1];

              return (
                <button
                  key={contact.id}
                  type="button"
                  onClick={() => setSelectedId(contact.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl p-3 text-left transition ${
                    selectedId === contact.id
                      ? "bg-[#FFF0F4]"
                      : "hover:bg-[#F7F9F9]"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${contact.color} text-xs font-black text-[#24343A]`}
                  >
                    {contact.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-black text-[#24343A]">
                      {contact.name}
                    </p>

                    <p className="mt-1 truncate text-[9px] font-semibold text-[#52636A]">
                      {lastMessage?.text || "No messages yet"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat */}
        <div className="flex min-h-[550px] flex-col">
          {selectedContact ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center gap-3 border-b border-[#EDF1F2] p-5">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${selectedContact.color} text-xs font-black text-[#24343A]`}
                >
                  {selectedContact.initials}
                </div>

                <div>
                  <p className="text-xs font-black text-[#24343A]">
                    {selectedContact.name}
                  </p>

                  <p className="mt-1 text-[9px] font-semibold text-[#4AA991]">
                    {selectedContact.role} • Online
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 space-y-3 overflow-y-auto bg-[#FAFCFC] p-5">
                {selectedContact.messages.map((item, index) => (
                  <div
                    key={`${selectedContact.id}-${index}`}
                    className={`flex ${
                      item.from === "me"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[82%] rounded-2xl px-4 py-3 ${
                        item.from === "me"
                          ? "rounded-br-md bg-[#FF6F91] text-white"
                          : "rounded-bl-md bg-white text-[#24343A] shadow-sm"
                      }`}
                    >
                      <p className="text-xs font-semibold leading-6">
                        {item.text}
                      </p>

                      <p
                        className={`mt-1 text-[8px] font-bold ${
                          item.from === "me"
                            ? "text-white/70"
                            : "text-[#8A969A]"
                        }`}
                      >
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="border-t border-[#EDF1F2] bg-white p-4">
                <div className="flex items-end gap-2">
                  <textarea
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" &&
                        !event.shiftKey
                      ) {
                        event.preventDefault();
                        sendMessage();
                      }
                    }}
                    rows={1}
                    placeholder="Write a message..."
                    className="min-h-[46px] flex-1 resize-none rounded-xl border border-[#E0E8EA] bg-[#F8FAFA] px-4 py-3 text-xs font-semibold text-[#24343A] outline-none transition focus:border-[#FF6F91]"
                  />

                  <button
                    type="button"
                    onClick={sendMessage}
                    disabled={!message.trim()}
                    className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-[#FF6F91] text-white transition hover:bg-[#E9577B] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Send size={17} />
                  </button>
                </div>

                <p className="mt-2 px-1 text-[8px] font-semibold text-[#8A969A]">
                  Press Enter to send • Shift + Enter for a new line
                </p>
              </div>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center p-8 text-center">
              <div>
                <MessageCircle
                  size={32}
                  className="mx-auto text-[#B8C5C8]"
                />

                <p className="mt-3 text-sm font-black text-[#24343A]">
                  Select a conversation
                </p>

                <p className="mt-1 text-xs font-semibold text-[#52636A]">
                  Choose a contact to start chatting.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   NOTIFICATIONS
========================================================= */

function NotificationsView() {
  const [notifications, setNotifications] = useState([
    ["Achievement unlocked", "You completed a 10 day learning streak."],
    ["New lesson available", "Your next English lesson is ready."],
    ["Weekly goal", "You're 78% of the way to your weekly goal."],
    ["Course update", "French Essentials received a new lesson."],
  ]);

  return (
    <div>
      <PageTitle
        eyebrow="UPDATES"
        title="Notifications"
        description="Everything important about your learning activity."
      />

      <div className="mt-8 space-y-3">
        {notifications.map(([title, text], index) => (
          <div
            key={title}
            className="flex gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0F4] text-[#FF6F91]">
              <Bell size={18} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-black text-[#24343A]">
                {title}
              </p>

              <p className="mt-1 text-[10px] font-semibold leading-5 text-[#52636A]">
                {text}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setNotifications((items) =>
                  items.filter((_, itemIndex) => itemIndex !== index)
                )
              }
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#8A969A] hover:bg-[#FFF0F4] hover:text-[#FF6F91]"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PROFILE
========================================================= */

function ProfileView() {
  const [profile, setProfile] = useState({
    firstName: "Sofia",
    lastName: "Morgan",
    email: "sofia@example.com",
    level: "B1 — Intermediate",
    bio: "Language learner building confidence through practical conversations.",
    image: "",
  });

  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const initials = `${profile.firstName[0] || ""}${
    profile.lastName[0] || ""
  }`;

  const handleImage = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setProfile((current) => ({
        ...current,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const saveProfile = () => {
    localStorage.setItem(
      "dolophino-profile",
      JSON.stringify(profile)
    );

    setEditing(false);
    setSaved(true);

    setTimeout(() => setSaved(false), 2500);
  };

  useEffect(() => {
    const savedProfile = localStorage.getItem(
      "dolophino-profile"
    );

    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile));
      } catch {}
    }
  }, []);

  return (
    <div>
      <PageTitle
        eyebrow="YOUR ACCOUNT"
        title="Profile"
        description="Manage your learner profile and personalize your Dolophino experience."
      />

      <div className="mt-8 max-w-4xl rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative">
            {profile.image ? (
              <img
                src={profile.image}
                alt="Profile"
                className="h-24 w-24 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#7BC9B6] text-2xl font-black text-white">
                {initials}
              </div>
            )}

            {editing && (
              <label className="absolute bottom-0 right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FF6F91] text-white shadow-md">
                <Camera size={15} />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                />
              </label>
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-black text-[#24343A]">
              {profile.firstName} {profile.lastName}
            </h2>

            <p className="mt-1 text-xs font-semibold text-[#52636A]">
              {profile.email}
            </p>

            <p className="mt-2 inline-flex rounded-full bg-[#E9F9F4] px-3 py-1 text-[9px] font-black text-[#3F8C73]">
              English • B1
            </p>
          </div>

          {!editing && (
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6F91] px-5 py-3 text-xs font-black text-white"
            >
              <User size={14} />
              Edit Profile
            </button>
          )}
        </div>

        {editing ? (
          <div className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <InputField
                label="First Name"
                value={profile.firstName}
                onChange={(value) =>
                  setProfile((current) => ({
                    ...current,
                    firstName: value,
                  }))
                }
              />

              <InputField
                label="Last Name"
                value={profile.lastName}
                onChange={(value) =>
                  setProfile((current) => ({
                    ...current,
                    lastName: value,
                  }))
                }
              />

              <InputField
                label="Email"
                value={profile.email}
                onChange={(value) =>
                  setProfile((current) => ({
                    ...current,
                    email: value,
                  }))
                }
              />

              <InputField
                label="Current Level"
                value={profile.level}
                onChange={(value) =>
                  setProfile((current) => ({
                    ...current,
                    level: value,
                  }))
                }
              />
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-[#4AA991]">
                Bio
              </label>

              <textarea
                value={profile.bio}
                onChange={(event) =>
                  setProfile((current) => ({
                    ...current,
                    bio: event.target.value,
                  }))
                }
                rows={4}
                className="w-full resize-none rounded-xl border border-[#E0E8EA] bg-[#F8FAFA] px-4 py-3 text-xs font-semibold text-[#24343A] outline-none focus:border-[#7BC9B6]"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={saveProfile}
                className="inline-flex items-center gap-2 rounded-xl bg-[#7BC9B6] px-5 py-3 text-xs font-black text-white"
              >
                <Check size={14} />
                Save Changes
              </button>

              <button
                type="button"
                onClick={() => setEditing(false)}
                className="rounded-xl bg-[#F0F3F4] px-5 py-3 text-xs font-black text-[#52636A]"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <ProfileField
                label="First Name"
                value={profile.firstName}
              />

              <ProfileField
                label="Last Name"
                value={profile.lastName}
              />

              <ProfileField
                label="Email"
                value={profile.email}
              />

              <ProfileField
                label="Current Level"
                value={profile.level}
              />
            </div>

            <div className="mt-5 rounded-2xl bg-[#F4FBF8] p-5">
              <p className="text-[9px] font-black uppercase tracking-wider text-[#4AA991]">
                About Me
              </p>

              <p className="mt-2 text-xs font-semibold leading-6 text-[#52636A]">
                {profile.bio}
              </p>
            </div>
          </div>
        )}

        {saved && (
          <div className="mt-5 rounded-xl bg-[#E4F6EE] px-4 py-3 text-xs font-black text-[#3F8C73]">
            Your profile has been saved successfully.
          </div>
        )}
      </div>
    </div>
  );
}

function InputField({ label, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-[#4AA991]">
        {label}
      </label>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-[#E0E8EA] bg-[#F8FAFA] px-4 py-3 text-xs font-black text-[#24343A] outline-none focus:border-[#7BC9B6]"
      />
    </div>
  );
}

function ProfileField({ label, value }) {
  return (
    <div>
      <p className="mb-2 text-[9px] font-black uppercase tracking-wider text-[#4AA991]">
        {label}
      </p>

      <div className="rounded-xl border border-[#E0E8EA] bg-[#F8FAFA] px-4 py-3 text-xs font-black text-[#24343A]">
        {value}
      </div>
    </div>
  );
}

/* =========================================================
   SETTINGS
========================================================= */

function SettingsView() {
  const defaultSettings = {
    emailNotifications: true,
    weeklyReminder: true,
    achievementNotifications: true,
    publicProfile: false,
    soundEffects: true,
    dailyGoal: true,
  };

  const [settings, setSettings] = useState(defaultSettings);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(
      "dolophino-settings"
    );

    if (stored) {
      try {
        setSettings(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const updateSetting = (key) => {
    setSettings((current) => {
      const updated = {
        ...current,
        [key]: !current[key],
      };

      localStorage.setItem(
        "dolophino-settings",
        JSON.stringify(updated)
      );

      setSaved(true);

      setTimeout(() => setSaved(false), 1500);

      return updated;
    });
  };

  return (
    <div>
      <PageTitle
        eyebrow="PREFERENCES"
        title="Settings"
        description="Customize notifications, learning reminders and your Dolophino experience."
      />

      <div className="mt-8 max-w-3xl space-y-4">
        <SettingGroup title="Notifications">
          <SettingRow
            title="Email Notifications"
            text="Receive updates about courses and learning activity."
            enabled={settings.emailNotifications}
            onToggle={() =>
              updateSetting("emailNotifications")
            }
          />

          <SettingRow
            title="Achievement Notifications"
            text="Get notified whenever you unlock an achievement."
            enabled={settings.achievementNotifications}
            onToggle={() =>
              updateSetting("achievementNotifications")
            }
          />
        </SettingGroup>

        <SettingGroup title="Learning">
          <SettingRow
            title="Weekly Learning Reminder"
            text="Get a reminder when you're falling behind your weekly goal."
            enabled={settings.weeklyReminder}
            onToggle={() =>
              updateSetting("weeklyReminder")
            }
          />

          <SettingRow
            title="Daily Goal"
            text="Show your daily learning goal and progress reminders."
            enabled={settings.dailyGoal}
            onToggle={() => updateSetting("dailyGoal")}
          />

          <SettingRow
            title="Sound Effects"
            text="Play small sounds when completing lessons and achievements."
            enabled={settings.soundEffects}
            onToggle={() =>
              updateSetting("soundEffects")
            }
          />
        </SettingGroup>

        <SettingGroup title="Privacy">
          <SettingRow
            title="Public Learning Profile"
            text="Allow other learners to see your public achievements."
            enabled={settings.publicProfile}
            onToggle={() =>
              updateSetting("publicProfile")
            }
          />
        </SettingGroup>

        {saved && (
          <div className="rounded-xl bg-[#E4F6EE] px-4 py-3 text-xs font-black text-[#3F8C73]">
            Setting updated successfully.
          </div>
        )}
      </div>
    </div>
  );
}

function SettingGroup({ title, children }) {
  return (
    <div>
      <h2 className="mb-3 px-1 text-xs font-black text-[#24343A]">
        {title}
      </h2>

      <div className="space-y-3">{children}</div>
    </div>
  );
}

function SettingRow({ title, text, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-2xl border border-[#E5E7EB] bg-white p-5">
      <div className="min-w-0">
        <p className="text-xs font-black text-[#24343A]">
          {title}
        </p>

        <p className="mt-1 max-w-lg text-[10px] font-semibold leading-5 text-[#52636A]">
          {text}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        className={`relative flex h-7 w-12 shrink-0 items-center rounded-full p-1 transition ${
          enabled ? "justify-end bg-[#7BC9B6]" : "justify-start bg-[#DDE6E8]"
        }`}
      >
        <span className="h-5 w-5 rounded-full bg-white shadow-sm" />
      </button>
    </div>
  );
}