import { Suspense } from "react";
import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#F7F9F9] px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="hidden lg:block">
              <div className="h-11 w-11 animate-pulse rounded-full bg-[#E7E0FF]" />
            </div>

            <section className="rounded-[32px] border border-[#E9E4E1] bg-white p-6 shadow-xl shadow-[#20263A]/5 sm:p-8 lg:p-10">
              <div className="h-4 w-32 animate-pulse rounded bg-[#E8EBF0]" />
              <div className="mt-4 h-9 w-72 animate-pulse rounded bg-[#E8EBF0]" />
              <div className="mt-3 h-5 w-full animate-pulse rounded bg-[#F0F2F5]" />
              <div className="mt-8 space-y-5">
                <div className="h-12 animate-pulse rounded-xl bg-[#F0F2F5]" />
                <div className="h-12 animate-pulse rounded-xl bg-[#F0F2F5]" />
                <div className="h-12 animate-pulse rounded-xl bg-[#F0F2F5]" />
                <div className="h-12 animate-pulse rounded-xl bg-[#F0F2F5]" />
              </div>
            </section>
          </div>
        </main>
      }
    >
      <SignupForm />
    </Suspense>
  );
}

