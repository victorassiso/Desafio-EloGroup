import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../assets/logo.png';
import { CheckBoxTable, Content, Text, Header } from './newLeadModal.style';

interface NewLeadModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Lead {
  name: string,
  telNumber: string,
  email: string,
}


export function NewLeadModal({isOpen, onRequestClose}: NewLeadModalProps){
  const [name, setName] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const [email, setEmail] = useState('');
  
  const newLead = {
    name,
    telNumber,
    email
  }
  
  function updateLocalStorageLeads(props: Lead){
    const localStorageLeads = localStorage.getItem('leads');
    
    const leads = localStorageLeads == null
      ? [newLead]
      : [...JSON.parse(localStorageLeads), newLead]
    
    localStorage.setItem('leads', JSON.stringify(leads))
  }

  function handleCreateNewLead(event: FormEvent){
    
    event.preventDefault();
    
    updateLocalStorageLeads(newLead);

    //Reiniciando dados após submit
    setName('');
    setTelNumber('');
    setEmail('');
    onRequestClose();
  }


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
      <Content onSubmit={handleCreateNewLead}>
        <Text>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            />

          <label htmlFor="telephone">Telefone</label>
          <input
            type="text"
            name="telephone"
            value={telNumber}
            onChange={event => setTelNumber(event.target.value)}
            />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            />
        </Text>
        <CheckBoxTable onSubmit={()=>console.log('oi')}>
          <p>Oportunidades</p>
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" id="all" name="RPA"/>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" id="RPA" name="RPA"/>
                </td>
                <td>
                  <label htmlFor="RPA">RPA</label>
                </td>
              </tr>

              <tr>
                <td>
                <input type="checkbox" id="Produto Digital" name="Produto Digital"/>
                </td>
                <td>
                  <label htmlFor="Produto Digital">Produto Digital</label>
                </td>
              </tr>

              <tr>
                <td>
                <input type="checkbox" id="Analytics" name="Analytics"/>
                </td>
                <td>
                  <label htmlFor="Analytics">Analytics</label>
                </td>
              </tr>
                
              <tr>
                <td>
                <input type="checkbox" id="BPM" name="BPM"/>
                </td>
                <td>
                  <label htmlFor="BPM">BPM</label>
                </td>
              </tr>
            </tbody>
          </table>
          <button type='submit'>
            Salvar
          </button>
        </CheckBoxTable>
      </Content>
    </Modal>
  );
}