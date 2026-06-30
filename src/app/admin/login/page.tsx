import Link from "next/link";

const adminHighlights = [
  { label: "Relatórios premium", value: "Painel em tempo real" },
  { label: "Propostas rápidas", value: "UX desenhada para conversão" },
  { label: "Totalmente responsiva", value: "Desktop e mobile" },
];

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(201,162,39,0.14),transparent_24%),_radial-gradient(circle_at_bottom_right,_rgba(21,113,191,0.16),transparent_30%)] px-4 py-10 text-white">
      <div className="w-full max-w-5xl">
        <div className="grid gap-8 rounded-[36px] border border-white/10 bg-[#07111f]/90 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:grid-cols-[1.25fr_0.85fr] lg:p-10">
          <section className="space-y-8">
            <div className="inline-flex rounded-full bg-[#C9A227]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#F2D06B]">
              CDM One
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[#F2D06B]">Painel administrativo</p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Acesso premium para gerenciar propostas com estilo.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Esta é a visão inicial da área administrativa do CDM One. O login ainda não está implementado, mas o design já entrega um painel moderno e escalável.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {adminHighlights.map((item) => (
                <div key={item.label} className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                  <p className="mt-4 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-[#0D2B52]/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#F2D06B]">Entrar</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Acesse a conta administrativa</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Por enquanto, esta tela serve como protótipo visual. Navegue pelas páginas para ver o painel completo.
            </p>

            <form className="mt-8 space-y-5">
              <label className="block text-sm text-slate-200">
                <span className="mb-2 block font-medium">Email</span>
                <input
                  type="email"
                  placeholder="admin@cdmone.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
                />
              </label>

              <label className="block text-sm text-slate-200">
                <span className="mb-2 block font-medium">Senha</span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20"
                />
              </label>

              <button
                type="button"
                className="w-full rounded-full bg-[#C9A227] px-5 py-3 text-sm font-semibold text-[#0D2B52] transition hover:bg-[#dfb63d]"
              >
                Entrar
              </button>
            </form>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
              <p className="font-semibold text-white">Sem credenciais por enquanto?</p>
              <p className="mt-2">Navegue para o painel ou a lista de propostas e veja como a nova área administrativa se comporta.</p>
              <div className="mt-4">
                <Link
                  href="/admin"
                  className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Ir para o dashboard
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
