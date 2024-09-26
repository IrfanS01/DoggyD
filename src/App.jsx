import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Catalog from './Catalog';
import DogDetails from './DogDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/dogs/:id" element={<DogDetails />} />
    </Routes>
  );
}

export default App;
