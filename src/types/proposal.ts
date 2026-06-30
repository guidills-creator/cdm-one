import type { Client } from "./client";

export interface Proposal {
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
  created_at: string;
}
