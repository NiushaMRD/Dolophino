import { Suspense } from "react";
import Dashboard from "@/components/dashboard";

function DashboardLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFA]">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#E5E7EB] border-t-[#FF6F91]" />
        <p className="mt-4 text-sm font-bold text-[#52636A]">
          Loading dashboard...
        </p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <Dashboard />
    </Suspense>
  );
}