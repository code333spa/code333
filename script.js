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


// Actualiza automáticamente el año en el footer
document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});


// Script que quita el # de la URL al hacer clic en un enlace del navbar
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los enlaces del navbar
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Evita el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtiene el destino del enlace (sin el #)
            const target = this.getAttribute('data-target');

            // Desplaza la página hasta la sección correspondiente
            document.getElementById(target).scrollIntoView({
                behavior: 'smooth' // Desplazamiento suave
            });

            // Actualiza la URL sin el #
            history.pushState(null, null, `/${target}`);
        });
    });
});

