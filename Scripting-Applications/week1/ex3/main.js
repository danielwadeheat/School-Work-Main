// Mini Prompt App
// Goal: Input -> clean -> output string.

// Ask for a name with prompt (fallback to hard-coded if blocked or empty)
let rawName = prompt("Enter your name:");

if (rawName === null || rawName.trim() === "") {
  rawName = "Student";
}

// Clean input
const cleanName = rawName.trim();

// Output using template string
const message = `Hello, ${cleanName}!`;
console.log(message);