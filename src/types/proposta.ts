import type { Client } from "./client";
import type { Flight } from "./flight";
import type { Hotel } from "./hotel";
import type { Tour } from "./tour";

export interface Proposta {
  id: string;
  codigo: string;
  cliente: Client;
  destino: string;
  dataIda: string;
  dataVolta: string;
  adultos: number;
  criancas: number;
  valorTotal: number;
  status: string;
  criadoEm: string;
  voos: Flight[];
  hotel: Hotel;
  passeios: Tour[];
  seguro: boolean;
  aluguelCarro?: boolean;
  formaPagamento?: string;
  observacoes?: string;
}
