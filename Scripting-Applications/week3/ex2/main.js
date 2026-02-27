const searchInput = document.getElementById("searchInput");
const statusEl = document.getElementById("status");
const resultsEl = document.getElementById("results");

let currentController = null;

async function runSearch(query) {
  if (currentController) {
    currentController.abort();
  }

  if (!query.trim()) {
    statusEl.textContent = "";
    resultsEl.innerHTML = "";
    return;
  }

  currentController = new AbortController();
  const signal = currentController.signal;

  statusEl.textContent = "Loading...";
  resultsEl.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const users = await response.json();

    const filtered = users.filter(function (user) {
      return user.name.toLowerCase().includes(query.toLowerCase());
    });

    if (filtered.length === 0) {
      statusEl.textContent = "No results.";
      return;
    }

    statusEl.textContent = "";
    filtered.forEach(function (user) {
      const li = document.createElement("li");
      li.textContent = user.name + " (" + user.email + ")";
      resultsEl.appendChild(li);
    });
  } catch (error) {
    if (error.name === "AbortError") {
      return;
    }
    statusEl.textContent = "Search failed. Please try again.";
    console.error(error);
  }
}

searchInput.addEventListener("input", function () {
  runSearch(searchInput.value);
});