// src/components/Philosophy.js
import React, { useEffect } from 'react';
import './Philosophy.css';

const Philosophy = () => {
  useEffect(() => {
    // Animación de llamas
    const createLlama = () => {
      const container = document.getElementById('llamas-container');
      if (!container) return;
      
      const llama = document.createElement('div');
      llama.className = 'llama-particle';
      llama.innerHTML = '🦙';
      
      // Posición aleatoria
      const leftPos = Math.random() * 100;
      llama.style.left = `${leftPos}%`;
      
      // Tamaño aleatorio
      const size = Math.random() * 2 + 1;
      llama.style.fontSize = `${size}em`;
      
      // Duración aleatoria
      const duration = Math.random() * 5 + 3;
      llama.style.animationDuration = `${duration}s`;
      
      container.appendChild(llama);
      
      // Eliminar después de la animación
      setTimeout(() => {
        llama.remove();
      }, duration * 1000);
    };
    
    // Crear llamas continuamente
    const llamaInterval = setInterval(createLlama, 500);
    
    // Crear llamas iniciales
    for (let i = 0; i < 15; i++) {
      setTimeout(createLlama, i * 300);
    }
    
    return () => clearInterval(llamaInterval);
  }, []);

  return (
    <section className="philosophy" id="philosophy">
      <div className="container">
        <h2 className="section-title">Nuestra Filosofía</h2>
        <div className="philosophy-content">
          <p>Inspirado en las raíces del Perú, en el espíritu del cholo trabajador, del que madruga mientras el sol aún duerme, del que trabaja hasta que el cielo se apaga.</p>
          <p>En Sonqai vive el Ande, pero también la Costa y la Selva. Vive el legado moche, la energía ancestral de las líneas de Nazca, y la fuerza de un pueblo que nunca se rinde.</p>
          <p>Aunque no hablo quechua, lo siento. Porque el quechua no se aprende: se vibra. Y Sonqai vibra con esa energía: la de hablar desde el corazón.</p>
          <p>"Sonqai" significa corazón. Pero no es solo eso: es corazón con inteligencia. Es la unión de la emoción y la tecnología, el puente entre la sabiduría ancestral y el futuro digital.</p>
        </div>
      </div>
      <div className="llamas-bg" id="llamas-container"></div>
    </section>
  );
};

export default Philosophy;