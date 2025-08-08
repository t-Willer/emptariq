import { Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Contato from './paginas/Contato';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
