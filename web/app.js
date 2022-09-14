// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    // const username = loginInput.value;
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

onLoginSubmit