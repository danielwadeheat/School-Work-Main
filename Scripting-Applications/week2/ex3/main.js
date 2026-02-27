const filterInput = document.getElementById("filterInput");
const listItems = Array.from(document.querySelectorAll("#itemList li"));

const originalText = listItems.map(function (li) {
  return li.textContent;
});

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

filterInput.addEventListener("input", function () {
  const query = filterInput.value.trim().toLowerCase();

  listItems.forEach(function (li, index) {
    const text = originalText[index];
    const lower = text.toLowerCase();

    if (!query || lower.includes(query)) {
      li.style.display = "";
      if (!query) {
        li.innerHTML = text;
      } else {
        const regex = new RegExp("(" + escapeRegExp(query) + ")", "ig");
        li.innerHTML = text.replace(regex, "<mark>$1</mark>");
      }
    } else {
      li.style.display = "none";
      li.innerHTML = text;
    }
  });
});