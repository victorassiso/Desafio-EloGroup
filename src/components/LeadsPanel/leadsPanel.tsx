import { Container, Content, Header, DndProviderContainer} from "./leadsPanel.style";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DragDrop } from '../DragDrop/DragDrop';
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

        <DndProviderContainer>
          <DndProvider backend={HTML5Backend}>
            <DragDrop />
          </DndProvider>
        </DndProviderContainer>
      
      </Content>
    </Container>
  );
}