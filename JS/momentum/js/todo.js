const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //html전체가 아닌 for에서 input을 찾음
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //이전 todo들을 복원하기 위하여 let을 써 줌 

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //stringify: object를 string으로 만들어줌
}

function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); 
}

function handleToDoSubmit(event) { //submit이벤트 받아옴
    event.preventDefault();
    const newTodo = toDoInput.value; //입력값 저장
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos);  //localStorage에 있는 todos의 값을 콘솔에 띄워보기, 아무것도 없다면 null
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos; //local저장소에 리스트를 추가하면 배열에 덮어쓰지 않고, 추가하게 해줌 . 즉, 기존에 저장 되어있던 배열값들이 새로고침해도, 새 리스트를 추가해도 남아 있을 수 있다는 것.
    parsedToDos.forEach(paintTodo);
}  