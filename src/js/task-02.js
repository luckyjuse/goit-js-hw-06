const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newLiList = [];

ingredients.forEach(ingredient => {
  const newEl = document.createElement('li');
  newEl.classList.add('item');
  newEl.textContent = ingredient;
  newLiList.push(newEl);
});

const ingredientEl = document.querySelector('#ingredients');
ingredientEl.append(...newLiList);
