import type { Empresa } from "../types/empresa";

export const mockEmpresa: Empresa = {
  nome: "CDM Turismo",
  nomeFantasia: "CDM One",
  razaoSocial: "CDM Turismo Ltda.",
  cnpj: "00.000.000/0001-00",
  telefonePrincipal: "+55 (11) 3333-4444",
  telefoneSecundario: "+55 (11) 98888-7777",
  email: "contato@cdmturismo.com.br",
  cidade: "São Paulo",
  estado: "SP",
  pais: "Brasil",
  historia:
    "A CDM Turismo nasceu para unir excelência operacional, atendimento personalizado e planejamento sofisticado em cada experiência de viagem.",
  missao:
    "Criar jornadas de viagem memoráveis, seguras e exclusivas para clientes que valorizam conforto e precisão.",
  diferenciais: [
    "Atendimento especializado e humanizado",
    "Planejamento premium com atenção a cada detalhe",
    "Estrutura preparada para viagens corporativas e particulares",
  ],
};
