export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(201,162,39,0.2),_transparent_35%),linear-gradient(135deg,_#0D2B52_0%,_#091a34_55%,_#07111f_100%)] text-white">
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_30%)]" />
        <div className="absolute left-[-8%] top-[-10%] h-56 w-56 rounded-full bg-[#C9A227]/20 blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-6%] h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative w-full max-w-6xl rounded-[32px] border border-white/15 bg-white/10 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#F2D06B]">
              CDM One
            </span>

            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Sua viagem começa aqui.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              A plataforma inteligente da CDM Turismo para propostas de viagem,
              pagamentos e acompanhamento completo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#proposta"
                className="rounded-full bg-[#C9A227] px-7 py-3 text-sm font-semibold text-[#0D2B52] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#dfb63d]"
              >
                Ver minha proposta
              </a>
              <a
                href="#cdm"
                className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/20"
              >
                Conhecer a CDM Turismo
              </a>
            </div>

            <div className="mt-10 grid w-full gap-4 text-left sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#0D2B52]/50 p-4">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F2D06B]">
                  Propostas
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Estrutura elegante, clara e sob medida para cada destino.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0D2B52]/50 p-4">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F2D06B]">
                  Pagamentos
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Fluxo seguro, simples e preparado para cada etapa da viagem.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0D2B52]/50 p-4">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F2D06B]">
                  Acompanhamento
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Visibilidade completa desde a confirmação até o retorno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
