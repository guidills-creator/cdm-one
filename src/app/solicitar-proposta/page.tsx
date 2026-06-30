"use client";

import { useMemo, useState } from "react";
import { BRAND } from "../../lib/constants";

const steps = [
  "Dados pessoais",
  "Sobre a viagem",
  "Datas",
  "Passageiros",
  "Preferências",
  "Hospedagem",
  "Experiência",
  "Orçamento",
  "Observações",
];

const initialForm = {
  nome: "",
  whatsapp: "",
  email: "",
  embarque: "",
  destino: "",
  imaginaViagem: "",
  objetivo: "",
  celebracao: "",
  dataIda: "",
  dataRetorno: "",
  datasFlexiveis: "",
  adultos: "",
  criancas: "",
  idadesCriancas: "",
  necessidades: "",
  companhia: "",
  milhas: "",
  usarMilhas: "",
  conexoes: "",
  horario: "",
  hotelDesejado: "",
  regiao: "",
  categoriaHotel: "",
  observacoesHospedagem: "",
  naoPodeFaltar: "",
  experiencias: "",
  roteiroPersonalizado: "",
  roteiroJaPossui: "",
  investimento: "",
  observacoes: "",
};

export default function SolicitarPropostaPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const renderField = (
    label: string,
    name: keyof typeof initialForm,
    type: "text" | "email" | "date" | "textarea" | "select" = "text",
    options?: string[],
  ) => {
    const commonClassName =
      "w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30";

    if (type === "textarea") {
      return (
        <label className="block text-sm text-slate-200">
          <span className="mb-2 block font-medium">{label}</span>
          <textarea
            name={name}
            value={form[name]}
            onChange={handleChange}
            rows={4}
            className={commonClassName}
          />
        </label>
      );
    }

    if (type === "select") {
      return (
        <label className="block text-sm text-slate-200">
          <span className="mb-2 block font-medium">{label}</span>
          <select name={name} value={form[name]} onChange={handleChange} className={commonClassName}>
            <option value="">Selecione</option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      );
    }

    return (
      <label className="block text-sm text-slate-200">
        <span className="mb-2 block font-medium">{label}</span>
        <input
          name={name}
          type={type}
          value={form[name]}
          onChange={handleChange}
          className={commonClassName}
        />
      </label>
    );
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#07111f_0%,_#0D2B52_45%,_#112f57_100%)] text-white">
      <header className="border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8 lg:px-10">
          <div>
            <p className="text-xl font-semibold tracking-[0.25em] text-[#F2D06B]">{BRAND.name}</p>
            <p className="text-sm text-slate-300">Solicite sua proposta personalizada</p>
          </div>
          <a href="/" className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10">
            Voltar ao início
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8 lg:p-10">
          {!submitted ? (
            <>
              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F2D06B]">
                    Nova solicitação
                  </p>
                  <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                    Conte-nos sobre sua viagem e criaremos uma proposta exclusiva.
                  </h1>
                  <p className="mt-4 text-lg leading-8 text-slate-200">
                    Cada etapa foi pensada para reunir as informações essenciais e preparar uma experiência premium.
                  </p>
                </div>

                <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#0D2B52]/70 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>Etapa {step + 1}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#C9A227]" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="mt-3 text-sm text-slate-200">{steps[step]}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 0 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {renderField("Nome completo", "nome", "text")}
                    {renderField("WhatsApp", "whatsapp", "text")}
                    {renderField("E-mail", "email", "email")}
                    {renderField("Cidade/Estado de embarque", "embarque", "text")}
                  </div>
                )}

                {step === 1 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {renderField("Destino desejado", "destino", "text")}
                    {renderField("Objetivo da viagem", "objetivo", "text")}
                    {renderField("Como imagina sua viagem", "imaginaViagem", "textarea")}
                    {renderField("Comemoração especial", "celebracao", "text")}
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {renderField("Data prevista de ida", "dataIda", "date")}
                    {renderField("Data prevista de retorno", "dataRetorno", "date")}
                    {renderField("As datas são flexíveis?", "datasFlexiveis", "select", ["Sim", "Não", "Parcialmente"])}
                  </div>
                )}

                {step === 3 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {renderField("Quantidade de adultos", "adultos", "text")}
                    {renderField("Quantidade de crianças", "criancas", "text")}
                    {renderField("Idade de cada criança", "idadesCriancas", "textarea")}
                    {renderField("Alguma necessidade especial?", "necessidades", "textarea")}
                  </div>
                )}

                {step === 4 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {renderField("Companhia aérea de preferência", "companhia", "text")}
                    {renderField("Possui milhas? Quais?", "milhas", "text")}
                    {renderField("Deseja utilizá-las?", "usarMilhas", "select", ["Sim", "Não", "Talvez"])}
                    {renderField("Aceita conexões?", "conexoes", "select", ["Sim", "Não", "Só se for essencial"])}
                    {renderField("Preferência de horário para voar", "horario", "text")}
                  </div>
                )}

                {step === 5 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {renderField("Hotel desejado", "hotelDesejado", "text")}
                    {renderField("Região desejada", "regiao", "text")}
                    {renderField("Categoria do hotel", "categoriaHotel", "select", ["Luxo", "Superior", "Boutique", "Econômico", "Indiferente"])}
                    {renderField("Observações sobre hospedagem", "observacoesHospedagem", "textarea")}
                  </div>
                )}

                {step === 6 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {renderField("O que não pode faltar nessa viagem?", "naoPodeFaltar", "textarea")}
                    {renderField("Quais experiências deseja viver?", "experiencias", "textarea")}
                    {renderField("Deseja um roteiro personalizado?", "roteiroPersonalizado", "select", ["Sim", "Não", "Talvez"])}
                    {renderField("Já possui roteiro?", "roteiroJaPossui", "textarea")}
                  </div>
                )}

                {step === 7 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {renderField("Quanto pretende investir nessa viagem?", "investimento", "text")}
                  </div>
                )}

                {step === 8 && (
                  <div className="grid gap-4 md:grid-cols-1">
                    {renderField("Observações adicionais", "observacoes", "textarea")}
                  </div>
                )}

                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    disabled={step === 0}
                  >
                    Voltar
                  </button>

                  {step < steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#0D2B52] transition hover:bg-[#dfb63d]"
                    >
                      Continuar
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#0D2B52] transition hover:bg-[#dfb63d]"
                    >
                      Quero minha proposta personalizada
                    </button>
                  )}
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-5 rounded-[28px] border border-white/10 bg-[#0D2B52]/70 p-8 text-center">
              <div className="rounded-full border border-[#C9A227]/30 bg-[#C9A227]/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#F2D06B]">
                Solicitação recebida
              </div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Um especialista da CDM Turismo entrará em contato em breve.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-200">
                Agradecemos pelo seu interesse. Sua solicitação foi registrada com sucesso e ficará pronta para futura integração com Supabase.
              </p>
              <a href="/" className="rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#0D2B52] transition hover:bg-[#dfb63d]">
                Voltar para o início
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
