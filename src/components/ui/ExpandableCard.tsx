"use client";

import { useState } from "react";

interface ExpandableCardProps {
  title: string;
  icon: string;
  summary: string;
  details: string[];
  defaultOpen?: boolean;
}

export function ExpandableCard({
  title,
  icon,
  summary,
  details,
  defaultOpen = false,
}: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article className="rounded-[24px] border border-white/10 bg-[#0D2B52]/70 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.22)]">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-2xl">{icon}</span>
          <div>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">{summary}</p>
          </div>
        </div>
        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-semibold text-white">
          {isOpen ? "Ocultar" : "Expandir"}
        </span>
      </button>

      {isOpen && (
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4">
          <ul className="space-y-3 text-sm leading-7 text-slate-200">
            {details.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C9A227]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
