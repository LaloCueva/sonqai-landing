// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">Sonqai</div>
            <p>Tecnología con corazón andino. Construyendo imperios digitales para los que nunca se rinden.</p>
            <p>contacto@sonqai.tech<br />Cusco, Perú</p>
          </div>
          <div className="footer-links">
            <h3>Enlaces</h3>
            <ul>
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#about">Qué es Sonqai</a></li>
              <li><a href="#philosophy">Filosofía</a></li>
              <li><a href="#services">Servicios</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Servicios</h3>
            <ul>
              <li><a href="#">Aplicaciones Web</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">Software Personalizado</a></li>
              <li><a href="#">Consultoría</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Sonqai Tech. Todos los derechos reservados. Honrando el pasado, construyendo el futuro.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;