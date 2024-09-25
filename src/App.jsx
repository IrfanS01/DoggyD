import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Catalog from './Catalog.jsx';
import DogDetails from './DogDetails.jsx';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/dog/:id" element={<DogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
