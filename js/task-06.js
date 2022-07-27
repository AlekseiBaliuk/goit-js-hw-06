const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputEvent = event.currentTarget;
  const inputLength = Number(inputEvent.dataset.length);

  if (inputEvent.value.length === inputLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
