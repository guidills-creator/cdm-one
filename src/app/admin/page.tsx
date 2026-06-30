"use client";

import Link from "next/link";

const menuItems = [
  { label: "Dashboard", active: true },
  { label: "Clientes" },
  { label: "Propostas" },
  { label: "Pagamentos" },
  { label: "Viagens" },
  { label: "Configurações" },
];

const metricCards = [
  { title: "Clientes", value: "0", icon: "👥" },
  { title: "Propostas", value: "0", icon: "📄" },
  { title: "Pagamentos", value: "0", icon: "💰" },
  { title: "Viagens", value: "0", icon: "✈️" },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#07111f_0%,_#0D2B52_45%,_#112f57_100%)] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <aside className="w-full border-b border-white/10 bg-[#07111f]/90 p-6 lg:w-72 lg:border-b-0 lg:border-r lg:p-8">
          <div className="mb-8">
            <p className="text-2xl font-semibold tracking-[0.25em] text-[#F2D06B]">CDM One</p>
            <p className="mt-2 text-sm text-slate-300">Painel administrativo</p>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`flex w-full items-center rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                  item.active
                    ? "bg-[#C9A227] text-[#0D2B52]"
                    : "bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <section className="flex-1 p-6 sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F2D06B]">
                Dashboard
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-white">Visão geral da operação</h1>
            </div>

            <Link
              href="/admin/propostas/nova"
              className="inline-flex items-center justify-center rounded-full bg-[#C9A227] px-5 py-3 text-sm font-semibold text-[#0D2B52] transition hover:bg-[#dfb63d]"
            >
              NOVA PROPOSTA
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metricCards.map((card) => (
              <div key={card.title} className="rounded-[24px] border border-white/10 bg-white/10 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
                    {card.title}
                  </p>
                  <span className="text-2xl">{card.icon}</span>
                </div>
                <p className="mt-6 text-4xl font-semibold text-white">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Últimas propostas</h2>
              <span className="text-sm text-slate-300">Pré-visualização</span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-200">
                <thead className="border-b border-white/10 text-xs uppercase tracking-[0.25em] text-slate-300">
                  <tr>
                    <th className="px-3 py-3">Código</th>
                    <th className="px-3 py-3">Cliente</th>
                    <th className="px-3 py-3">Destino</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Valor</th>
                    <th className="px-3 py-3">Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-3 py-4 text-white">A7K9</td>
                    <td className="px-3 py-4">Marina Andrade</td>
                    <td className="px-3 py-4">Lisboa</td>
                    <td className="px-3 py-4">Em análise</td>
                    <td className="px-3 py-4">R$ 18.400</td>
                    <td className="px-3 py-4">29/06/2026</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-3 py-4 text-white">B4T2</td>
                    <td className="px-3 py-4">Carlos Mendes</td>
                    <td className="px-3 py-4">Paris</td>
                    <td className="px-3 py-4">Aprovada</td>
                    <td className="px-3 py-4">R$ 24.900</td>
                    <td className="px-3 py-4">27/06/2026</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-4 text-white">C1Q8</td>
                    <td className="px-3 py-4">Helena Rocha</td>
                    <td className="px-3 py-4">Dubai</td>
                    <td className="px-3 py-4">Pendente</td>
                    <td className="px-3 py-4">R$ 31.200</td>
                    <td className="px-3 py-4">24/06/2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
