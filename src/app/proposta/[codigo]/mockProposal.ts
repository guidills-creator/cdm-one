export interface ProposalCard {
  id: string;
  title: string;
  icon: string;
  summary: string;
  details: string[];
}

export interface ProposalData {
  code: string;
  customerName: string;
  destination: string;
  dates: string;
  passengers: string;
  status: {
    label: string;
    tone: string;
  };
  cards: ProposalCard[];
  payment: {
    pixKey: string;
    pixLabel: string;
  };
  company: {
    history: string;
    mission: string;
    differentiators: string[];
  };
  footer: {
    legalName: string;
    cnpj: string;
    phones: string[];
    privacy: string;
    terms: string;
    copyright: string;
  };
}

export const mockProposal: ProposalData = {
  code: "A7K9",
  customerName: "Marina Andrade",
  destination: "Lisboa, Portugal",
  dates: "14/09/2026 – 24/09/2026",
  passengers: "2 passageiros",
  status: {
    label: "Em análise",
    tone: "bg-[#C9A227]/15 text-[#F2D06B] ring-[#C9A227]/35",
  },
  cards: [
    {
      id: "voos",
      title: "Voos",
      icon: "✈️",
      summary: "Trecho premium com conexão reduzida e prioridade no embarque.",
      details: [
        "Voo internacional em classe executiva com assentos selecionados",
        "Bagagem inclusa e check-in prioritário",
        "Conexão otimizada para reduzir tempo de espera",
      ],
    },
    {
      id: "hotel",
      title: "Hotel",
      icon: "🏨",
      summary: "Hospedagem em endereço exclusivo com experiência concierge.",
      details: [
        "Suite deluxe com vista para o mar",
        "Café da manhã diário e acesso ao spa",
        "Transfer privativo do aeroporto até o hotel",
      ],
    },
    {
      id: "transfer",
      title: "Transfer",
      icon: "🚗",
      summary: "Movimentação privada e segura em cada etapa da viagem.",
      details: [
        "Transfer aeroporto/hotel em veículo premium",
        "Atendimento com motorista exclusivo",
        "Planejamento de horários para maior conveniência",
      ],
    },
    {
      id: "passeios",
      title: "Passeios",
      icon: "🎟",
      summary: "Programa cultural e gastronômico cuidadosamente selecionado.",
      details: [
        "Tour privado pelas principais referências da cidade",
        "Reserva antecipada em restaurante premiado",
        "Experiências curtas e elegantes para cada dia",
      ],
    },
    {
      id: "seguro",
      title: "Seguro Viagem",
      icon: "🛡",
      summary: "Cobertura completa para tranquilidade durante toda a jornada.",
      details: [
        "Cobertura médica internacional",
        "Assistência em caso de atraso ou imprevistos",
        "Proteção para bagagem e interrupção de viagem",
      ],
    },
    {
      id: "observacoes",
      title: "Observações",
      icon: "📋",
      summary: "Detalhes operacionais e preferências registradas para a execução.",
      details: [
        "Quarto com cama king size e vista para o mar",
        "Preferência por alimentação sem glúten",
        "Solicitação de chegada no período da manhã",
      ],
    },
  ],
  payment: {
    pixKey: "cdm.turismo@pix.exemplo",
    pixLabel: "Chave PIX para pagamento",
  },
  company: {
    history: "A CDM Turismo nasceu para oferecer experiências de viagem com excelência, atenção personalizada e presença em cada detalhe.",
    mission: "Criar jornadas memoráveis, seguras e sofisticadas para clientes que valorizam conforto, precisão e exclusividade.",
    differentiators: [
      "Atendimento humanizado e orientado por especialistas",
      "Planejamento refinado com foco em experiência e conveniência",
      "Estrutura premium para viagens corporativas e particulares",
    ],
  },
  footer: {
    legalName: "CDM Turismo Ltda.",
    cnpj: "00.000.000/0001-00",
    phones: ["+55 (11) 3333-4444", "+55 (11) 98888-7777"],
    privacy: "Política de Privacidade",
    terms: "Termos de Uso",
    copyright: "© 2026 CDM Turismo. Todos os direitos reservados.",
  },
};
