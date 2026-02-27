export function $(selector, scope = document) {
  return scope.querySelector(selector);
}

export function titleCase(str) {
  return str
    .split(" ")
    .map(function (word) {
      if (!word) return word;
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}