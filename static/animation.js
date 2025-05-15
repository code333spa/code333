document.addEventListener("DOMContentLoaded", function () {
    const toolLogos = document.querySelectorAll(".tool-logo");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `slideInFromLeft 0.5s ease-out forwards ${index * 0.2}s`;
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, { threshold: 0.2 });

    toolLogos.forEach(logo => observer.observe(logo));
});

// animación titulo banner
document.addEventListener('DOMContentLoaded', () => {
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');

    // Aplica la animación a la primera línea
    line1.style.animation = 'slideIn 0.8s ease-out forwards';

    // Cuando termine la primera, dispara la segunda
    line1.addEventListener('animationend', () => {
      line2.style.animation = 'slideIn 0.8s ease-out forwards';
    });
  });