import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DogDetails() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758')
      .then(response => response.json())
      .then(data => {
        const foundDog = data.record.find(d => d.name === id);
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
      <p>Breed: {dog.breed}</p>
      <p>Sex: {dog.sex}</p>
      <img src={dog.img} alt={dog.name} />

      {/* Dodatne informacije */}
      {dog.age && <p>Age: {dog.age}</p>}
      {dog.chipNumber && <p>Chip Number: {dog.chipNumber}</p>}
      
      {/* Informacije o vlasniku */}
      {dog.owner && (
        <div>
          <h3>Owner Information</h3>
          <p>Owner's Name: {dog.owner.name} {dog.owner.lastName}</p>
          <p>Phone Number: {dog.owner.phoneNumber}</p>
        </div>
      )}
    </div>
  );
}

export default DogDetails;
