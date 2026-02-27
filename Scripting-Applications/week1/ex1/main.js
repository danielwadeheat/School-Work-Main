// 1) toTitleCase(str)
// Converts the first letter of each word to uppercase.
function toTitleCase(str) {
  return str
    .split(" ")
    .map(function (word) {
      if (word.length === 0) return word;
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

// 2) sum(a, b)
function sum(a, b) {
  return a + b;
}

// 3) avg(arr)
// Returns the average of numbers in an array.
function avg(arr) {
  let total = 0;

  // Add them all up
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  // Divide by the number of items
  return total / arr.length;
}

// --- Console examples (7 clean test calls: inputs + outputs) ---

console.log("Test 1 - toTitleCase input:", "hello world");
console.log("Test 1 - toTitleCase output:", toTitleCase("hello world"));

console.log("Test 2 - toTitleCase input:", "JAVASCRIPT basics");
console.log("Test 2 - toTitleCase output:", toTitleCase("JAVASCRIPT basics"));

console.log("Test 3 - sum input:", 5, 7);
console.log("Test 3 - sum output:", sum(5, 7));

console.log("Test 4 - sum input:", -2, 10);
console.log("Test 4 - sum output:", sum(-2, 10));

console.log("Test 5 - avg input:", [10, 20, 30]);
console.log("Test 5 - avg output:", avg([10, 20, 30]));

console.log("Test 6 - avg input:", [1, 2, 3, 4]);
console.log("Test 6 - avg output:", avg([1, 2, 3, 4]));

console.log("Test 7 - avg input:", [5, 5, 5, 5, 5]);
console.log("Test 7 - avg output:", avg([5, 5, 5, 5, 5]));
