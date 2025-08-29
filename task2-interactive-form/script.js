const form = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');

// Show error
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  small.style.visibility = 'visible';
  input.style.borderColor = 'red';
}

// Show success
function showSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.style.visibility = 'hidden';
  input.style.borderColor = 'green';
}

// Validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validate phone number (only digits, 10-15 chars)
function isValidPhone(phone) {
  return /^[0-9]{10,15}$/.test(phone);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Validate Name
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
  } else {
    showSuccess(nameInput);
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Email is required');
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, 'Enter a valid email');
  } else {
    showSuccess(emailInput);
  }

  // Validate Phone
  if (phoneInput.value.trim() === '') {
    showError(phoneInput, 'Phone number is required');
  } else if (!isValidPhone(phoneInput.value.trim())) {
    showError(phoneInput, 'Enter a valid phone number');
  } else {
    showSuccess(phoneInput);
  }

  // Validate Password
  if (passwordInput.value.trim().length < 6) {
    showError(passwordInput, 'Password must be at least 6 characters');
  } else {
    showSuccess(passwordInput);
  }
});
