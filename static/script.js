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



// ##### RUTAS #####

// Función para manejar clics en enlaces, botones y el logo
function handleLinkClick(e) {
    e.preventDefault();
    const target = this.dataset.target;

    // Si el target es "home", redirigir a la raíz
    if (target === 'home') {
        window.history.pushState({}, '', '/');
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    } else {
        // Desplazamiento suave para otras secciones
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
        // Actualizar URL sin #
        window.history.pushState({}, '', `/${target}`);
    }
}

// Aplicar a todos los enlaces del navbar, enlaces rápidos, botones y el logo
document.querySelectorAll('.nav-link, .list-unstyled a[data-target], button[data-target], .logo a[data-target]').forEach(element => {
    element.addEventListener('click', handleLinkClick);
});

// Manejar carga inicial y recargas
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');

    if (redirectPath) {
        // Eliminar la barra inicial si existe (ej: "/home" → "home")
        const cleanPath = redirectPath.replace(/^\//, '');
        const targetSection = document.getElementById(cleanPath);

        if (targetSection) {
            targetSection.scrollIntoView();
            // Limpiar la URL después del scroll
            window.history.replaceState({}, '', `/${cleanPath}`);
        }
    } else if (window.location.pathname === '/') {
        // Si la URL es la raíz, desplazar a la sección "home"
        document.getElementById('home').scrollIntoView();
    }
});

// Manejar navegación con botones atrás/adelante
window.addEventListener('popstate', () => {
    const path = window.location.pathname.replace('/', '');
    const section = document.getElementById(path);
    if (section) section.scrollIntoView();
});