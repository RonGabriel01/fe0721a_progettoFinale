import { CommonModule } from "@angular/common";
import { Comune } from "./comune";


export interface Client {
  id: number;
  ragioneSociale: string;
  partitaIva: string;
  tipoCliente: string;
  email: string;
  pec: string;
  telefono: string;
  nomeContatto: string;
  cognomeContatto: string;
  telefonoContatto: string;
  emailContatto: string;
  indirizzoSedeOperativa: {
    id: number;
    via: string;
    civico: string;
    cap: string;
    localita: string;
    comune: Comune;
  };
  indirizzoSedeLegale: null;
  dataInserimento: null;
  dataUltimoContatto: null;
  fatturatoAnnuale: null;
}