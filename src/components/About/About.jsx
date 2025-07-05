// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">¿Qué es Sonqai?</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Nace desde una necesidad profunda: la de tender la mano</h3>
            <p>No a las grandes corporaciones, sino al emprendedor real —aquel que no siguió una línea de carrera tradicional, que no estudió en las mejores universidades, pero que se levanta cada día con el corazón encendido y la voluntad intacta.</p>
            <p>Es una empresa pensada para quienes lo dieron todo sin tenerlo todo. Sonqai no es solo tecnología. Es humanidad. Es para el que fue subestimado, para el que lucha en silencio.</p>
            
            <div className="about-values">
              <div className="value-card">
                <i className="fas fa-heart"></i>
                <h4>Amor</h4>
                <p>Pasíon en cada proyecto</p>
              </div>
              <div className="value-card">
                <i className="fas fa-mountain"></i>
                <h4>Raíces</h4>
                <p>Conectados con nuestra tierra</p>
              </div>
              <div className="value-card">
                <i className="fas fa-users"></i>
                <h4>Familia</h4>
                <p>Creciendo juntos</p>
              </div>
              <div className="value-card">
                <i className="fas fa-laptop-code"></i>
                <h4>Tecnología</h4>
                <p>Herramientas para el futuro</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            {/* Espacio para imagen representativa */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;