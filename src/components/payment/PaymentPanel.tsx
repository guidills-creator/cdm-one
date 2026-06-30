import type { Proposta } from "../../types/proposta";

export function PaymentPanel({ proposal }: { proposal: Proposta }) {
  return (
    <div className="w-full max-w-md rounded-[24px] border border-white/10 bg-[#0D2B52]/70 p-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button className="rounded-full bg-[#C9A227] px-4 py-3 text-sm font-semibold text-[#0D2B52] transition hover:bg-[#dfb63d]">
          PIX
        </button>
        <button className="rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
          Mercado Pago
        </button>
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-white/20 bg-white/10 p-4">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F2D06B]">
          QR Code PIX
        </p>
        <div className="mt-4 flex h-36 items-center justify-center rounded-2xl bg-white/90 text-center text-sm font-semibold text-slate-700">
          Espaço reservado para QR Code PIX
        </div>
      </div>

      <button className="mt-4 w-full rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
        Copiar chave PIX
      </button>
      <p className="mt-3 text-sm text-slate-300">Valor total: R$ {proposal.valorTotal.toFixed(2)}</p>
    </div>
  );
}
