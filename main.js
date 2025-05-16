const numberInput = document.querySelector('input');
const guessButton = document.querySelector('#btn');

const warning = document.querySelector('#warning');

let randomNumber = Math.floor(Math.random(1) * 100);

function main() {
    if (numberInput.value > randomNumber) {
        warning.textContent = `Your number is too big`;
    }
    else if (numberInput.value < randomNumber) {
        warning.textContent = `Your number is too low`;
    }
    else {
        warning.textContent = `Nice! You win.`;
    }
}

guessButton.addEventListener('click', main)