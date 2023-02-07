const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
    
function onLoginSubmit(event){
    event.preventDefault(); //브라우저의 기본동작을 막음 ex.form의 input에서 submit후 자동 새로고침
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit)