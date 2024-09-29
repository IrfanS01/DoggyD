import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importuj stilove

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Doggy Daycare!</h1>
        <p className="home-description">Your favorite place to take care of your dogs.</p>
        
      </div>

      {/* Sekcija s opisom usluga */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Daycare</h3>
            <p>We take care of your dog while you're away, ensuring they are happy and healthy!</p>
          </div>
          <div className="service-item">
            <h3>Dog Walking</h3>
            <p>Our team takes your dog for daily walks to keep them fit and energetic.</p>
          </div>
          <div className="service-item">
            <h3>Grooming</h3>
            <p>We offer professional grooming services to keep your dog looking their best.</p>
          </div>
        </div>
      </section>

      {/* Testimonijali */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"The best daycare for my dog! He always comes back happy."</p>
          <span>- Damir Mujanovic</span>
        </div>
        <div className="testimonial">
          <p>"Fantastic grooming services, my dog looks amazing!"</p>
          <span>- Samke Serifovic</span>
        </div>
      </section>

      {/* Dugme za kontakt */}
      <section className="contact-section">
        <Link to="/contact" className="contact-button">Contact Us</Link>
      </section>
    </div>
  );
}

export default Home;


