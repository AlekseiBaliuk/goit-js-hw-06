const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputRange.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
  text.style.fontSize = `${event.target.value}px`;
}
