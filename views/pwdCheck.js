const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const errorListItems = passwordError.querySelectorAll('li');

password.addEventListener('input', function() {
  const passwordValue = password.value;

  // Check for lowercase letter
  if (/(?=.*[a-z])/.test(passwordValue)) {
    errorListItems[0].style.color = 'green';
  } else {
    errorListItems[0].style.color = 'red';
  }

  // Check for uppercase letter
  if (/(?=.*[A-Z])/.test(passwordValue)) {
    errorListItems[1].style.color = 'green';
  } else {
    errorListItems[1].style.color = 'red';
  }

  // Check for number
  if (/(?=.*\d)/.test(passwordValue)) {
    errorListItems[2].style.color = 'green';
  } else {
    errorListItems[2].style.color = 'red';
  }

  // Check for minimum length
  if (/.{8,}/.test(passwordValue)) {
    errorListItems[3].style.color = 'green';
  } else {
    errorListItems[3].style.color = 'red';
  }
});