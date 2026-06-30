import type { Proposta } from "../../types/proposta";

export function ProposalSummaryCard({ proposal }: { proposal: Proposta }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0D2B52]/70 p-4 sm:min-w-[270px]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-300">
          Status da proposta
        </p>
        <span className="rounded-full bg-[#C9A227]/15 px-3 py-1 text-sm font-semibold text-[#F2D06B] ring-1 ring-[#C9A227]/35">
          {proposal.status}
        </span>
      </div>
      <div className="mt-4 grid gap-3 text-sm text-slate-200">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span>Cliente</span>
          <span className="font-medium text-white">{proposal.cliente.nome}</span>
        </div>
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span>Destino</span>
          <span className="font-medium text-white">{proposal.destino}</span>
        </div>
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span>Datas</span>
          <span className="font-medium text-white">
            {proposal.dataIda} / {proposal.dataVolta}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Passageiros</span>
          <span className="font-medium text-white">{proposal.adultos + proposal.criancas} pessoas</span>
        </div>
      </div>
    </div>
  );
}
