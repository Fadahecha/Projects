//SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


todoButton.addEventListener("click", function (e) {
    e.preventDefault();
    let task = todoInput.value;

    if(task==''){
        alert('mete cualquier cosa');
    }else{
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const newTodo = document.createElement("li");
        newTodo.innerText = task;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
console.log(newTodo);
    }
  
})


