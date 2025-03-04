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
