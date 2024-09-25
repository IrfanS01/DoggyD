import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DogDetails() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const foundDog = data.record.find(d => d.id === parseInt(id));
        if (foundDog) {
          setDog(foundDog);
        } else {
          setError('Dog not found');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load dog details');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <p>Description: {dog.description}</p>
    </div>
  );
}

export default DogDetails;
