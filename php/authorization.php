<?php
session_start();
include("db_connect.php");
$login = $_POST['email'];
$password = $_POST['password'];
$md5_password = md5($password);
$query = mysqli_query($db, "SELECT * FROM `users` WHERE `email` = '{$email}' AND `password` = '{$md5_password}'");
if (mysqli_num_rows($query) == 1) {
    $_SESSION['user'] = ['nick' => $email];
    header("Location: ../html/profile.html");
} else {
    echo("Ошибка: данные введены неправильно.");
}