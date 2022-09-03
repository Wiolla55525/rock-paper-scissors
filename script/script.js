export function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

let playerResult = 0;
let computerResult = 0;

export function game(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a draw..";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerResult++;
    return "You loose :( Paper beats Rock!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerResult++;
    return "You win! Rock beats Paper!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerResult++;
    return "You loose :( Scissors beats Paper!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerResult++;
    return "You win! Paper beats Rock!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerResult++;
    return "You loose :( Scissors beats Rock!";
  } else {
    playerResult++;
    return "You win! Scissors beats Paper!";
  }
  fiveRoundsWinner();
}
game();

function startNewGame() {
  playerResult = 0;
  computerResult = 0;
}

function fiveRoundsWinner() {
    const resultContainer = document.getElementById("#resultContainer");
  switch (playerResult === 5 || computerResult === 5) {
    case playerResult > computerResult:
      resultContainer.innerHTML = "Player Won!";
      startNewGame();
      break;
    case playerResult < computerResult:
      resultContainer.innerHTML = "Unlucky.. Computer Won :(";
      startNewGame();
      break;
    default:
      console.log("No winner yet..");
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(`Player selection: ${playerSelection}`);
console.log(`Computer selection: ${computerSelection}`);
console.log(getComputerChoice(playerSelection, computerSelection));

console.log(game(playerSelection, computerSelection));

export { playerResult, computerResult };