import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Catalog() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758')
      .then(response => response.json())
      .then(data => {
        console.log(data.record);
        setDogs(data.record);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err) => {
        setError('Failed to load dogs data');
        setLoading(false); // Stop loading in case of error
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Our Dogs</h1>
      <ul>
  {dogs.map(dog => (
    <li key={dog.id || dog.name}>  {/* Adding a fallback to ensure a unique key */}
      <Link to={`/dog/${dog.id}`}>{dog.name}</Link>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Catalog;
