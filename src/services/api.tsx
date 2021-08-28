export function loadLeads(){
  const leads = [
    {
      id: 1,
      name: "Org. Internacionais",
      telefone: "+55 (21) 9 9999-9999",
      email: "exemplo@email.com",
      RPA: true,
      produtoDigital: true,
      analytics: true,
      BPM: false,
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
    },
    {
      id: 3,
      name: "Musc. Sound Live Cmp",
      telefone: "+55 (21) 9 9999-9999",
      email: "exemplo@email.com",
      RPA: true,
      produtoDigital: true,
      analytics: true,
      BPM: false,
    },
  ]

  return leads;
}

export function loadColumns(){
  return [
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
    }    
  ]
}

export function loadData() {
  return [
    {
      column: [
        {
          id: 1,
          name: 'Cliente em Potencial',
          content: {
            id: 1,
            name: "Org. Internacionais",
            telefone: "+55 (21) 9 9999-9999",
            email: "exemplo@email.com",
            RPA: true,
            produtoDigital: true,
            analytics: true,
            BPM: false,
          },
        },
        {
          id: 1,
          name: 'Cliente em Potencial',
          client: {
            id: 1,
            name: "Org. Internacionais",
            telefone: "+55 (21) 9 9999-9999",
            email: "exemplo@email.com",
            RPA: true,
            produtoDigital: true,
            analytics: true,
            BPM: false,
          },
        },
        {
          id: 1,
          name: 'Cliente em Potencial',
          client: {
            id: 1,
            name: "Org. Internacionais",
            telefone: "+55 (21) 9 9999-9999",
            email: "exemplo@email.com",
            RPA: true,
            produtoDigital: true,
            analytics: true,
            BPM: false,
          },
        },
      ]
    }
  ]
}