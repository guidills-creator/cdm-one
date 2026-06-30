export const appConfig = {
  appName: "CDM One",
  environment: "mock",
  integrations: {
    supabase: false,
    mercadoPago: false,
    whatsapp: false,
    airlinesApi: false,
  },
  features: {
    proposalPreview: true,
    paymentGateway: false,
    realTimeSync: false,
  },
};
