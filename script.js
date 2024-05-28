document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Aquí puedes añadir la lógica para validar el usuario y la contraseña
    if (role === 'inventario') {
        // Redirigir a la página de inventario
        window.location.href = 'inventario.html';
    } else if (role === 'vendedor') {
        // Redirigir a la página de vendedor
        window.location.href = 'vendedor.html';
    } else if (role === 'contador') {
        // Redirigir a la página de contador (aquí puedes agregar la lógica correspondiente)
        message.style.color = 'red';
        message.textContent = 'Funcionalidad para contador en desarrollo.';
    } else {
        // Mostrar un mensaje de error si no se selecciona un rol válido
        message.style.color = 'red';
        message.textContent = 'Seleccione un rol válido.';
    }
});

// Función para mostrar el mensaje "EN PROCESO..."
function showProcessingMessage() {
    var processingMessage = document.getElementById('processing-message');
    processingMessage.style.display = 'block';
    setTimeout(function(){
        processingMessage.style.display = 'none';
    }, 2000); // El mensaje se ocultará automáticamente después de 2 segundos (2000 milisegundos)
}

// Función para mostrar el mensaje "REVISANDO STOCK..."
function showStockMessage() {
    var stockMessage = document.getElementById('stock-message');
    stockMessage.style.display = 'block';
    setTimeout(function(){
        stockMessage.style.display = 'none';
    }, 1500); // El mensaje se ocultará automáticamente después de 1.5 segundos (1500 milisegundos)
}
