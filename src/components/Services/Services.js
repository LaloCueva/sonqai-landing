// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-laptop',
      title: 'Aplicaciones Web',
      description: 'Fortalezas digitales construidas para durar, como las terrazas incaicas.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Apps',
      description: 'Aplicaciones que escalan montañas de requerimientos con elegancia.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Software a Medida',
      description: 'Soluciones precisas como los quipus, diseñadas exclusivamente para ti.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="quipu-line"></div>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;