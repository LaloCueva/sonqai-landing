// src/App.jsx
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Philosophy from './components/Philosophy/Philosophy';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    // Efecto de scroll para el header
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Philosophy />
      <Services />
      <Footer />
    </div>
  );
}

export default App;