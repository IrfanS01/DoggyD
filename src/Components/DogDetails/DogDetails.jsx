import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DogDetails.css';

function DogDetails() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/67222f6de41b4d34e44b4bba')
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
      <div className="dog-details-wrapper">
        <img src={dog.img} alt={dog.name} className="dog-image-large" />
        
        <div className="dog-info">
          <h1>{dog.name}</h1>
          <p><strong>Breed:</strong> {dog.breed}</p>
          <p><strong>Sex:</strong> {dog.sex}</p>
          {dog.age && <p><strong>Age:</strong> {dog.age} years</p>}
          {dog.chipNumber && <p><strong>Chip Number:</strong> {dog.chipNumber}</p>}
          {dog.owner && (
            <div className="owner-details">
              <h3>Owner Information</h3>
              <p><strong>Name:</strong> {dog.owner.name} {dog.owner.lastName}</p>
              <p><strong>Phone Number:</strong> {dog.owner.phoneNumber}</p>
            </div>
          )}

          {/* Dugme za povratak na katalog */}
          <button onClick={() => navigate('/catalog')} className="back-button">
            Back to Catalog
          </button>
        </div>
      </div>
    </div>
  );
}

export default DogDetails;
