console.log("hi");
const field = document.querySelectorAll(".only-player");
const playerCurrentScore = document.getElementById("playerCurrentScore");
const computerCurrentScore = document.getElementById("computerCurrentScore");
let playerResult = 0; //pscore
let computerResult = 0; //cscore

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
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerResult++;
    alert("You loose :( Paper beats Rock!");
    console.log("hi");
    return;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerResult++;
    alert("You win! Rock beats Paper!");
    return;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerResult++;
    alert("You loose :( Scissors beats Paper!");
    console.log("hi");
    return;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerResult++;
    alert("You win! Paper beats Rock!");
    console.log("hi");
    return;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerResult++;
    alert("You loose :( Scissors beats Rock!");
    console.log("hi");
    return;
  } else {
    playerResult++;
    alert("You win! Scissors beats Paper!");
    console.log("hi");
    return;
  }
}

// function game(pInput, cInput) {
//   const currentMatch = `${pInput} vs ${cInput}`;
//   if (pInput === cInput) {
//     alert(`${currentMatch} is a Tie`);
//     return;
//   }

//   if (pInput === "Rock") {
//     if (cInput === "Scissors") {
//       alert(`${currentMatch} = You Win`);
//       pScore++;
//     } else {
//       alert(`${currentMatch} = Computer Wins`);
//       cScore++;
//     }
//   }
//   //Check for Paper
//   else if (pInput === "Paper") {
//     if (cInput === "Rock") {
//       alert(`${currentMatch} = You Win`);
//       pScore++;
//     } else {
//       alert(`${currentMatch} = Computer Wins`);
//       cScore++;
//     }
//   }
//   //Check for Scissors
//   else {
//     if (cInput === "Paper") {
//       alert(`${currentMatch} = You Win`);
//       pScore++;
//     } else {
//       alert(`${currentMatch} = Computer Wins`);
//       cScore++;
//     }
//   }
// }

function currentScoreOfPlayers() {
  playerCurrentScore.textContent = playerResult;
  computerCurrentScore.textContent = computerResult;
}
function checkWinner() {
  if (playerResult === 5 || computerResult === 5) {
    const winner =
      playerResult === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert(winner);
    return true;
  }
  return false;
}

// const rock = document.getElementById("#rock");
// const paper = document.getElementById("#paper");
// const scissors = document.getElementById("#scissors");
// const play = document.querySelector(".play");
// const playerSide = document.querySelector(".player-left-side");
// const compSide = document.querySelector(".computer-right-side");

// const restartBtn = document.querySelector(".restart")

// const fivegames = () => {
//     playerResult = 0;
//     computerResult = 0;

//     for (let i = 1; i <=5; i++) {
//         console.log(`round ${i}`);
//     }
// }
// fivegames();

// function fiveRoundsWinner() {
//   const resultContainer = document.getElementById("#resultContainer");
//   switch (playerResult === 5 || computerResult === 5) {
//     case playerResult > computerResult:
//       resultContainer.innerHTML = "Player Won!";
//       startNewGame();
//       break;
//     case playerResult < computerResult:
//       resultContainer.innerHTML = "Unlucky.. Computer Won :(";
//       startNewGame();
//       break;
//     default:
//       console.log("No winner yet..");
//   }
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

// console.log(`Player selection: ${playerSelection}`);
// console.log(`Computer selection: ${computerSelection}`);

// const choiceUser = document.querySelectorAll(".player-left-side .field-play");

// for (let i = 0; i < choiceUser.length; i++) {
//     choiceUser[i].addEventListener("click", () => {
//         console.log([i]);
//         backgroundChange([i]);
//     })
//     // getComputerChoice()
// }

// function backgroundChange([i]) {
//     field[i].style.backgroundColor = '#d32f2ff0';
// }

// function startNewGame() {
//     playerResult = 0;
//     computerResult = 0;
//     currentScoreOfPlayers();
//   }
