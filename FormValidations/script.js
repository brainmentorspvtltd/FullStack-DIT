window.addEventListener("load", initEvents);

function initEvents() {
    let textBox = document.querySelector(".box");
    textBox.addEventListener("blur", validateUsername);
    
    let textBox2 = document.querySelector(".box-2");
    textBox2.addEventListener("change", checkUsername);

    let passwordBox = document.querySelector(".box-3");
    passwordBox.addEventListener("keyup", checkPassword);
}

function validateUsername() {
    // console.log("Blur Event Triggered...");
    let username = this.value;
    let spanBox = document.querySelector(".err");
    if(username == "") {
        this.style.border = "1px solid red";
        spanBox.innerHTML = "Please enter your name";
    }
    else {
        this.style.border = "1px solid green";
        spanBox.innerHTML = "";
    }
}

function checkUsername() {
    console.log("Change Event Triggered...");
}

function checkPassword() {
    let pwd = this.value;
    let span = document.querySelector('.err-2');
    if(pwd.length > 0 && pwd.length < 5) {
        span.innerHTML = "Weak Password...";
    }
    else if(pwd.length >= 5 && pwd.length < 8) {
        span.innerHTML = "Average Password";
    }
    else {
        span.innerHTML = "Strong Password";
    }

    if(pwd.length == 0) {
        span.innerHTML = "Please fill this field...";
    }
}