const options = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(`Player selection: ${playerSelection}`);
console.log(`Computer selection: ${computerSelection}`);

console.log(getComputerChoice(playerSelection, computerSelection));