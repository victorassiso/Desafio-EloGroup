import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/header';
import { Routes } from './routes';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}