const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//   refs.span.textContent = event.currentTarget.value;

//   if (event.currentTarget.value === '') {
//     refs.span.textContent = 'Anonymous';
//   }
// }

// ========================================

function onInputChange({ target: { value } }) {
  // console.dir(refs.input);
  refs.span.textContent = value.trim() === '' ? 'Anonymous' : value;
}
