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

// Validation functions
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[0-9]{10,15}$/.test(phone);
}

// Validate individual field
function validateName() {
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
  } else {
    showSuccess(nameInput);
  }
}

function validateEmail() {
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Email is required');
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, 'Enter a valid email');
  } else {
    showSuccess(emailInput);
  }
}

function validatePhone() {
  if (phoneInput.value.trim() === '') {
    showError(phoneInput, 'Phone number is required');
  } else if (!isValidPhone(phoneInput.value.trim())) {
    showError(phoneInput, 'Enter a valid phone number');
  } else {
    showSuccess(phoneInput);
  }
}

function validatePassword() {
  if (passwordInput.value.trim().length < 6) {
    showError(passwordInput, 'Password must be at least 6 characters');
  } else {
    showSuccess(passwordInput);
  }
}

// Real-time validation (on blur)
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
passwordInput.addEventListener('blur', validatePassword);

// Optional: validate while typing (live feedback)
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
passwordInput.addEventListener('input', validatePassword);

// On submit: run all validations
form.addEventListener('submit', function(e) {
  e.preventDefault();
  validateName();
  validateEmail();
  validatePhone();
  validatePassword();

  // Check if all fields are green (valid)
  const allValid = [nameInput, emailInput, phoneInput, passwordInput]
    .every(input => input.style.borderColor === 'green');

  if (allValid) {
    alert('Form submitted successfully!');
    form.reset();
    [nameInput, emailInput, phoneInput, passwordInput].forEach(input => {
      input.style.borderColor = '#ddd';
    });
  }
});
