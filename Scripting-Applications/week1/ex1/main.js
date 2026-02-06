// 1) toTitleCase(str)
// VERY simple version: just makes the FIRST letter uppercase.
function toTitleCase(str) {
  let firstLetter = str[0];                 // first character
  let rest = str.slice(1);                  // everything after first character
  return firstLetter.toUpperCase() + rest;  // combine
}

// 2) sum(a, b)
function sum(a, b) {
  return a + b;
}

// 3) avg(arr)
// arr is a list of numbers like [10, 20, 30] 
function avg(arr) {
  let total = 0;

  // add them all up
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  // divide by how many numbers there are
  return total / arr.length;
}

// --- Console examples (show input and output) ---

console.log("toTitleCase input:", "hello");
console.log("toTitleCase output:", toTitleCase("hello"));

console.log("sum input:", 5, 7);
console.log("sum output:", sum(5, 7));

console.log("avg input:", [10, 20, 30]);
console.log("avg output:", avg([10, 20, 30]));
