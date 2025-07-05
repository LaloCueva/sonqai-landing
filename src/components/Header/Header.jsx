// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <div className="container header-container">
        <div className="logo">
          <div className="logo-circle">S</div>
          <h1>Sonqai</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#about">Qué es Sonqai</a></li>
            <li><a href="#philosophy">Filosofía</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;