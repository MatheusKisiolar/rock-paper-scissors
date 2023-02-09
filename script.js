const startGameButton = document.querySelector("#start-game");
startGameButton.addEventListener("click", startGame);

const buttonsDiv = document.querySelector("#game-buttons");

let rounds;
let currentRound;
let selectedRounds;
let computerScore;
let playerScore;

const gameButtons = document.querySelectorAll(".game-button");

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

function playRound(e) {
    if (rounds < 1) return;
    rounds--;
    
    currentRound++;

    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        loadGameScore(`Computer chooses ${computerSelection}. Tie!`);
        loadLastRound()
    } else if (playerSelection === 'paper' && computerSelection === "rock" || playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        loadGameScore(`Computer chooses ${computerSelection}. You win the round!`);
        loadLastRound()
    } else {
        computerScore++;
        loadGameScore(`Computer chooses ${computerSelection}. You lose the round!`);
        loadLastRound()
    }

    function loadLastRound(){
        if (rounds === 1) {
            const lastRoundText = document.createElement("p");
            lastRoundText.textContent = "Last round!";
            document.querySelector("#game-info").appendChild(lastRoundText);


            gameButtons.forEach(button => button.removeEventListener("click", playRound));

            gameButtons.forEach(button => button.addEventListener("click", playLastRound));
        }
    }
}

function playLastRound(e) {
    rounds--;

    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        loadFinalResult(`Computer chooses ${computerSelection}. Tie!`);
    } else if (playerSelection === 'paper' && computerSelection === "rock" || playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        loadFinalResult(`Computer chooses ${computerSelection}. You win the round!`);
    } else {
        computerScore++;
        loadFinalResult(`Computer chooses ${computerSelection}. You lose the round!`);
    }

    gameButtons.forEach(button => button.removeEventListener("click", playLastRound));
}

function startGame() {
    if (rounds > 0) return;
    
    rounds = +prompt("How many rounds do you want to play? (3 minimum)");
   
    if (rounds <= 2) {
        alert("Game canceled.")
        return;
    }
    
    selectedRounds = rounds;
   
    startGameButton.style.display = "none";
    buttonsDiv.style.display = "block";

    

    currentRound = 1;
    playerScore = 0;
    computerScore = 0;

    const gameInfo = document.querySelector("#game-info");
    if (gameInfo) {
       document.body.removeChild(gameInfo);
    }

    gameButtons.forEach(button => button.addEventListener("click", playRound));

    loadInitialGameInfo();
}

function loadInitialGameInfo() {
    const gameInfo = document.createElement('div');
    gameInfo.id = "game-info";

    const gameStartedText = document.createElement('div')
    gameStartedText.innerHTML = `
        <p>Game Started!</p>
        <p>Choose between rock, paper or scissors to play!</p>
        <p>Round: ${currentRound}/${selectedRounds}</p>
    `;
    gameInfo.appendChild(gameStartedText);

    document.body.insertBefore(gameInfo, buttonsDiv);
}

function loadGameScore(roundResult) {
    document.querySelector("#game-info").innerHTML = `
        <p>${roundResult}</p>
        <p>Player : ${playerScore} X ${computerScore} : Computer</p>
        <p>Round: ${currentRound}/${selectedRounds}</p>
    `;
}

function loadFinalResult(roundResult){
    buttonsDiv.style.display = "none";
    startGameButton.textContent = "Start new game";
    startGameButton.style.display = "inline";

    if (computerScore > playerScore) {
        document.querySelector("#game-info").innerHTML = `
            <p>${roundResult}</p>
            <p>Player : ${playerScore} X ${computerScore} : Computer</p>
            <p>Game finished!</p>
            <p>Computer wins the game!</p>
        `;
    } else if (playerScore > computerScore) {
        document.querySelector("#game-info").innerHTML = `
            <p>${roundResult}</p>
            <p>Player : ${playerScore} X ${computerScore} : Computer</p>
            <p>Game finished!</p>
            <p>Player wins the game!</p>
        `;
    } else {
        document.querySelector("#game-info").innerHTML = `
            <p>${roundResult}</p>
            <p>Player : ${playerScore} X ${computerScore} : Computer</p>
            <p>Game finished!</p>
            <p>It's a tie!</p>
        `;
    }

}