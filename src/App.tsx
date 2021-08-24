import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}