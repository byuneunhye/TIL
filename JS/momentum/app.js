const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
    
const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault(); //브라우저의 기본동작을 막음 ex.form의 input에서 submit후 자동 새로고침
    console.log(loginInput.value);
}

function handleLinkClick(){
    //event.preventDefault();
    alert("clicked!");//alert는 좀 특이해서 html의 모든 기본동작을 막음 => 잘 사용 안 함
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);