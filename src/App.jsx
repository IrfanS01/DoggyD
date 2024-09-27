import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Catalog from './Components/Catalog/Catalog';
import DogDetails from './Components/DogDetails/DogDetails';
import Navbar from './Components/Navbar/Navbar'; // Importovanje Navbar-a

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

