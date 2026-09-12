const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos()
{
    localStorage.setItem("todos", JSON.stringify(tDos));
}

function deleteToDO(event)
{
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDO)
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event)
{
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);