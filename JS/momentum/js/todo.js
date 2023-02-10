const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //html전체가 아닌 for에서 input을 찾음
const toDoList = document.getElementById("todo-list");

//form이 자동으로 가지는 submit이벤트를 차단하는 함수를 만듦
//submit의 기본동작은 페이지를 새로고침하는 것

function handleToDoSubmit(event) { //submit이벤트 받아옴
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value; //입력값 저장
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);