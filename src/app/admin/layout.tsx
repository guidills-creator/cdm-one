import type { ReactNode } from "react";

export const metadata = {
  title: "Admin | CDM One",
  description: "Painel administrativo CDM One",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(201,162,39,0.12),transparent_18%),_radial-gradient(circle_at_bottom_right,_rgba(21,113,191,0.16),transparent_26%)] text-white">
      <div className="min-h-screen">{children}</div>
    </div>
  );
}
