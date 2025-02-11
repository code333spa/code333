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


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const target = this.getAttribute('data-target');
            const targetElement = document.getElementById(target);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Cambia la URL sin # pero manteniendo el estado
                history.pushState({ section: target }, "", `/${target}`);
            }
        });
    });

    // Maneja cambios en la URL para navegar correctamente
    window.addEventListener('popstate', function (event) {
        const section = event.state?.section;
        if (section) {
            const targetElement = document.getElementById(section);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });

    // Si la página se carga con una URL sin #, mueve la vista a la sección correcta
    const path = window.location.pathname.substring(1);
    if (path) {
        const targetElement = document.getElementById(path);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});
