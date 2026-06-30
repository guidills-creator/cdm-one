import type { Proposta } from "../types/proposta";

export const mockProposta: Proposta = {
  id: "mock-1",
  codigo: "A7K9",
  cliente: {
    id: "client-1",
    nome: "Marina Andrade",
    email: "marina.andrade@email.com",
    telefone: "+55 (11) 99999-1111",
    cidade: "São Paulo",
    observacoes: "Cliente VIP",
  },
  destino: "Lisboa, Portugal",
  dataIda: "2026-09-14",
  dataVolta: "2026-09-24",
  adultos: 2,
  criancas: 0,
  valorTotal: 18400,
  status: "Em análise",
  criadoEm: "2026-06-29T10:00:00.000Z",
  voos: [
    {
      cia: "LATAM",
      origem: "São Paulo",
      destino: "Lisboa",
      voo: "LA215",
      horario: "08:30",
      valor: 6200,
    },
  ],
  hotel: {
    nome: "Hotel Premium Lisboa",
    categoria: "Superior",
    checkin: "2026-09-14",
    checkout: "2026-09-24",
    noites: 10,
    valor: 7200,
  },
  passeios: [
    {
      nome: "Tour gastronômico",
      data: "2026-09-16",
      horario: "19:30",
      valor: 980,
    },
  ],
  seguro: true,
  observacoes: "Reserva com preferência por quarto com vista.",
};
