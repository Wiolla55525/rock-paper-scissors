console.log("hi");
const field = document.querySelectorAll(".only-player");
const playerCurrentScore = document.getElementById("playerCurrentScore");
const computerCurrentScore = document.getElementById("computerCurrentScore");
let playerResult = 0;
let computerResult = 0;

field.forEach((option) => {
  option.addEventListener("click", function () {
    const playerInput = this.textContent;
    const optionsPc = ["rock", "paper", "scissors"];
    const computerInput =
      optionsPc[Math.floor(Math.random() * optionsPc.length)];

    game(playerInput, computerInput);
    currentScoreOfPlayers();

    if (checkWinner()) {
      playerResult = computerResult = 0;
      currentScoreOfPlayers();
    }
  });
});

function game(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("It's a draw..");
    console.log("hi");
    return;
  }
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerResult++;
    alert("You loose :( Paper beats Rock!");
    console.log("hi");
    return;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerResult++;
    alert("You win! Rock beats Paper!");
    console.log("hi");
    return;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerResult++;
    alert("You loose :( Scissors beats Paper!");
    console.log("hi");
    return;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerResult++;
    alert("You win! Paper beats Rock!");
    console.log("hi");
    return;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerResult++;
    alert("You loose :( Scissors beats Rock!");
    console.log("hi");
    return;
  } else {
    playerResult++;
    alert("You win! Scissors beats Paper!");
    console.log("hi2");
    return;
  }
}

function currentScoreOfPlayers() {
  playerCurrentScore.textContent = playerResult;
  computerCurrentScore.textContent = computerResult;
}
function checkWinner() {
  if (playerResult === 5 || computerResult === 5) {
    const winner =
      playerResult === 5
        ? "You win the game! Bravo!"
        : "Unlucky.. Computer wins the game!";
    alert(winner);
    return true;
  }
  return false;
}

const restartBtn = document.querySelector(".restart");
function startNewGame() {
  playerResult = 0;
  computerResult = 0;
  currentScoreOfPlayers();
}
restartBtn.addEventListener("click", startNewGame);

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

// console.log(`Player selection: ${playerSelection}`);
// console.log(`Computer selection: ${computerSelection}`);
