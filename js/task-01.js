const itemCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemCategoriesEl.length}`);

itemCategoriesEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
