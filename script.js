'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.message').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.guess').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.guess').textContent = 'Correct Number!';
    document.querySelector('.box').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#32cd32';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess').textContent = 'You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess').textContent = 'You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.box').textContent = '?';
  document.querySelector('.message').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
});
