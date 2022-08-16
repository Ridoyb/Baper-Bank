
// step-1: Add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: get the email address from the input field.
    // Always remenber to use .value to get the input text from the input field.
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3: get pass
    //step-3.1: set id on html
    //step-3.2: get the element
    //step-3.3: get the value from element
    const passField = document.getElementById('user-pass');
    const Password = passField.value;

    //Danger: Do not use it for client side
    //step-4: verify email and password

    if (email === 'ridoy@gmail.com' && Password === 'ridoy@8730') {
        document.getElementById("btn-submit").onclick = function () {
            location.href = "bank.html";
        };
    }
    else {
        alert('Invalid Username or Password!!')
    }
})