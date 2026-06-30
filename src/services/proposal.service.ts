import type { Proposta } from "../types/proposta";

const STORAGE_KEY = "cdm-one-proposals";

export interface ProposalDraft {
  clienteNome: string;
  destino: string;
  dataIda: string;
  dataVolta: string;
  adultos: number;
  criancas: number;
  voos: string;
  hotel: string;
  passeios: string;
  seguro: string;
  observacoes?: string;
  valorTotal: number;
}

function readStore(): Record<string, Proposta> {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as Record<string, Proposta>;
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, Proposta>) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function generateCode(length = 8) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";

  for (let index = 0; index < length; index += 1) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}

export function createProposal(draft: ProposalDraft): Proposta {
  const codigo = generateCode().toUpperCase();
  const proposal: Proposta = {
    id: `${Date.now()}`,
    codigo,
    cliente: {
      id: `${Date.now()}`,
      nome: draft.clienteNome,
      telefone: "",
      email: "",
      cidade: "",
      observacoes: draft.observacoes,
    },
    destino: draft.destino,
    dataIda: draft.dataIda,
    dataVolta: draft.dataVolta,
    adultos: draft.adultos,
    criancas: draft.criancas,
    valorTotal: draft.valorTotal,
    status: "Em análise",
    criadoEm: new Date().toISOString(),
    voos: [
      {
        cia: "A definir",
        origem: "",
        destino: draft.destino,
        voo: draft.voos || "A definir",
        horario: "A definir",
        valor: 0,
      },
    ],
    hotel: {
      nome: draft.hotel || "A definir",
      categoria: "A definir",
      checkin: draft.dataIda,
      checkout: draft.dataVolta,
      noites: 0,
      valor: 0,
    },
    passeios: [
      {
        nome: draft.passeios || "A definir",
        data: draft.dataIda,
        horario: "A definir",
        valor: 0,
      },
    ],
    seguro: draft.seguro === "Sim",
    aluguelCarro: false,
    formaPagamento: "A combinar",
    observacoes: draft.observacoes,
  };

  const store = readStore();
  store[codigo.toUpperCase()] = proposal;
  writeStore(store);

  return proposal;
}

export function getProposalByCode(codigo: string): Proposta | null {
  const store = readStore();
  return store[codigo.toUpperCase()] ?? null;
}
