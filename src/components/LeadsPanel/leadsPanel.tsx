import { Container, Content, Header, Table } from "./leadsPanel.style";
import logoImg from '../assets/logo.png'

export function LeadsPanel() {
  return (
    <Container>
      <Content>
        <Header>
        <img src={ logoImg } alt="EloGroup" />
        <p>Painel de Leads</p>
        </Header>
        <button>Novo Lead (+)</button>
        <Table>

        </Table>
      </Content>
    </Container>
  );
}