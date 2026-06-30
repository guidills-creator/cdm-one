export interface Payment {
  formaPagamento: string;
  parcelas: number;
  valor: number;
  qrCode?: string;
  pixCopiaCola?: string;
  status: string;
}
