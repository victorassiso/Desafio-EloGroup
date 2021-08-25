import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/header';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

export function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}