import Link from "next/link";
import { StatCard } from "@/components/admin/StatCard";

const stats = [
  { title: "Propostas", value: "24", subtitle: "Criadas no último mês", icon: "📄" },
  { title: "Conversão", value: "82%", subtitle: "Taxa de fechamento", icon: "🚀" },
  { title: "Receita", value: "R$ 124k", subtitle: "Potencial em pipeline", icon: "💰" },
  { title: "Clientes", value: "98", subtitle: "Ativos no painel", icon: "👥" },
];

const proposals = [
  { id: "A7K9", client: "Marina Andrade", destination: "Lisboa", status: "Em análise", amount: "R$ 18.400", date: "29/06/2026" },
  { id: "B4T2", client: "Carlos Mendes", destination: "Paris", status: "Aprovada", amount: "R$ 24.900", date: "27/06/2026" },
  { id: "C1Q8", client: "Helena Rocha", destination: "Dubai", status: "Pendente", amount: "R$ 31.200", date: "24/06/2026" },
  { id: "D5F1", client: "Samuel Lima", destination: "Maldivas", status: "Confirmada", amount: "R$ 45.800", date: "22/06/2026" },
];

export default function PropostasPage() {
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
              {proposals.map((proposal) => (
                <tr key={proposal.id} className="border-b border-white/10 hover:bg-white/5">
                  <td className="px-4 py-4 font-medium text-white">{proposal.id}</td>
                  <td className="px-4 py-4">{proposal.client}</td>
                  <td className="px-4 py-4">{proposal.destination}</td>
                  <td className="px-4 py-4 text-[#C9A227]">{proposal.status}</td>
                  <td className="px-4 py-4">{proposal.amount}</td>
                  <td className="px-4 py-4">{proposal.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
