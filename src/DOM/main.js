// Global Variables
const increment = document.getElementById("count__increment");
const decrement = document.getElementById("count__decrement");
const reset = document.getElementById("count__reset");
let result = document.getElementById("count__result");

// Add click event listeners...
reset.addEventListener("click", resetCount);
increment.addEventListener("click", incrementCount);
decrement.addEventListener("click", decrementCount);

let newCount;

function resetCount(e) {
  e.preventDefault();
  result.textContent = "0";
}
function incrementCount(e) {
  e.preventDefault();

  newCount = parseFloat(result.textContent) + 1;
  result.textContent = newCount;
}
function decrementCount(e) {
  e.preventDefault();
  newCount = parseFloat(result.textContent) - 1;
  result.textContent = newCount;
}
