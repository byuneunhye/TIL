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

title.addEventListener("click",handleTitleclick); //여기서 handleTitleclick뒤에 괄호()를 안쓰는건 정말 중요함 => 괄호쓰면 바로 실행 됨, 우리는 크릭이벤트가 발생하면 자바스크립트에서 자동으로 실행하기를 기대하는것임.
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);


// 1. listen 하고싶은 event를 찾는 방법 : 구글에 찾고싶은 element의 이름, WebApi 적힌거 들어가면 js정보 찾을 수 있음
// 2. 콘솔에 dir로 찾고싶은 element를 출력하면 사용가능한 event를 찾을 수 있다.
//    -> property이름 앞에 on이 붙어있으면 event listener 