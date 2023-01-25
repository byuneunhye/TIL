const title = document.querySelector("div.hello:first-child h1");

//console.dir(title);

function handleTitleclick() {
    //console.log("title was clicked!");
    title.style.color = "blue";
}

function handleMouseEnter(){
   // console.log("mouse is here");
    title.innerText = "Mouse is here!"
} 

function handleMouseLeave(){
    title.innerText = "Mouse is gone";
} 

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function hamdleWindowCopy() {
    alert("capier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD");
}

title.onclick = handleTitleclick; //이렇게 쓰는것도 가능하지만 addEventListener사용을 더 지향할 것
title.addEventListener("mouseenter", handleMouseEnter);//나중에 .removeEventListener을 사용할 수 있기 때문임
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",hamdleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);