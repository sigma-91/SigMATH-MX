// Inicialización del efecto de texto animado
document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });

    // Typed.js para texto en movimiento
    const typed = new Typed('#typed-element', {
        strings: ['MATEMATICAS','álgebra','geometria','trigonometria','cálculo','probabilidad','estadística'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        showCursor: true
    });

    // Menú móvil
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Botón Scroll to Top
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // LocalStorage para formularios (simulado)
    const formFields = document.querySelectorAll('input, textarea');
    formFields.forEach(field => {
        // Recuperar datos guardados si existen
        const savedValue = localStorage.getItem(`sigmath_${field.id}`);
        if (savedValue) {
            field.value = savedValue;
        }

        // Guardar datos al cambiar
        field.addEventListener('change', function () {
            localStorage.setItem(`sigmath_${field.id}`, field.value);
        });
    });
});