// src/components/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">¿Qué es Sonqai?</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Potencia tu Ingenio. Tecnología con Corazón.</h3>

            <p>
              Sonqai nace de una convicción profunda: la tecnología más poderosa es aquella que reconoce y potencia el espíritu humano inquebrantable.
            </p>

            <p>
              Nos dirigimos al emprendedor auténtico, al que forja su camino con resiliencia y visión, más que con credenciales. Al que se levanta cada día con la voluntad intacta para construir lo extraordinario desde lo esencial.
            </p>

            <p>
              Somos la plataforma para quienes lo dan todo sin haberlo tenido todo. Para el talento subestimado, la voz que resiste en silencio, la mente brillante que busca su impacto. En Sonqai vemos potencial donde otros ven límites.
            </p>

            <p>
              Inspirados por una fuerza ancestral y un espíritu que transforma desafíos en victorias, llevamos en nuestro ADN la energía de una tierra vibrante y la sabiduría de quienes nunca se rinden. Hablamos desde el corazón, con claridad y determinación que nacen de lo más profundo.
            </p>

            <p>
              ¿Por qué "Sonqai"? Porque "Sonqay" significa corazón en quechua. Pero para nosotros, Sonqai es la unión definitiva: <em>Corazón + Inteligencia</em>. Es la fusión entre la pasión humana, la resiliencia innata y la potencia de la tecnología avanzada. Es el puente entre el ingenio profundo y la innovación digital.
            </p>

            <h4>Nuestra Esencia:</h4>
            <ul className="essence-list">
              <li>Empoderamos al creador, al luchador, al visionario no convencional.</li>
              <li>Conectamos talento puro con oportunidades reales y herramientas transformadoras.</li>
              <li>Democratizamos el acceso al poder de la tecnología inteligente.</li>
              <li>Impulsamos soluciones donde la inteligencia artificial amplifica la creatividad y la determinación humanas.</li>
            </ul>
          </div>
          <div className="about-image">
            {/* Puedes colocar una imagen o gráfico aquí si deseas */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
