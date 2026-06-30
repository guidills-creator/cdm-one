import type { ReactNode } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminPropostasLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020B18] text-white">
      <div className="mx-auto min-h-screen max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid min-h-screen gap-6 lg:grid-cols-[300px_minmax(0,_1fr)]">
          <AdminSidebar />

          <div className="flex min-h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#081422]/80 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
