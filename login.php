<?php
session_start();
include('./db.php');

if(empty($_POST['usuario']) || empty($_POST['senha'])) {
	header('Location: index.php');
	exit();
}

$usuario = mysqli_real_escape_string($conn, $_POST['usuario']);
$senha = mysqli_real_escape_string($conn, $_POST['senha']);

$query = "select usuario_id, Cpf from usuarios_interno where Cpf = '$usuario' and senha = '$senha'"; 



$result = mysqli_query($conn, $query);
$row = mysqli_num_rows($result);


if($row == 1) {
	$_SESSION['usuario'] = $usuario;
	header('Location: ./map.php');
	exit();

} else {
	$_SESSION['nao_autenticado'] = true;
	header('Location: index.php');
	exit();
}





