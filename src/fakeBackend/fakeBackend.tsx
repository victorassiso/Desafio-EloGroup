export interface Lead {
  id: number;
  name: string;
  telefone: string;
  email: string;
  RPA: boolean,
  produtoDigital: boolean,
  analytics: boolean,
  BPM: boolean,
  status: string
}

export interface LeadProps {
  id: number,
  name: string,
  status: string,
}
export interface ColumnProps {
  column: {
    id: number,
    name: string,
  }
  lead: {
    name: string,
    status: string,
  }
}
export interface RowProps {
  lead: LeadProps,
  column: ColumnProps
}

export const leads = [
  {
    id: 1,
    name: "Org. Internacionais",
    telefone: "+55 (21) 9 9999-9999",
    email: "exemplo@email.com",
    RPA: true,
    produtoDigital: true,
    analytics: true,
    BPM: false,
    status: "Reunião Agendada"
  },
  {
    id: 2,
    name: "Ind. Farm. LTDA",
    telefone: "+55 (21) 9 9999-9999",
    email: "exemplo@email.com",
    RPA: true,
    produtoDigital: true,
    analytics: true,
    BPM: false,
    status: "Cliente em Potencial"
  },
  {
    id: 3,
    name: "Music. Sound Live Cmp",
    telefone: "+55 (21) 9 9999-9999",
    email: "exemplo@email.com",
    RPA: true,
    produtoDigital: true,
    analytics: true,
    BPM: false,
    status: "Dados Confirmados"
  },
]



export const columns = [
  {
    id: 1,
    name: 'Cliente em Potencial',
  },
  {
    id: 2,
    name: 'Dados Confirmados',
  },
  {
    id: 3,
    name: 'Reunião Agendada',
  },
]