const themeToggleBtn = document.getElementById("themeToggle");
const THEME_KEY = "preferredTheme";

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    themeToggleBtn.textContent = "Switch to Light";
  } else {
    document.body.classList.remove("dark");
    themeToggleBtn.textContent = "Switch to Dark";
  }
}

function getTheme() {
  return document.body.classList.contains("dark") ? "dark" : "light";
}

const savedTheme = localStorage.getItem(THEME_KEY);
applyTheme(savedTheme === "dark" ? "dark" : "light");

themeToggleBtn.addEventListener("click", function () {
  const nextTheme = getTheme() === "light" ? "dark" : "light";
  applyTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
});