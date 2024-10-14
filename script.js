const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}

// Mostrar el menú de navegación al hacer clic en el botón de hamburguesa
const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('#navbarNav');
    navbarCollapse.classList.toggle('show'); // Alterna la clase 'show' para mostrar/ocultar el menú
});

// Para ocultar el menú al seleccionar un enlace en móviles
const navbarNavLinks = document.querySelectorAll('.navbar-nav a');

navbarNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('show');
        }
    });
});