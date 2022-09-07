const playerCurrentScore = document.getElementById("#playerCurrentScore");
const computerCurrentScore = document.getElementById("#computerCurrentScore");
const rock = document.getElementById("#rock"); 
const paper = document.getElementById("#paper");
const scissors = document.getElementById("#scissors");
const play = document.querySelector(".play");
const playerSide = document.querySelector(".player-left-side");
const compSide = document.querySelector(".computer-right-side");
const field = document.querySelectorAll(".field-play")
const restartBtn = document.querySelector(".restart")


function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

let playerResult = 0;
let computerResult = 0;
let playerStep = 0;

function game(playerSelection, computerSelection) {
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
}
game();


// const fivegames = () => {
//     playerResult = 0;
//     computerResult = 0;

//     for (let i = 1; i <=5; i++) {
//         console.log(`round ${i}`);
//     }
// }
// fivegames();

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


// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

// console.log(`Player selection: ${playerSelection}`);
// console.log(`Computer selection: ${computerSelection}`);

// console.log(game(playerSelection, computerSelection));


const choiceUser = document.querySelectorAll(".player-left-side .field-play");
console.log(choiceUser);

for (let i = 0; i < choiceUser.length; i++) {
    choiceUser[i].addEventListener("click", () => {
        console.log([i]);       
        backgroundChange([i]);            
    })
    getComputerChoice()
}

function backgroundChange([i]) {
    field[i].style.backgroundColor = '#d32f2ff0';
}

function currentScoreOfPlayers() {
    playerCurrentScore.innerHTML = playerResult;
    computerCurrentScore.innerHTML = computerResult;
}

function startNewGame() {
    playerResult = 0;
    computerResult = 0;
    currentScoreOfPlayers();
  }
  
