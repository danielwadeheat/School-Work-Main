const statusEl = document.getElementById("status");
const usersListEl = document.getElementById("usersList");

async function loadUsers() {
  statusEl.textContent = "Loading...";
  usersListEl.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const users = await response.json();

    if (!Array.isArray(users) || users.length === 0) {
      statusEl.textContent = "No results.";
      return;
    }

    statusEl.textContent = "";
    users.forEach(function (user) {
      const li = document.createElement("li");
      li.textContent = user.name;
      usersListEl.appendChild(li);
    });
  } catch (error) {
    statusEl.textContent = "Sorry, we could not load users right now.";
    console.error(error);
  }
}

loadUsers();