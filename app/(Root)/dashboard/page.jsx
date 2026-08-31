
import { Suspense } from "react";
import Dashboard from "@/components/Dashboard";

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#F8FAFA]">
          <div className="text-sm font-bold text-[#24343A]">
            Loading dashboard...
          </div>
        </div>
      }
    >
      <Dashboard />
    </Suspense>
  );
}
