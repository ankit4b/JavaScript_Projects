const submitBtn = document.querySelector("#submit");
const todoListContainer = document.querySelector("#todoList");
let todoInput = document.querySelector("#input");
const todoList = [];

console.log("inside form");

submitBtn.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();
  console.log("Inside add todo : ", todoInput.value);

  if (todoInput.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todoInput.value;
    todoListContainer.appendChild(li);
    todoInput.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }

  //   todoList.push({ name: newTodo, id: todoList.length + 1 });
  //   console.log("todoList : ", todoList);
}

todoListContainer.addEventListener("click", (e) => {
  console.log("ev : ", e.target.tagName);

  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }

  saveData();
});

function saveData() {
  localStorage.setItem("todoData", todoListContainer.innerHTML);
}

function loadData() {
  todoListContainer.innerHTML = localStorage.getItem("todoData");
}

loadData();
