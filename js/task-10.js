function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');

const controlsEl = document.querySelector('#controls');
const divEl = document.querySelector('#boxes');

controlsEl.addEventListener('click', createBoxes);

const newCollection = [];

function createBoxes(amount) {
  const amountToCreate = amount.currentTarget.firstElementChild.value;
  console.log(amountToCreate);

  const newEl = document.createElement('div');
  newCollection.push(newEl);
  console.log(newCollection);
}
divEl.append(...newCollection);
