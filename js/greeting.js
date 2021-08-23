const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  //string만 있는 변수는 대문자로 표기하는 게 관습
const USERNAME_KEY = "username";    //string만 있는 변수는 이렇게 변수로 저장해두는 게 에러가 덜 남

function onLoginSubmit(event) {
    event.preventDefault();    //submit을 하게되면 브라우저는 자동으로 새로고침을 하게 되어있음. 이 자동으로 이루어지는 일을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}