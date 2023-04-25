document.querySelector('.registro').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene que la página se refresque
  
    // Obtener los valores de los campos de formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Crear un objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
  
    // Configurar la solicitud AJAX
    xhr.open('POST', '/php/register.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    // Manejar la respuesta AJAX
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert('Usuario registrado exitosamente');
          // Redireccionar a la página de inicio de sesión
          window.location.href = '/login.html';
        } else {
          alert('Hubo un problema al registrar el usuario');
        }
      }
    };
  
    // Enviar la solicitud AJAX
    xhr.send('nombre=' + encodeURIComponent(nombre) + '&email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password) + '&confirm_password=' + encodeURIComponent(confirm_password));
  });
  