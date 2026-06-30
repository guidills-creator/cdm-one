"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { StatCard } from "@/components/admin/StatCard";

type ProposalRow = {
  id: string;
  codigo: string;
  cliente: { nome: string };
  destino: string;
  status: string;
  valorTotal: number;
  criadoEm: string;
};

export default function PropostasPage() {
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

  const stats = useMemo(() => {
    const totalRevenue = proposals.reduce((sum, proposal) => sum + Number(proposal.valorTotal), 0);
    const uniqueClients = new Set(proposals.map((proposal) => proposal.cliente.nome)).size;
    const latestDate = proposals[0]?.criadoEm ?? "";

    return [
      { title: "Propostas", value: `${proposals.length}`, subtitle: "Registros no banco", icon: "📄" },
      { title: "Receita", value: new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(totalRevenue), subtitle: "Potencial total", icon: "💰" },
      { title: "Clientes", value: `${uniqueClients}`, subtitle: "Clientes ativos", icon: "👥" },
      { title: "Última proposta", value: latestDate ? new Date(latestDate).toLocaleDateString("pt-BR") : "—", subtitle: "Mais recente", icon: "🕒" },
    ];
  }, [proposals]);

  return (
    <div className="p-6 sm:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#F2D06B]">Propostas</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Lista de propostas</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Acompanhe o pipeline de vendas em uma interface premium e focada em resultados.
          </p>
        </div>

        <Link
          href="/admin/propostas/nova"
          className="inline-flex items-center justify-center rounded-full bg-[#C9A227] px-5 py-3 text-sm font-semibold text-[#0D2B52] transition hover:bg-[#dfb63d]"
        >
          Nova proposta
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <section className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-[#07111f]/80 shadow-[0_30px_90px_rgba(0,0,0,0.24)]">
        <div className="border-b border-white/10 px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">Últimas propostas</h2>
              <p className="mt-1 text-sm text-slate-400">Resumo dos compromissos mais recentes.</p>
            </div>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.33em] text-slate-300">
              Atualizado agora
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left text-sm text-slate-200">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.24em] text-slate-400">
              <tr>
                <th className="px-4 py-4">Código</th>
                <th className="px-4 py-4">Cliente</th>
                <th className="px-4 py-4">Destino</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Valor</th>
                <th className="px-4 py-4">Data</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td className="px-4 py-8 text-center text-slate-400" colSpan={6}>
                    Carregando propostas...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td className="px-4 py-8 text-center text-red-300" colSpan={6}>{error}</td>
                </tr>
              ) : proposals.length === 0 ? (
                <tr>
                  <td className="px-4 py-8 text-center text-slate-400" colSpan={6}>
                    Nenhuma proposta encontrada.
                  </td>
                </tr>
              ) : (
                proposals.map((proposal) => (
                  <tr key={proposal.id} className="border-b border-white/10 hover:bg-white/5">
                    <td className="px-4 py-4 font-medium text-white">{proposal.codigo}</td>
                    <td className="px-4 py-4">{proposal.cliente.nome}</td>
                    <td className="px-4 py-4">{proposal.destino}</td>
                    <td className="px-4 py-4 text-[#C9A227]">{proposal.status}</td>
                    <td className="px-4 py-4">{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(proposal.valorTotal)}</td>
                    <td className="px-4 py-4">{new Date(proposal.criadoEm).toLocaleDateString("pt-BR")}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
