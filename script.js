const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.style.display = "none";
    passwordError.style.display = "none";

    let valid = true;

    if(email === ""){
        emailError.innerHTML = "⚠ Please enter your email.";
        emailError.style.display = "block";
        valid = false;
    }

    if(password.length < 8){
        passwordError.innerHTML = "⚠ Password must be at least 8 characters.";
        passwordError.style.display = "block";
        valid = false;
    }

    if(valid){
        alert("Login Successful");
    }

});const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.style.display = "none";
    passwordError.style.display = "none";

    let valid = true;

    if(email === ""){
        emailError.innerHTML = "⚠ Please enter your email.";
        emailError.style.display = "block";
        valid = false;
    }

    if(password.length < 8){
        passwordError.innerHTML = "⚠ Password must be at least 8 characters.";
        passwordError.style.display = "block";
        valid = false;
    }

    if(valid){
        alert("Login Successful");
    }

});