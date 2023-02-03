function getComputerChoice() {
    let num = Math.random();
    let choice;
    if (num < 0.33) {
        choice = "rock";
    } else if (num < 0.66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection === 'paper' && computerSelection === "rock" || playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`${playerSelection} beats ${computerSelection}! Player wins!`);
    } else {
        console.log(`${computerSelection} beats ${playerSelection}! Computer wins!`);
    }
}
   
const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));