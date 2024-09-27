import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Dodaj stilove za Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/catalog" className="nav-link">Catalog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
