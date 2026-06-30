"use client";

import Link from "next/link";
import { use, useEffect, useMemo, useState } from "react";
import { BRAND } from "../../../lib/constants";
import { getProposalByCode } from "../../../services/proposal.service";
import type { Proposta } from "../../../types/proposta";

const cards = [
  { key: "voos", title: "Voos", icon: "✈️", accent: "from-[#0B2341] to-[#123a63]" },
  { key: "hotel", title: "Hotel", icon: "🏨", accent: "from-[#0B2341] to-[#123a63]" },
  { key: "passeios", title: "Passeios", icon: "🎟", accent: "from-[#0B2341] to-[#123a63]" },
  { key: "seguro", title: "Seguro", icon: "🛡", accent: "from-[#0B2341] to-[#123a63]" },
  { key: "carro", title: "Aluguel de carro", icon: "🚗", accent: "from-[#0B2341] to-[#123a63]" },
];

export default function PropostaPage({
  params,
}: {
  params: Promise<{ codigo: string }>;
}) {
  const { codigo } = use(params);
  const [proposal, setProposal] = useState<Proposta | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProposal() {
      setIsLoading(true);
      const response = await fetch(`/api/propostas?codigo=${codigo.toUpperCase()}`);
      if (response.ok) {
        const data = (await response.json()) as Proposta[];
        if (Array.isArray(data) && data.length > 0) {
          setProposal(data[0]);
          setIsLoading(false);
          return;
        }
      }

      if (typeof window !== "undefined") {
        const loadedProposal = getProposalByCode(codigo.toUpperCase());
        setProposal(loadedProposal);
      }

      setIsLoading(false);
    }

    loadProposal();
  }, [codigo]);

  const formattedValue = useMemo(() => {
    if (!proposal) return "R$ 0,00";

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(proposal.valorTotal);
  }, [proposal]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f7f7f2] text-slate-800">
        <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-12">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_rgba(11,35,65,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Carregando</p>
            <h1 className="mt-3 text-3xl font-semibold text-[#0B2341]">Aguarde um momento...</h1>
          </div>
        </div>
      </main>
    );
  }

  if (!proposal) {
    return (
      <main className="min-h-screen bg-[#f7f7f2] text-slate-800">
        <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-12">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_rgba(11,35,65,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Proposta</p>
            <h1 className="mt-3 text-3xl font-semibold text-[#0B2341]">Nenhuma proposta foi encontrada.</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">A proposta com código <strong>{codigo}</strong> não foi encontrada no banco de dados.</p>
            <Link href="/admin" className="mt-6 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B2341] transition hover:bg-[#e0bf53]">
              Voltar ao painel
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8 lg:px-10">
          <div>
            <p className="text-xl font-semibold tracking-[0.25em] text-[#D4AF37]">{BRAND.name}</p>
            <p className="text-sm text-slate-500">Proposta de Viagem Personalizada</p>
          </div>
          <Link href="/" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-[#0B2341] transition hover:bg-slate-100">
            Voltar ao início
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(11,35,65,0.08)] sm:p-8 lg:p-10">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Proposta {proposal.codigo}</p>
              <h1 className="mt-3 text-3xl font-semibold text-[#0B2341] sm:text-4xl">{proposal.cliente.nome}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Uma experiência exclusiva, cuidadosamente planejada para oferecer conforto, precisão e momentos memoráveis em cada etapa da viagem.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Código</p>
                  <p className="mt-2 font-semibold text-[#0B2341]">{proposal.codigo}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Data de emissão</p>
                  <p className="mt-2 font-semibold text-[#0B2341]">{proposal.criadoEm.slice(0, 10)}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Status</p>
                  <p className="mt-2 font-semibold text-[#0B2341]">{proposal.status}</p>
                </div>
              </div>
            </div>

            <aside className="rounded-[24px] border border-slate-200 bg-[#0B2341] p-6 text-white shadow-[0_20px_45px_rgba(11,35,65,0.16)]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Resumo da viagem</p>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Destino</span>
                  <span className="font-medium text-white">{proposal.destino}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Período</span>
                  <span className="font-medium text-white">{proposal.dataIda} / {proposal.dataVolta}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Passageiros</span>
                  <span className="font-medium text-white">{proposal.adultos + proposal.criancas}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Valor total</span>
                  <span className="font-medium text-white">{formattedValue}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Forma de pagamento</span>
                  <span className="font-medium text-white">{proposal.formaPagamento || "A combinar"}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a href="https://wa.me/5511937252530" target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-full bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#0B2341] transition hover:bg-[#e3c25a]">
                  Solicitar Pagamento
                </a>
                <a href="https://wa.me/5511937252530" target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Falar com Consultor
                </a>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-300">
                <p className="font-semibold text-white">Atendimento</p>
                <div className="mt-3 space-y-2">
                  <p>WhatsApp Comercial: (11) 93725-2530</p>
                  <p>Atendimento: (11) 96510-1213</p>
                  <p>Operacional: (11) 96435-4944</p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(11,35,65,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2341] text-2xl text-[#D4AF37]">✈️</div>
                <div>
                  <h2 className="text-xl font-semibold text-[#0B2341]">Voos</h2>
                  <p className="text-sm text-slate-500">Trechos selecionados com conforto e conveniência.</p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {proposal.voos.map((voo) => (
                  <div key={`${voo.cia}-${voo.voo}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-[#0B2341]">{voo.cia}</p>
                      <p className="text-[#D4AF37]">{voo.voo}</p>
                    </div>
                    <p className="mt-2">{voo.origem} → {voo.destino}</p>
                    <p>Horário: {voo.horario}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(11,35,65,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2341] text-2xl text-[#D4AF37]">🏨</div>
                <div>
                  <h2 className="text-xl font-semibold text-[#0B2341]">Hotel</h2>
                  <p className="text-sm text-slate-500">Hospedagem escolhida para conforto e localização privilegiada.</p>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <p className="font-semibold text-[#0B2341]">{proposal.hotel.nome}</p>
                <p className="mt-2">Categoria: {proposal.hotel.categoria}</p>
                <p>Check-in: {proposal.hotel.checkin}</p>
                <p>Check-out: {proposal.hotel.checkout}</p>
                <p>Noites: {proposal.hotel.noites}</p>
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(11,35,65,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2341] text-2xl text-[#D4AF37]">🎟</div>
                <div>
                  <h2 className="text-xl font-semibold text-[#0B2341]">Passeios</h2>
                  <p className="text-sm text-slate-500">Experiências selecionadas para enriquecer a jornada.</p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {proposal.passeios.map((passeio) => (
                  <div key={`${passeio.nome}-${passeio.data}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                    <p className="font-semibold text-[#0B2341]">{passeio.nome}</p>
                    <p className="mt-2">Data: {passeio.data}</p>
                    <p>Horário: {passeio.horario}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(11,35,65,0.06)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2341] text-2xl text-[#D4AF37]">🛡</div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#0B2341]">Seguro</h2>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{proposal.seguro ? "Cobertura inclusa para maior tranquilidade durante a viagem." : "Seguro não incluído na proposta."}</p>
              </article>

              <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(11,35,65,0.06)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2341] text-2xl text-[#D4AF37]">🚗</div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#0B2341]">Aluguel de carro</h2>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{proposal.aluguelCarro ? "Serviço previsto para maior mobilidade durante a estadia." : "Não incluído nesta proposta."}</p>
              </article>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(11,35,65,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Detalhes adicionais</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-[#0B2341]">Observações</p>
                <p className="mt-2">{proposal.observacoes || "Nenhuma observação adicional."}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-[#0B2341]">Informações</p>
                <p className="mt-2">A proposta segue alinhada com o perfil do cliente e pode ser ajustada conforme novas preferências.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#0B2341] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-300 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-10">
          <div>
            <p className="text-base font-semibold text-white">CDM Turismo</p>
            <p className="mt-2">Criando Destinos Memoráveis</p>
            <p className="mt-3">CNPJ: 00.000.000/0001-00</p>
          </div>
          <div>
            <p className="font-semibold text-white">Contato</p>
            <p className="mt-2">Instagram @cdm.turismo</p>
          </div>
          <div>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
