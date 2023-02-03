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
        console.log(`${playerSelection} beats ${computerSelection}! Player wins the round!`);
        return true;
    } else {
        console.log(`${computerSelection} beats ${playerSelection}! Computer wins the round!`);
        return false;
    }
}

function game() {
    const rounds = +prompt("How many rounds do you want to play?");
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let playerWinsRound;
    if (rounds === 0) {
        alert("Game canceled.")
        return;
    }
    console.log(`Game started! Rounds: ${rounds}`);
    for (let i = 0; i < rounds; i ++) {
        playerSelection = prompt("Do you choose rock, paper or scissors?");
        computerSelection = getComputerChoice();
        playerWinsRound = playRound(playerSelection, computerSelection)
        if (playerWinsRound) {
            playerScore++;
        } else if (playerWinsRound === false) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`Player : ${playerScore} X ${computerScore} : Computer \nPlayer wins!`);
    } else if (computerScore > playerScore) {
        console.log(`Player : ${playerScore} X ${computerScore} : Computer \nComputer wins!`);     
    } else {
        console.log(`Player : ${playerScore} X ${computerScore} : Computer \nIt's a tie!`);            
    }
}