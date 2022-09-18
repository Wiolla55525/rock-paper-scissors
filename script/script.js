console.log("hi");
const field = document.querySelectorAll(".only-player");
const playerCurrentScore = document.getElementById("playerCurrentScore");
const computerCurrentScore = document.getElementById("computerCurrentScore");
let playerResult = 0;
let computerResult = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerInput = "";
const computerColor = document.querySelectorAll(".only-PC");

field.forEach((option) => {
  option.addEventListener("click", function () {
    const playerInput = this.value;

    const optionsPc = ["rock", "paper", "scissors"];
    const pcInput = optionsPc[Math.floor(Math.random() * optionsPc.length)];

    game(playerInput, pcInput);
    currentScoreOfPlayers();

    if (checkWinner()) {
      playerResult = computerResult = 0;
      currentScoreOfPlayers();
    }
  });
});

function game(playerInput, pcInput) {
  const currentMatch = `${playerInput} vs ${pcInput}`;

  if (playerInput === pcInput) {
    alert(`${currentMatch} is a Draw`);
    return;
  }
  if (playerInput === "rock") {
    if (pcInput === "scissors") {
      alert(`${currentMatch} = You win! Rock beats Scissors!`);
      computerColor[2].style.backgroundColor = "#d32f2fcf";
      resetartComputerColor();
      playerResult++;
    } else {
      alert(`${currentMatch} = You loose :( Paper beats Rock!`);
      computerColor[1].style.backgroundColor = "#d32f2fcf";
      resetartComputerColor();
      computerResult++;
    }
  } else if (playerInput === "paper") {
    if (pcInput === "rock") {
      alert(`${currentMatch} = You win! Paper beats Rock!`);
      computerColor[0].style.backgroundColor = "#d32f2fcf";
      resetartComputerColor();
      playerResult++;
    } else {
      alert(`${currentMatch} = You loose :( Scissors beats Paper!`);
      computerColor[2].style.backgroundColor = "#d32f2fcf";
      resetartComputerColor();
      computerResult++;
    }
  } else {
    if (pcInput === "Paper") {
      alert(`${currentMatch} = You win! Scissors beats Paper!`);
      computerColor[1].style.backgroundColor = "#d32f2fcf";
      resetartComputerColor();
      playerResult++;
    } else {
      alert(`${currentMatch} = You loose :( Rock beats Scissors!`);
      computerColor[0].style.backgroundColor = "#d32f2fcf";
      resetartComputerColor();
      computerResult++;
    }
  }
}

function resetartComputerColor() {
  setTimeout(() => {
    for (const color of computerColor) {
      color.style.backgroundColor = "white";
    }
  }, 2000);
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
