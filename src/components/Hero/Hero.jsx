  // src/components/Hero.js
  import React, { useEffect } from 'react';
  import './Hero.css';

  const Hero = () => {
    useEffect(() => {
      // Smooth scrolling para los enlaces
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    }, []);

    return (
      <section className="hero" id="hero">
        <div className="container hero-content">
          <h2>Tecnología que nace desde el corazón de nuestras raíces</h2>
          <p>Para los que nunca se rindieron. Para los que laten fuerte. Construimos imperios digitales con la sabiduría de los Andes.</p>
          <a href="#contact" className="btn hero-btn">Comienza tu viaje</a>
        </div>
        <div className="hero-mountain"></div>
      </section>
    );
  };

  export default Hero;