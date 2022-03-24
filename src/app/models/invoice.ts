import { Client } from "./clients"

export interface Invoice {
  id: number,
  data: string,
  numero: number,
  anno: number,
  importo: number,
  stato: {
      id: number,
      nome: string
  },
  cliente: Client
}