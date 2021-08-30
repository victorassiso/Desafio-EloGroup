export function loadColumns(){
  return [
    {
      id: 1,
      name: 'Cliente em Potencial',
      leads: [
        {
          id: '1',
          name: 'Org. Internacionais',
          telNumber: '+55 (21) 9 9999-9999',
          email: 'email@exemplo.com', 
          opportunities: ["RPA", "Analytics"]
        },
        {
          id: '2',
          name: 'Ind. Farm. LTDA',
          telNumber: '+55 (21) 9 9999-9999',
          email: 'email@exemplo.com', 
          opportunities: ["Produto Digital", "Analytics"]

        },
        {
          id: '3',
          name: 'Musc. Sound Live Cmp',
          telNumber: '+55 (21) 9 9999-9999',
          email: 'email@exemplo.com', 
          opportunities: ["RPA", "Produto Digital", "BPM"]

        }
      ]
    },
    {
      id: 2,
      name: 'Dados Confirmados',
      leads: []
    },
    {
      id: 3,
      name: 'Reunião Agendada',
      leads: []
    }    
  ]
}

export function loadLeads(){
  const localStorageLeads = localStorage.getItem('leads')
  const leads = localStorageLeads == null
  ? []
  : [...JSON.parse(localStorageLeads)]

  return leads;
}

export function loadData(){
  const leads = loadLeads()
  const columns = loadColumns();

  return {
    leads: [...leads],
    columns: [...columns]
  }
}

const data = loadData()
console.log(data)