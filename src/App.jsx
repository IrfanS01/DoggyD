import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Catalog from './Catalog';
import DogDetails from './DogDetails';
import Navbar from './Navbar'; // Importovanje Navbar-a

function App() {
  return (
    <>
      <Navbar /> {/* Navigaciona traka će biti prikazana na svim stranicama */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/dogs/:id" element={<DogDetails />} />
      </Routes>
    </>
  );
}

export default App;

