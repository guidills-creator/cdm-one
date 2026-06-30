"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Dashboard", href: "/admin" },
  { label: "Propostas", href: "/admin/propostas" },
  { label: "Nova proposta", href: "/admin/propostas/nova" },
  { label: "Clientes", href: "/admin" },
  { label: "Pagamentos", href: "/admin" },
  { label: "Configurações", href: "/admin" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden min-h-screen flex-col gap-8 rounded-[32px] border border-white/10 bg-[#07111f]/90 p-6 shadow-[0_35px_110px_rgba(0,0,0,0.22)] backdrop-blur-xl lg:flex">
      <div className="space-y-3">
        <p className="text-2xl font-semibold tracking-[0.3em] text-[#F2D06B]">CDM One</p>
        <p className="max-w-[16rem] text-sm leading-6 text-slate-300">Painel administrativo premium com navegação rápida e visual minimalista.</p>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive ? "bg-[#C9A227] text-[#0D2B52]" : "bg-white/5 text-slate-200 hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-3 rounded-[28px] border border-white/10 bg-white/5 p-5">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Status</p>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-white">Operação</p>
            <p className="text-xs text-slate-300">Tudo funcionando</p>
          </div>
          <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"></span>
        </div>
      </div>
    </aside>
  );
}
