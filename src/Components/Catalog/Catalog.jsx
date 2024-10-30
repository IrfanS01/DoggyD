import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

function Catalog() {
  const [dogs, setDogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/67222f6de41b4d34e44b4bba')
      .then(response => response.json())
      .then(data => {
        setDogs(data.record); // Postavljamo sve pse u stanje "dogs"
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load dogs data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Funkcija za pretragu i filtriranje
  const filteredDogs = dogs.filter((dog) => {
    const matchesSearchTerm = dog.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = selectedBreed === '' || dog.breed === selectedBreed;
    return matchesSearchTerm && matchesBreed;
  });

  // Dobijamo sve jedinstvene rase pasa iz podataka
  const uniqueBreeds = [...new Set(dogs.map(dog => dog.breed))];

  return (
    <div className="catalog-container">
      <h1>Our Dogs</h1>

      <div className="intro-text">
        <h2>Welcome to Our Dog Catalog!</h2>
        <p>Here you can explore all our beloved dogs, search by their name, or filter them by breed. Find your favorite!</p>
      </div>

      {/* Input za pretragu pasa po imenu */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Dropdown za filtriranje po rasi */}
      <select
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
        className="breed-select"
      >
        <option value="">All Breeds</option>
        {uniqueBreeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>

      <div className="dog-grid">
        {filteredDogs.map(dog => (
          <div className="dog-card" key={dog.name}>
            <img src={dog.img} alt={dog.name} className="dog-image" />
            <h2>{dog.name}</h2>
            <p>{dog.breed}</p>
            <Link to={`/dogs/${dog.name}`} className="view-more-button">View More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
