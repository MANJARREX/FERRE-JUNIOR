document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Aquí puedes añadir la lógica para validar el usuario y la contraseña
    if (role === 'inventario' || role === 'vendedor' || role === 'contador') {
        // Redirigir a la página de menú
        window.location.href = 'menu.html';
    } else {
        // Mostrar un mensaje de error si no se selecciona un rol válido
        message.style.color = 'red';
        message.textContent = 'Seleccione un rol válido.';
    }
});
