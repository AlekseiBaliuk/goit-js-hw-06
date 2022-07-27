const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listIngredientsEl = document.querySelector('#ingredients');

console.log(listIngredientsEl);

const ingredientItemsEl = ingredients.map(ingredient => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.classList.add('item');
  ingredientItemEl.textContent = ingredient;

  return ingredientItemEl;
});

listIngredientsEl.append(...ingredientItemsEl);
