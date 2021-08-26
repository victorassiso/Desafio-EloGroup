import React from 'react';
import { Table } from './DragDrop.style';
import { DragableElement } from '../DragableElement/dragableElement'

export interface Lead {
  id: number;
  name: string;
  telefone: string;
  email: string;
  RPA: boolean,
  produtoDigital: boolean,
  analytics: boolean,
  BPM: boolean
}

export interface LeadProps {
  id: number;
  name: string;
}

const leadList = [
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
      BPM: false
    },
    {
      id: 3,
      name: "Music. Sound Live Cmp",
      telefone: "+55 (21) 9 9999-9999",
      email: "exemplo@email.com",
      RPA: true,
      produtoDigital: true,
      analytics: true,
      BPM: false
    },
  ]

export function DragDrop(){
  return (
      <Table>
          <thead>
            <tr>
              <th>Cliente em Potencial</th>
              <th>Dados Confirmados</th>
              <th>Reunião Agendada</th>
            </tr>
          </thead>

          <tbody>
            {leadList.map((lead)=>{
              return (
                <tr>
                  <td>
                    <DragableElement
                      id={lead.id}
                      name={lead.name}
                    />
                  </td>
                  <td>a</td>
                  <td>a</td>
                </tr>
              )
            })}
          </tbody>
      </Table>
  );
}