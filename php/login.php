<?php

// Iniciar sesión de PHP
session_start();

// Obtener la información del formulario
$email = $_POST['email'];
$password = $_POST['password'];

// Abrir la conexión a la base de datos SQLite
$db = sqlite_open('parkeate.db');

// Consulta SQL para buscar el usuario en la base de datos
$sql = "SELECT * FROM usuarios WHERE email = '$email' AND password = '$password'";

// Ejecutar la consulta y obtener el resultado
$resultado = sqlite_query($db, $sql);

// Verificar si se encontró el usuario
if (sqlite_num_rows($resultado) == 1) {
  // Iniciar sesión del usuario
  $_SESSION['email'] = $email;

  // Redirigir al usuario a la página de inicio después de iniciar sesión
  header("Location: index.php");
} else {
  // Si no se encuentra el usuario, mostrar un mensaje de error y redirigir de nuevo a la página de inicio de sesión
  echo "Usuario o contraseña incorrectos.";
  header("Refresh: 2; URL=login.html");
}

// Cerrar la conexión a la base de datos SQLite
sqlite_close($db);

?>
