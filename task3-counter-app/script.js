let count = 0;

const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Update display
function updateDisplay() {
  counterDisplay.innerText = count;
}

// Increment
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

// Decrement (doesn't go below zero)
decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

// Reset
resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});
