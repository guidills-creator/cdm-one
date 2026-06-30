type StatCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
};

export function StatCard({ title, value, subtitle, icon }: StatCardProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#C9A227]/10 text-2xl">{icon}</div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{subtitle}</p>
    </div>
  );
}
