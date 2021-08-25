import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/header';
import { NewLeadModal } from './components/NewLeadModal/newLeadModal';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

export function App() {
  const [isNewLeadModalOpen, setNewLeadModalOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <NewLeadModal
          isOpen={isNewLeadModalOpen}
          onRequestClose={()=>setNewLeadModalOpen(false)}
        />
        <Routes />
      </BrowserRouter>
    </div>
  );
}