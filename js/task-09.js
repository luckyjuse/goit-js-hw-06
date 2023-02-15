function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const sapnEl = document.querySelector('.color');

btnEl.addEventListener('click', event => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  sapnEl.textContent = getRandomHexColor();
});
