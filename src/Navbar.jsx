import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link koji vodi na početnu stranicu */}
        </li>
        <li>
          <Link to="/catalog">Catalog</Link> {/* Link koji vodi na stranicu kataloga */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
