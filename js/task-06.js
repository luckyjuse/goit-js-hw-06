const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', input => {
  if (input.currentTarget.value.length == dataLength) {
    input.currentTarget.classList.add('valid');
    input.currentTarget.classList.remove('invalid');
  } else {
    input.currentTarget.classList.add('invalid');
    input.currentTarget.classList.remove('valid');
  }
});
