const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");  // = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));    //li.id(delete 누른 toDo)를 제외한 id들만 남긴 새로운 array를 만듦 & li.id는 string이라 number 타입으로 바꿔줌
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);   //span을 li의 child로 집어 넣음
    li.appendChild(button);
    toDoList.appendChild(li);   //li를 todo-list tag에 집어 넣음
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {   // 그냥 savedToDos만 적어도 됨
    const parsedToDos = JSON.parse(savedToDos); //savedToDos는 string임. 이걸 array로 바꿔줘야됨
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
