import { Container, Content, Header} from "./leadsPanel.style";
import { DndTable } from '../DragDrop/Table/table';
import logoImg from '../assets/logo.png'

export interface LeadsPanelProps {
  onOpenNewLeadModal: () => void;
}

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

        <DndTable />

      </Content>
    </Container>
  );
}