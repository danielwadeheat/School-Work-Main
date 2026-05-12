const listView = document.getElementById("listView");
const formView = document.getElementById("formView");
const listEl = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn = document.getElementById("saveBtn");
const form = document.getElementById("itemForm");
const status = document.getElementById("status");

const errName = document.getElementById("errName");
const errPrice = document.getElementById("errPrice");
const errCategory = document.getElementById("errCategory");

let items = [
  { id: 1, name: "Canvas Tote", price: 19.99, category: "Accessories" },
  { id: 2, name: "Ceramic Mug", price: 12.5, category: "Home" }
];
let editingId = null;

function renderList() {
  listEl.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "row";
    li.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <div class="muted">${item.category} • $${item.price.toFixed(2)}</div>
      </div>
      <button data-id="${item.id}">Edit</button>
    `;
    li.querySelector("button").addEventListener("click", () => {
      editingId = item.id;
      form.name.value = item.name;
      form.price.value = item.price;
      form.category.value = item.category;
      showForm();
    });
    listEl.appendChild(li);
  });
}

function showForm() {
  listView.classList.add("hidden");
  formView.classList.remove("hidden");
}

function showList(message = "") {
  status.textContent = message;
  formView.classList.add("hidden");
  listView.classList.remove("hidden");
}

function clearErrors() {
  errName.textContent = "";
  errPrice.textContent = "";
  errCategory.textContent = "";
}

addBtn.addEventListener("click", () => {
  editingId = null;
  form.reset();
  clearErrors();
  showForm();
});

cancelBtn.addEventListener("click", () => showList(""));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  if (!form.checkValidity()) {
    errName.textContent = form.name.validationMessage;
    errPrice.textContent = form.price.validationMessage;
    errCategory.textContent = form.category.validationMessage;
    form.reportValidity();
    return;
  }

  saveBtn.disabled = true;
  saveBtn.textContent = "Saving…";

  setTimeout(() => {
    const data = {
      name: form.name.value.trim(),
      price: Number(form.price.value),
      category: form.category.value
    };

    if (editingId) {
      items = items.map((i) => (i.id === editingId ? { ...i, ...data } : i));
    } else {
      const nextId = Math.max(0, ...items.map((i) => i.id)) + 1;
      items.push({ id: nextId, ...data });
    }

    saveBtn.disabled = false;
    saveBtn.textContent = "Save";
    renderList();
    showList("Saved successfully.");
  }, 1200);
});

renderList();