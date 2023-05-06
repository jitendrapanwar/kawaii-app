import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KawaiiApp from './kawaii/KawaiiApp';
import BankApp from './bank/BankApp';
import NavBar from './components/NavBar';
import './App.scss';

function App() {
  return (
    <div className="App" data-testid='app'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<KawaiiApp/>}/>
        <Route path="/bank" element={<BankApp/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
