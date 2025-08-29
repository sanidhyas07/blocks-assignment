let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

addBtn.addEventListener("click", function() {
  let task = input.value.trim();
  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.innerText = task;

  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.onclick = function() {
    let newTask = prompt("Edit task:", span.innerText);
    if (newTask && newTask.trim() !== "") {
      span.innerText = newTask;
    }
  };

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.onclick = function() {
    list.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  list.appendChild(li);
  input.value = "";
});