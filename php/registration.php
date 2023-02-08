<?php
session_start();
include("db_connect.php")
$login = $_POST['email'];
$password = $_POST['password'];
$md5_password = md5($password);
$query = mysqli_query($db, "SELECT * FROM `users` WHERE `email` = '{$email}'");
if (mysqli_num_rows($query) == 0) {
    $_SESSION['user'] = ['nick' => $email];
    mysqli_query($db, "INSERT INTO `users` (`email`, `password`) VALUES ('{$email}', '{$md5_password}')");
    header("Location: ../html/profile.html");
} else {
    echo("Ошибка: данный пользователь уже существует.");
}