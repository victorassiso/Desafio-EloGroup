import { useEffect } from 'react';
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
  const [all, setAll] = useState(false);
  const [RPA, setRPA] = useState(false);
  const [digitalProduct, setDigitalProduct] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [BPM, setBPM] = useState(false);
  let opportunities: string[] = [];

  useEffect(()=>{
    if (all){
    setRPA(true);
    setAnalytics(true);
    setDigitalProduct(true);
    setBPM(true);
    }
    if (!all){
      setRPA(false);
      setAnalytics(false);
      setDigitalProduct(false);
      setBPM(false);
    }
  }, [all]);

  function  createOpportunities(){
    if (RPA)
      opportunities = [...opportunities, "RPA"]
    if (digitalProduct)
      opportunities = [...opportunities, "Produto Digital"]
    if (analytics)
      opportunities = [...opportunities, "Analytics"]
    if (BPM)
      opportunities = [...opportunities, "BPM"]

    console.log(RPA)
    console.log(opportunities)
  }
  
  function updateLocalStorageLeads(props: Lead){
    const localStorageLeads = localStorage.getItem('leads');
    
    const leads = localStorageLeads == null
      ? [props]
      : [...JSON.parse(localStorageLeads), props]
    
    localStorage.setItem('leads', JSON.stringify(leads))
  }

  function handleCreateNewLead(event: FormEvent){
    
    event.preventDefault();
    
    createOpportunities();
    const newLead = {
      name,
      telNumber,
      email,
      opportunities,
    }

    updateLocalStorageLeads(newLead);

    //Reiniciando dados após submit
    setName('');
    setTelNumber('');
    setEmail('');
    setAll(false);
    setRPA(false);
    setAnalytics(false);
    setDigitalProduct(false);
    setBPM(false);
    opportunities = [];
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
            required
            value={name}
            onChange={event => setName(event.target.value)}
            />

          <label htmlFor="telephone">Telefone</label>
          <input
            type="text"
            name="telephone"
            required
            value={telNumber}
            onChange={event => setTelNumber(event.target.value)}
            />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
            />
        </Text>
        <CheckBoxTable>
          <p>Oportunidades</p>
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    id="all"
                    name="all"
                    checked={all}
                    onChange={() => all ? setAll(false) : setAll(true)}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="RPA"
                    name="RPA"
                    checked={RPA}
                    onChange={() => RPA ? setRPA(false) : setRPA(true)}
                  />
                </td>
                <td>
                  <label htmlFor="RPA">RPA</label>
                </td>
              </tr>

              <tr>
                <td>
                <input
                  type="checkbox"
                  id="Produto Digital"
                  name="Produto Digital"
                  checked={digitalProduct}
                  onChange={() => digitalProduct ? setDigitalProduct(false) : setDigitalProduct(true)}
                />
                </td>
                <td>
                  <label htmlFor="Produto Digital">Produto Digital</label>
                </td>
              </tr>

              <tr>
                <td>
                <input
                  type="checkbox"
                  id="Analytics"
                  name="Analytics"
                  checked={analytics}
                  onChange={() => analytics ? setAnalytics(false) : setAnalytics(true)}
                />
                </td>
                <td>
                  <label htmlFor="Analytics">Analytics</label>
                </td>
              </tr>
                
              <tr>
                <td>
                <input
                  type="checkbox"
                  id="BPM"
                  name="BPM"
                  checked={BPM}
                  onChange={() => BPM ? setBPM(false) : setBPM(true)}  
                />
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