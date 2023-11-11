let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = document.getElementById('userGuess').value;
  attempts++;

  if (userGuess == secretNumber) {
    document.getElementById('message').innerHTML = `Congratulations! You guessed the number in ${attempts} attempts.`;
    document.getElementById('range').innerHTML = `The correct number was ${secretNumber}.`;
  } else if (userGuess < secretNumber) {
    document.getElementById('message').innerHTML = 'Too low. Try again.';
  } else {
    document.getElementById('message').innerHTML = 'Too high. Try again.';
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('message').innerHTML = '';
  document.getElementById('range').innerHTML = 'Enter a number between 1 and 100:';
  document.getElementById('userGuess').value = '';
}