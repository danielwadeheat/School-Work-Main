const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

function createTodoItem(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";

  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}

// Enter key works because form submit handles keyboard + click
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) return;

  const item = createTodoItem(text);
  todoList.appendChild(item);
  todoInput.value = "";
  todoInput.focus();
});

// Event delegation on list for done toggle + delete
todoList.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("delete-btn")) {
    target.closest("li").remove();
    return;
  }

  if (target.classList.contains("task-text")) {
    target.closest("li").classList.toggle("done");
  }
});