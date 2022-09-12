// let counterValue = 0;

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueEl = document.querySelector('#value');

const [decrementBtn, valueEl, incrementBtn] = document.querySelector('#counter').children;

decrementBtn.addEventListener('click', function () {
  // counterValue -= 1;
  // valueEl.textContent = counterValue -= 1;
  valueEl.textContent = valueEl.textContent - 1;
});

incrementBtn.addEventListener('click', function () {
  // counterValue += 1;
  valueEl.textContent = Number(valueEl.textContent) + 1;
});
