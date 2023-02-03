window.onload = function () {
  let passwordField = document.getElementById("password_field");
  let confirmPasswordField = document.getElementById("confirm_password_field");
  let regButton = document.getElementById("reg_button");
  let confirmPasswordError = document.getElementById("confirm_password_error");

  regButton.onclick = function () {
    if (passwordField.value != confirmPasswordField.value) {
      confirmPasswordError.style.visibility = "visible";
    } else {
      confirmPasswordError.style.visibility = "hidden";
    }
  };
};
