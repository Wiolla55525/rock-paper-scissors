function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}


function game(playerSelection, computerSelection){
    playRound();
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You loose :( Paper beats Rock!"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Paper!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You loose :( Scissors beats Paper!"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock!"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You loose :( Scissors beats Rock!"
    } else {
        return "You win! Scissors beats Paper!"
    }
}
game()
function playRound() {

}
const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(`Player selection: ${playerSelection}`);
console.log(`Computer selection: ${computerSelection}`);

console.log(getComputerChoice(playerSelection, computerSelection));