import { Column, Container, Content, Header, Table, THead} from "./leadsPanel.style";
//import { DndTable } from '../DragDrop/Table/table';
import logoImg from '../../assets/logo.png'
import Modal from 'react-modal';
import { Rows } from "../Rows/rows";
import { loadColumns, loadLeads } from "../../../services/api";

Modal.setAppElement('#root');
export interface LeadsPanelProps {
  onOpenNewLeadModal: () => void;
}
const columns = loadColumns();
const leads = loadLeads();

export function LeadsPanel({ onOpenNewLeadModal }: LeadsPanelProps) {

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

        <Table>
          <THead>
            {columns.map((column)=><Column>{column.name}</Column>)}
          </THead>

          {leads.map((lead)=><Rows key={lead.id} id={lead.id}name={lead.name}/>)}
          
        </Table>  

      </Content>
    </Container>
  );
}