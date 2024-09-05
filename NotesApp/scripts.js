const noteListContainer = document.querySelector("#noteListContainer");

function createNote() {
  let div = document.createElement("div");
  div.classList.add("noteBox");
  let textarea = document.createElement("textarea");
  textarea.placeholder = "Type your note here";
  let button = document.createElement("button");
  button.classList.add("deleteBtn");
  button.innerHTML = "Delete";
  div.appendChild(textarea);
  div.appendChild(button);
  noteListContainer.prepend(div);
  // noteListContainer.appendChild(div);

  saveToLocalStorage();
}

noteListContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
    saveToLocalStorage();
  }
});

noteListContainer.addEventListener("keyup", (event) => {
  if (event.target.tagName === "TEXTAREA") {
    event.target.innerHTML = event.target.value;
    saveToLocalStorage();
  }
});

function saveToLocalStorage() {
  localStorage.setItem("notes", noteListContainer.innerHTML);
}

function loadFromLocalStorage() {
  let data = localStorage.getItem("notes");
  noteListContainer.innerHTML = data;
}

loadFromLocalStorage();
