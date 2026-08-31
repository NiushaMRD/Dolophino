import Link from "next/link";
import {
  BookOpen,
  Globe,
  MessageCircle,
  Star,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#DCE5E8] bg-[#EAF0F2]">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#E7E0FF] bg-[#F1EDFF] transition duration-300 group-hover:scale-105">
            {
             
              <img
                src="/l.jpg"
                alt="Dolophino Logo"
                className="h-full w-full object-cover"
              />
            }
          </div>

              <span className="text-xl font-extrabold text-[#24343A]">
                Dolophino
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm font-medium leading-7 text-[#52636A]">
              A modern language academy designed to make learning practical,
              engaging and enjoyable.
            </p>
          </div>

          {/* Academy */}
          <div>
            <h3 className="text-sm font-extrabold text-[#24343A]">
              Academy
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/#courses"
                className="text-sm font-semibold text-[#52636A] hover:text-[#24343A]"
              >
                Courses
              </Link>

              <Link
                href="/#about"
                className="text-sm font-semibold text-[#52636A] hover:text-[#24343A]"
              >
                About Us
              </Link>

              <Link
                href="/#faq"
                className="text-sm font-semibold text-[#52636A] hover:text-[#24343A]"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-extrabold text-[#24343A]">
              Connect
            </h3>

            <div className="mt-4 flex gap-2">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#24343A] transition hover:bg-[#7896A3] hover:text-white"
                aria-label="Website"
              >
                <Globe size={17} />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#24343A] transition hover:bg-[#7896A3] hover:text-white"
                aria-label="Contact"
              >
                <MessageCircle size={17} />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#24343A] transition hover:bg-[#7896A3] hover:text-white"
                aria-label="Reviews"
              >
                <Star size={17} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-[#D5E0E3] pt-6 text-center text-xs font-semibold text-[#52636A]">
          © 2026 Dolophino. All rights reserved.
        </div>
      </div>
    </footer>
  );
}