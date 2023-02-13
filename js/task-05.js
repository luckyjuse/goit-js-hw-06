const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', input => {
  if (input.currentTarget.value) {
    outputEl.textContent = input.currentTarget.value;
  } else {
    outputEl.textContent = 'Anonymous';
  }
});
