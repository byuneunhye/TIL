const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault(); //브라우저의 기본동작을 막음 ex.form의 input에서 submit후 자동 새로고침
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerHTML = "hello " + username; 
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//콘솔창에 localStorage.setItem("username", "eh") 입력
//웹브라우저의 database 보기 : 개발자 도구 -> >> application -> Local Storage
loginForm.addEventListener("submit", onLoginSubmit);