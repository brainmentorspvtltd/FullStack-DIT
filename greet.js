// let html load first
window.addEventListener("load", function() {
    document.querySelector("#btn").addEventListener("click", greet);
});

function greet() {
    console.log("Function Called...");
    let username = document.querySelector("#box").value;
    document.querySelector("#output").innerHTML = username;
}