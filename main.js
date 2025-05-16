const numberInput = document.querySelector('input');
const guessButton = document.querySelector('#btn');

const warning = document.querySelector('#warning');

let randomNumber = Math.floor(Math.random(1) * 100);

function main() {
    const guess = Number(numberInput.value);

    if (!guess || guess < 1 || guess > 100) {
        warning.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    if (guess > randomNumber) warning.textContent = `Your number is too big`;
    else if (guess < randomNumber) warning.textContent = `Your number is too low`;
    else warning.textContent = `Nice! You win.`;
}

guessButton.addEventListener('click', main)