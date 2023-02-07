const loginInput = document.querySelector("#login-form input");
const loginButton= document.querySelector("#login-form button");
    
function onLoginBtnClick(){
    const value = loginInput.value;
    if(value === ""){
        alert("Please write your name");
    }else if(value.length > 15){
        alert("Your name is too long");
    }
}

loginButton.addEventListener("click", onLoginBtnClick); 