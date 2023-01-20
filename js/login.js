window.onload = function(){
    let enterButton = document.getElementById('enter_button')
    let emailField = document.getElementById('email_field')
    let passwordField = document.getElementById('password_field')
    let errorEmailText = document.getElementById('error_email_text')
    let errorPasswordText = document.getElementById('error_password_text')
    enterButton.onclick=function(){
        if (emailField.value == 'squbis@mail.ru'){
            emailField.style.color = '#2AA70B'
            emailField.style.backgroundColor = 'white'
            errorEmailText.style.visibility = 'hidden'

        }else{
            emailField.style.color = '#F42222'
            emailField.style.backgroundColor = '#FAE0E0'
            errorEmailText.style.visibility = 'visible'
        }
        if (passwordField.value == '123'){
            passwordField.style.color = '#2AA70B'
            passwordField.style.backgroundColor = 'white'
            errorPasswordText.style.visibility = 'hidden'

        }else{
            passwordField.style.color = '#F42222'
            passwordField.style.backgroundColor = '#FAE0E0'
            errorPasswordText.style.visibility = 'visible'
        }
            
    }
    
}
