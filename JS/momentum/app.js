const title = document.querySelector("div.hello:first-child h1");

function handleTitleclick() {
    console.log("title was clicked!");
}

title.addEventListener("click",handleTitleclick); //여기서 handleTitleclick뒤에 괄호()를 안쓰는건 정말 중요함 => 괄호쓰면 바로 실행 됨, 우리는 크릭이벤트가 발생하면 자바스크립트에서 자동으로 실행하기를 기대하는것임.

// js에서 style도 바꿀 수 있다!!