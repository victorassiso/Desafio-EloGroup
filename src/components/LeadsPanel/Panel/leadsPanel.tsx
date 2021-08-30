import { Container, Header} from "./leadsPanel.style";
//import { DndTable } from '../DragDrop/Table/table';
import logoImg from '../../assets/logo.png'
import Modal from 'react-modal';
import { Table } from '../Table/table'

Modal.setAppElement('#root');
export interface LeadsPanelProps {
  onOpenNewLeadModal: () => void;
}

export function LeadsPanel({ onOpenNewLeadModal }: LeadsPanelProps) {

  return (
    <Container>
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

        <Table />
    </Container>
  );
}