const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //html전체가 아닌 for에서 input을 찾음
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo){
    //console.log("i will paint",newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    console.log(li);
    toDoList.appendChild(li); 
}

function handleToDoSubmit(event) { //submit이벤트 받아옴
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value; //입력값 저장
    toDoInput.value = "";
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);