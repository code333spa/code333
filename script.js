// Script de validación de formulario usando Bootstrap

document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos el formulario y los campos
    const form = document.querySelector('form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('telefono');
    const messageField = document.getElementById('message');
    const empresaField = document.getElementById('empresa');

    // Agregamos el evento submit al formulario
    form.addEventListener('submit', function (event) {
        // Prevenir el envío por defecto
        event.preventDefault();

        // Realizamos las validaciones
        let valid = true;

        // Limpiar los mensajes de error anteriores
        clearValidationMessages();

        // Validar el campo de nombre
        if (nameField.value.trim().length < 3) {
            showError(nameField, 'El nombre debe tener al menos 3 caracteres.');
            valid = false;
        }

        // Validar el correo electrónico
        if (!isValidEmail(emailField.value)) {
            showError(emailField, 'Por favor, ingrese un correo electrónico válido.');
            valid = false;
        }

        // Validar el teléfono (solo números y longitud mínima de 9 dígitos)
        if (!isValidPhone(phoneField.value)) {
            showError(phoneField, 'El teléfono debe contener solo números y tener al menos 9 dígitos.');
            valid = false;
        }

        // Validar el campo del mensaje
        if (messageField.value.trim().length < 10) {
            showError(messageField, 'El mensaje debe tener al menos 10 caracteres.');
            valid = false;
        }

        // Validar el campo de empresa (opcional, pero si se completa debe tener al menos 3 caracteres)
        if (empresaField.value.trim().length > 0 && empresaField.value.trim().length < 3) {
            showError(empresaField, 'El nombre de la empresa debe tener al menos 3 caracteres si es proporcionado.');
            valid = false;
        }

        // Si todo es válido, enviar el formulario
        if (valid) {
            form.submit();
        }
    });

    // Función para mostrar el error usando clases de Bootstrap
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        feedback.innerText = message;
        input.classList.add('is-invalid');  // Agregamos clase para marcar el input como inválido
        formGroup.appendChild(feedback);
    }

    // Función para limpiar los mensajes de error anteriores
    function clearValidationMessages() {
        const invalidInputs = document.querySelectorAll('.is-invalid');
        invalidInputs.forEach(input => input.classList.remove('is-invalid'));

        const feedbackMessages = document.querySelectorAll('.invalid-feedback');
        feedbackMessages.forEach(feedback => feedback.remove());
    }

    // Función para validar el correo electrónico
    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    // Función para validar el número de teléfono (solo números y longitud mínima de 9 dígitos)
    function isValidPhone(phone) {
        const re = /^[0-9]{9,}$/;
        return re.test(phone);
    }
});

