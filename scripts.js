const choices = document.querySelectorAll('.choice');
const pScore = document.querySelector('.p-score');
const cScore = document.querySelector('.c-score');
const pPick = document.querySelector('.p-pick');
const cPick = document.querySelector('.c-pick');
const options = ["rock", "paper", "scissors"];
const caption = document.querySelector('.caption');
const result = document.querySelector('.board-result');
let playerScore = 0;
let computerScore = 0;

function showCaption(e) {
    caption.textContent = `${e.target.id}`;
}

function hideCaption(e) {
    caption.textContent = '';
}

choices.forEach(choice => {
    choice.addEventListener('mouseover', showCaption);
    choice.addEventListener('mouseleave', hideCaption);
    choice.addEventListener('mousedown', playRound);
})

function playRound(e) {
    let playerPick = `${e.target.id}`;
    let computerPick = options[Math.floor(Math.random() * options.length)];

    if (
    (playerPick == 'rock' && computerPick == 'scissors') ||
    (playerPick == 'scissors' && computerPick == 'paper') ||
    (playerPick == 'paper' && computerPick == 'rock')) {
        pPick.textContent = `${playerPick}`;
        cPick.textContent = `${computerPick}`;
        pPick.style.cssText = 'color: #333';
        cPick.style.cssText = 'color: #999';
        playerScore++;
        pScore.textContent = `${playerScore}`;
        cScore.textContent = `${computerScore}`;
        result.textContent = "You win this round!";
    } else if (playerPick == computerPick) {
        pPick.textContent = `${playerPick}`;
        cPick.textContent = `${computerPick}`;
        pPick.style.cssText = 'color: #999';
        cPick.style.cssText = 'color: #999';
        pScore.textContent = `${playerScore}`;
        cScore.textContent = `${computerScore}`;
        result.textContent = "It's a tie!";
    } else {
        pPick.textContent = `${playerPick}`;
        cPick.textContent = `${computerPick}`;
        pPick.style.cssText = 'color: #999';
        cPick.style.cssText = 'color: #333';
        computerScore++;
        pScore.textContent = `${playerScore}`;
        cScore.textContent = `${computerScore}`;
        result.textContent = "You lose this round.";
    }
    if (playerScore == 5 || computerScore == 5) {
        choices.forEach(choice => {
            choice.removeEventListener('mouseover', showCaption);
            choice.removeEventListener('mouseleave', hideCaption);
            choice.removeEventListener('mousedown', playRound);
        })

        caption.textContent = '';
        caption.appendChild(resetButton);
        resetButton.addEventListener('click', reloadGame);

        if (playerScore == 5) {
            result.textContent = 'Congrats! You are the champion!';
        }
        else {
            result.textContent = 'You lose the game. Better luck next time!';
        }
    }
}

const resetButton = document.createElement('button');
resetButton.classList.add('reset-button');
resetButton.textContent = 'Play again';

function reloadGame() {
    location.reload();
}