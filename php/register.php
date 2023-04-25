<?php

// Conectarse a la base de datos
$db = new SQLite3('parkeate.db');

// Verificar si se recibió el formulario de registro
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  
  // Obtener los datos del formulario
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  
  // Insertar los datos en la tabla de usuarios
  $query = "INSERT INTO usuarios (nombre, email, password) VALUES (:nombre, :email, :password)";
  $stmt = $db->prepare($query);
  $stmt->bindValue(':nombre', $nombre, SQLITE3_TEXT);
  $stmt->bindValue(':email', $email, SQLITE3_TEXT);
  $stmt->bindValue(':password', $password, SQLITE3_TEXT);
  
  // Ejecutar la consulta
  $result = $stmt->execute();
  
  // Verificar si se insertaron los datos correctamente
  if ($result) {
    echo "¡Registro exitoso!";
  } else {
    echo "Error al registrar los datos.";
  }
  
}

?>
