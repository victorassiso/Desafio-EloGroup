import { Container, Content, Header} from "./leadsPanel.style";
//import { DndTable } from '../DragDrop/Table/table';
import logoImg from '../assets/logo.png'
import Modal from 'react-modal';
import { Rows } from "./Rows/rows";
import { useState } from "react";


Modal.setAppElement('#root');
export interface LeadsPanelProps {
  onOpenNewLeadModal: () => void;
}

export function LeadsPanel({ onOpenNewLeadModal }: LeadsPanelProps) {
  const [leads, setLeads] = useState([])



  return (
    <Container>
      <Content>
        <Header>
        <img src={ logoImg } alt="EloGroup" />
        <p>Painel de Leads</p>
        </Header>
        <button
          type="button"
          onClick={onOpenNewLeadModal}
        >
          Novo Lead (+)
        </button>
        
      </Content>
    </Container>
  );
}