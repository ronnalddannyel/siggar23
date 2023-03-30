<?php
$host = "sql818.main-hosting.eu";
$username = "u531117276_femarh";
$password = "Femarh@ci22";
$dbname = "u531117276_femarh";

$conn = mysqli_connect($host, $username, $password, $dbname);
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

?>
