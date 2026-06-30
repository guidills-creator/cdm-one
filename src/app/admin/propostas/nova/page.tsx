"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const initialForm = {
  clienteNome: "",
  destino: "",
  dataIda: "",
  dataVolta: "",
  adultos: 2,
  criancas: 0,
  voos: "",
  hotel: "",
  passeios: "",
  seguro: "Sim",
  observacoes: "",
  valorTotal: 0,
};

export default function NovaPropostaPage() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "adultos" || name === "criancas" || name === "valorTotal"
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage(null);

    if (!form.clienteNome.trim() || !form.destino.trim() || !form.dataIda || !form.dataVolta || !form.valorTotal) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    const response = await fetch("/api/propostas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setIsSubmitting(false);

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      setErrorMessage(data?.error || "Falha ao salvar a proposta.");
      return;
    }

    router.push("/admin/propostas");
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#07111f_0%,_#0D2B52_45%,_#112f57_100%)] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F2D06B]">Admin</p>
              <h1 className="mt-2 text-3xl font-semibold text-white">Gerador de proposta</h1>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-200">
                Preencha os campos e gere uma proposta instantânea, salva diretamente no Supabase.
              </p>
            </div>
            <Link href="/admin" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Voltar ao painel
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 rounded-[24px] border border-white/10 bg-[#0D2B52]/70 p-6 md:grid-cols-2">
            <label className="block text-sm text-slate-200">
              <span className="mb-2 block font-medium">Nome do cliente</span>
              <input
                name="clienteNome"
                value={form.clienteNome}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
                required
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="mb-2 block font-medium">Destino</span>
              <input
                name="destino"
                value={form.destino}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
                required
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="mb-2 block font-medium">Data prevista de ida</span>
              <input
                type="date"
                name="dataIda"
                value={form.dataIda}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
                required
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="mb-2 block font-medium">Data prevista de volta</span>
              <input
                type="date"
                name="dataVolta"
                value={form.dataVolta}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
                required
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="mb-2 block font-medium">Adultos</span>
              <input
                type="number"
                name="adultos"
                value={form.adultos}
                min="1"
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
                required
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="mb-2 block font-medium">Crianças</span>
              <input
                type="number"
                name="criancas"
                value={form.criancas}
                min="0"
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
                required
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="mb-2 block font-medium">Voos</span>
              <input
                name="voos"
                value={form.voos}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
                placeholder="Ex.: Classe executiva"
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="mb-2 block font-medium">Hotel</span>
              <input
                name="hotel"
                value={form.hotel}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
                placeholder="Ex.: Hotel premium"
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="mb-2 block font-medium">Passeios</span>
              <input
                name="passeios"
                value={form.passeios}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
                placeholder="Ex.: Tour gastronômico"
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="mb-2 block font-medium">Seguro</span>
              <select
                name="seguro"
                value={form.seguro}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
              >
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </label>

            <label className="block text-sm text-slate-200 md:col-span-2">
              <span className="mb-2 block font-medium">Valor total</span>
              <input
                type="number"
                name="valorTotal"
                value={form.valorTotal}
                min="0"
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
                required
              />
            </label>

            <label className="block text-sm text-slate-200 md:col-span-2">
              <span className="mb-2 block font-medium">Observações</span>
              <textarea
                name="observacoes"
                value={form.observacoes}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
              />
            </label>

            {errorMessage ? (
              <div className="md:col-span-2 rounded-3xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                {errorMessage}
              </div>
            ) : null}

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#0D2B52] transition hover:bg-[#dfb63d] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Salvando..." : "Gerar Proposta"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
