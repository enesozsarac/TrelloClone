const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const todoLane = document.getElementById("todoWrapper");
const editInput = document.getElementById("editInput");
const saveBtn = document.getElementById("saveBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("taskWrapper");

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  let delBtn = document.createElement("button");
  delBtn.classList.add("deleteBtn");
  delBtn.setAttribute("onclick", "delBtn(this)");
  delBtn.innerHTML = `<i class="fa-solid fa-x"></i>`;

  let editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.setAttribute("data-bs-toggle", "modal");
  editBtn.setAttribute("data-bs-target", "#exampleModal");
  editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

  taskWrapper.addEventListener("dragstart", () => {
    taskWrapper.classList.add("isDragging");
  });

  taskWrapper.addEventListener("dragend", () => {
    taskWrapper.classList.remove("isDragging");
  });

  taskWrapper.appendChild(newTask);
  taskWrapper.appendChild(editBtn);
  taskWrapper.appendChild(delBtn);
  todoLane.appendChild(taskWrapper);

  input.value = "";

  editBtnIndex();
});

function delBtn(element) {
  let deleteDiv = element.parentNode;
  deleteDiv.remove();
}

let number;

saveBtn.addEventListener("click", () => {
  let editButtons = document.querySelectorAll(".editBtn");
  let newTask = editButtons[number].parentNode.querySelector(".task");
  console.log(number);

  if (editInput.value == "") {
    alert("yaz");
  } else {
    newTask.innerHTML = editInput.value;
    editInput.value = "";
  }
});

function editBtnIndex() {
  let editButtons = document.querySelectorAll(".editBtn");

  editButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      console.log(index);
      number = index;
    });
  });
}
