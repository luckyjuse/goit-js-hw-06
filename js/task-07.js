const inputEl = document.querySelector('#font-size-control');
const outputEl = document.querySelector('#text');

inputEl.addEventListener('input', input => {
  outputEl.style.fontSize = `${input.currentTarget.value}px`;
});
