const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //html전체가 아닌 for에서 input을 찾음
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    //console.log(event); //mouseEvent가 떠야하는데 pointerEvent가 뜸... 왜지?
    //console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
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