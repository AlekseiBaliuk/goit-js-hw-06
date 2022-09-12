// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

// createBtnEl.addEventListener('click', getAmount);
// destroyBtnEl.addEventListener('click', destroyBoxes);

// function destroyBoxes() {
//   boxesEl.innerHTML = '';
// }

// function getAmount() {
//   let amount = document.querySelector('input[type=number]').value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   const minSize = 30;

//   for (let i = 0; i < amount; i += 1) {
//     let size = minSize + 10 * i;

//     const div = document.createElement('div');

//     div.style.width = `${size}px`;
//     div.style.height = `${size}px`;
//     div.style.backgroundColor = getRandomHexColor();
//     boxesEl.appendChild(div);
//   }
// }

// ==================== Clacss ========================
class Boxes {
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  destroyBoxes() {
    boxesEl.innerHTML = '';
  }

  createBoxes() {
    let amount = document.querySelector('input[type=number]').value;
    const minSize = 30;

    for (let i = 0; i < amount; i += 1) {
      let size = minSize + 10 * i;

      const div = document.createElement('div');

      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = this.getRandomHexColor();
      boxesEl.appendChild(div);
    }

    const input = document.querySelector('input');
    input.value = 0;
  }
}

const box = new Boxes();

createBtnEl.addEventListener('click', box.createBoxes.bind(box));
destroyBtnEl.addEventListener('click', box.destroyBoxes.bind(box));
