import Modal from 'react-modal';
import logoImg from '../assets/logo.png';
import { CheckBoxTable, Content, Form, Header } from './newLeadModal.style';

interface NewLeadModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewLeadModal({isOpen, onRequestClose}: NewLeadModalProps){

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="NewTransactionModalOverlay"
      className="NewTransactionModalContent"
    >
      <Header>
        <img src={ logoImg } alt="EloGroup" />
        <p>Painel de Leads</p>
      </Header>
      <Content>
        <Form>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name"/>

          <label htmlFor="telephone">Telefone</label>
          <input type="text" name="telephone"/>

          <label htmlFor="email">Email</label>
          <input type="text" name="email"/>
        </Form>
        <CheckBoxTable>
          <p>Oportunidades</p>
          <table>
            <h1>Tabela</h1>
          </table>
          <button type='submit'>
            Salvar
          </button>
        </CheckBoxTable>
      </Content>
    </Modal>
  );
}