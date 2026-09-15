const chose = document.querySelector('#chose');
const result = document.querySelector('#result');
const button = document.querySelector('button');
const maxInput = document.querySelector('h2 input');
const choseInput = document.querySelector('h3 input');

function game() {
  const max = maxInput.value;
  const randomNum = parseInt(Math.floor(Math.random() * max));
  const choseNum = choseInput.value;
  chose.innerText = `You chose: ${choseNum}, the machine chose: ${randomNum}\n`;
  if (choseNum != randomNum) {
    result.innerText = 'You lost!';
  } else {
    result.innerText = 'You won!';
  }
}

button.addEventListener('click', game);
