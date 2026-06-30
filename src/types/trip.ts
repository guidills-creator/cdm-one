import type { Flight } from "./flight";
import type { Hotel } from "./hotel";
import type { Tour } from "./tour";

export interface Trip {
  voos: Flight[];
  hotel: Hotel;
  passeios: Tour[];
  seguro: boolean;
  aluguelCarro: boolean;
  observacoes?: string;
}
