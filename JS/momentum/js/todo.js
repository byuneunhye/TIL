const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //html전체가 아닌 for에서 input을 찾음
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //stringify: object를 string으로 만들어줌
}

function deleteToDo(event){
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
    const newTodo = toDoInput.value; //입력값 저장
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);  //localStorage에 있는 todos의 값을 콘솔에 띄워보기, 아무것도 없다면 null
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //parse: localStorage에서 가져온 string을 살아있는 JavaScript object(array)로 바꿈
    // console.log(parsedToDos);
    parsedToDos.forEach((item) => console.log("this is the turn of", item));
} 