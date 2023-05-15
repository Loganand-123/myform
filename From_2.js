const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

var text=document.getElementById("getValue");
var sub=document.getElementById("submitbtn");

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});
function checkInputs() {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();
    
    if (usernamevalue === '') {
        setErrorFor(username, 'username cannot be blank');

    } else {
        setSuccessFor(username);

    }

    if (emailvalue === '') {
        setErrorFor(email, 'Email cannot be blank');

    } else if (!isEmail(emailvalue)) {
        setErrorFor(email, 'Not a valid email');

    } else {
        setSuccessFor(email);


    }

    if (passwordvalue === '') {
        setErrorFor(password, 'password cannot be blank');

    } else {
        setSuccessFor(password);

    }

    if (password2value === '') {
        setErrorFor(password2, 'password2 cannot be blank');

    }
    else if (passwordvalue !== password2value) {
        setErrorFor(password2, 'password does not match');

    }
    else {
        setSuccessFor(password2);

    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
    popup.classList.remove("open-popup");
    text.innerHTML="";
    sub.style.display="block";
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    sub.style.display="none";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(email);
}