// scripts.js

// Carga diferida de recursos no críticos
function loadNonCriticalResources() {
    // Cargar Font Awesome
    const faCSS = document.createElement('link');
    faCSS.rel = 'stylesheet';
    faCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(faCSS);
}

// Cargar después de que la página esté lista
if (window.requestIdleCallback) {
    window.requestIdleCallback(loadNonCriticalResources);
} else {
    window.addEventListener('load', loadNonCriticalResources);
}

// Efecto de scroll para el header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animación al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate');
    
    // Usar Intersection Observer para animar al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Enfocar el contenido principal para accesibilidad
    const mainContent = document.querySelector('main') || document.querySelector('.hero');
    if (mainContent) {
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus();
    }
});

// Manejo de clics en navegación para desplazamiento suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});