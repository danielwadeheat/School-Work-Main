import { $, titleCase } from "./js/utils.js";

const app = $("#app");

const items = [
  { id: 1, name: "apple pie", description: "A classic dessert with apples." },
  { id: 2, name: "banana bread", description: "Moist bread with ripe bananas." },
  { id: 3, name: "carrot cake", description: "Spiced cake with shredded carrots." }
];

function renderHome() {
  app.innerHTML = `
    <h2>Home</h2>
    <p>Welcome to the Week 4 hash-router app.</p>
    <p>Use the links above to view the list and item details.</p>
  `;
}

function renderList() {
  app.innerHTML = "<h2>List</h2>";
  const ul = document.createElement("ul");
  const fragment = document.createDocumentFragment();
  const template = $("#item-template");

  items.forEach(function (item) {
    const clone = template.content.cloneNode(true);
    const link = clone.querySelector("a");
    link.href = "#/item/" + item.id;
    link.textContent = titleCase(item.name);
    fragment.appendChild(clone);
  });

  ul.appendChild(fragment);
  app.appendChild(ul);
}

function renderDetail(id) {
  const item = items.find(function (entry) {
    return entry.id === id;
  });

  if (!item) {
    app.innerHTML = `
      <h2>Not Found</h2>
      <p>Item not found.</p>
      <p><a href="#/list">Back to list</a></p>
    `;
    return;
  }

  app.innerHTML = `
    <h2>Detail</h2>
    <h3>${titleCase(item.name)}</h3>
    <p>${item.description}</p>
    <p><a href="#/list">Back to list</a></p>
  `;
}

function router() {
  const hash = location.hash || "#/";
  const path = hash.replace(/^#\//, "");
  const parts = path.split("/");

  if (hash === "#/" || hash === "#") {
    renderHome();
  } else if (parts[0] === "list") {
    renderList();
  } else if (parts[0] === "item" && parts[1]) {
    renderDetail(Number(parts[1]));
  } else {
    app.innerHTML = `
      <h2>Route Not Found</h2>
      <p>Try <a href="#/">Home</a> or <a href="#/list">List</a>.</p>
    `;
  }

  app.focus();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);