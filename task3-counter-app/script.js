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
  counterDisplay.classList.add('green');
  counterDisplay.classList.remove('red', 'black');
});

// Decrement (doesn't go below zero)
decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
    counterDisplay.classList.add('red');
    counterDisplay.classList.remove('green', 'black');
  }
});

// Reset
resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
  counterDisplay.classList.add('black');
  counterDisplay.classList.remove('green', 'red');
});
