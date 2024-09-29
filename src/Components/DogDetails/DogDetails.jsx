import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DogDetails.css'; // Ispravan naziv CSS-a

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
    <div className="dog-details-container">
      <div className="dog-details-card">
        <img src={dog.img} alt={dog.name} className="dog-image" />
        <h1>{dog.name}</h1>
        <p><strong>Breed:</strong> {dog.breed}</p>
        <p><strong>Sex:</strong> {dog.sex}</p>
        {dog.age && <p><strong>Age:</strong> {dog.age} years</p>}
        {dog.chipNumber && <p><strong>Chip Number:</strong> {dog.chipNumber}</p>}
      </div>

      {dog.owner && (
        <div className="owner-details-card">
          <h3>Owner Information</h3>
          <p><strong>Name:</strong> {dog.owner.name} {dog.owner.lastName}</p>
          <p><strong>Phone Number:</strong> {dog.owner.phoneNumber}</p>
        </div>
      )}
    </div>
  );
}

export default DogDetails;
