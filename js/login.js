// Obtener el formulario de inicio de sesión
const loginForm = document.querySelector('.login-form');

// Escuchar el evento submit del formulario
loginForm.addEventListener('submit', function(event) {
  // Prevenir el envío del formulario
  event.preventDefault();

  // Obtener los datos del formulario
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Hacer una petición AJAX al archivo PHP que maneja el inicio de sesión
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'login.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Si la petición es exitosa, redirigir al usuario a la página de inicio
      window.location.href = 'index.php';
    } else {
      // Si la petición falla, mostrar un mensaje de error
      alert('Usuario o contraseña incorrectos.');
    }
  };
  xhr.send(`email=${email}&password=${password}`);
});
