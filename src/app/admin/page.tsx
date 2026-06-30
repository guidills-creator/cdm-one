"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const menuItems = [
  { label: "Dashboard", active: true },
  { label: "Clientes" },
  { label: "Propostas" },
  { label: "Pagamentos" },
  { label: "Viagens" },
  { label: "Configurações" },
];

type ProposalRow = {
  id: string;
  codigo: string;
  cliente: { nome: string };
  destino: string;
  status: string;
  valorTotal: number;
  criadoEm: string;
};

export default function AdminPage() {
  const [proposals, setProposals] = useState<ProposalRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProposals() {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/propostas");
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setError(data.error || "Falha ao carregar propostas.");
        setIsLoading(false);
        return;
      }

      const data = (await response.json()) as ProposalRow[];
      setProposals(data ?? []);
      setIsLoading(false);
    }

    loadProposals();
  }, []);

  const metricCards = useMemo(() => {
    const totalRevenue = proposals.reduce((sum, proposal) => sum + Number(proposal.valorTotal), 0);
    const uniqueClients = new Set(proposals.map((proposal) => proposal.cliente.nome)).size;
    const latestDate = proposals[0]?.criadoEm ?? "";

    return [
      { title: "Clientes", value: `${uniqueClients}`, icon: "👥" },
      { title: "Propostas", value: `${proposals.length}`, icon: "📄" },
      { title: "Receita", value: new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(totalRevenue), icon: "💰" },
      { title: "Última proposta", value: latestDate ? new Date(latestDate).toLocaleDateString("pt-BR") : "—", icon: "✈️" },
    ];
  }, [proposals]);

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
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F2D06B]">Dashboard</p>
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
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">{card.title}</p>
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
                  {isLoading ? (
                    <tr>
                      <td className="px-3 py-4 text-center text-slate-400" colSpan={6}>
                        Carregando propostas...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td className="px-3 py-4 text-center text-red-300" colSpan={6}>{error}</td>
                    </tr>
                  ) : proposals.length === 0 ? (
                    <tr>
                      <td className="px-3 py-4 text-center text-slate-400" colSpan={6}>
                        Nenhuma proposta encontrada.
                      </td>
                    </tr>
                  ) : (
                    proposals.slice(0, 3).map((proposal) => (
                      <tr key={proposal.id} className="border-b border-white/10 hover:bg-white/5">
                        <td className="px-3 py-4 text-white">{proposal.codigo}</td>
                        <td className="px-3 py-4">{proposal.cliente.nome}</td>
                        <td className="px-3 py-4">{proposal.destino}</td>
                        <td className="px-3 py-4 text-[#C9A227]">{proposal.status}</td>
                        <td className="px-3 py-4">{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(proposal.valorTotal))}</td>
                        <td className="px-3 py-4">{new Date(proposal.criadoEm).toLocaleDateString("pt-BR")}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
