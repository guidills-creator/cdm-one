import type { ReactNode } from "react";

export function ProposalShell({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">{children}</div>;
}
