function getComputerChoice() {
    let num = Math.random();
    let choice;
    if (num < 0.33) {
        choice = "Rock";
    } else if (num < 0.66) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}