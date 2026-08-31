import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Play,
  Star,
  Camera,
} from "lucide-react";

export default function CourseCard({
  title,
  subtitle,
  progress,
  lessons,
  completed,
  color = "bg-[#F1EDFF]",
  icon = "EN",
  image,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#EEE5E1] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Course Visual */}
      <div
        className={`relative h-[190px] overflow-hidden ${color}`}
      >
        {/* Image */}
        {image ? (
          <img
            src={image}
            alt={`${title} course`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-[#6B58C9]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-current/40 bg-white/40">
              <Camera size={22} />
            </div>

            <span className="mt-2 text-[9px] font-black">
              ADD COURSE IMAGE
            </span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#24343A]/45 via-transparent to-transparent" />

        {/* Status */}
        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[9px] font-black text-[#24343A] shadow-sm">
          IN PROGRESS
        </div>

        {/* Language */}
        <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-xs font-black text-[#24343A] shadow-sm">
          {icon}
        </div>

        {/* Play */}
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6F61] text-white shadow-md transition group-hover:scale-105">
          <Play size={15} fill="currentColor" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-base font-black text-[#24343A]">
              {title}
            </h3>

            <p className="mt-1 truncate text-[11px] font-bold text-[#52636A]">
              {subtitle}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <Star
              size={12}
              fill="currentColor"
              className="text-[#FFB347]"
            />

            <span className="text-[10px] font-black text-[#24343A]">
              4.9
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#52636A]">
              Progress
            </span>

            <span className="text-[10px] font-black text-[#24343A]">
              {progress}%
            </span>
          </div>

          <div className="h-2 rounded-full bg-[#F0ECEA]">
            <div
              className="h-full rounded-full bg-[#6B58C9]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#52636A]">
            <Clock size={13} />
            {lessons} lessons
          </div>

          <span className="text-[10px] font-bold text-[#52636A]">
            {completed} completed
          </span>
        </div>

        <Link
          href={`/dashboard?tab=courses&course=${title.toLowerCase()}`}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#6B58C9] py-3 text-xs font-black text-white transition hover:bg-[#5745B3]"
        >
          Continue
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}