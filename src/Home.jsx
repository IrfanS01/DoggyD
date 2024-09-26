import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importuj stilove

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Doggy Daycare!</h1>
        <p className="home-description">Your favorite place to take care of your dogs.</p>
        <Link to="/catalog" className="home-button">Go to Catalog</Link>
      </div>
    </div>
  );
}

export default Home;

