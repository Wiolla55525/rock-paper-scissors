import { game, getComputerChoice, playerResult, computerResult } from "../script.js";

const playerCurrentScore = documment.getElementById("#playerCurrentScore");
const computerCurrentScore = documment.getElementById("#computerCurrentScore");
const rock = document.getElementById("#rock");
const paper = document.getElementById("#paper");
const scissors = document.getElementById("#scissors");

rock.addEventListener("click", () => {
  game("rock", getComputerChoice());
  playerCurrentScore.innerHTML = playerResult;
  computerCurrentScore.innerHTML = computerResult;
});

paper.addEventListener("click", () => {
  game("paper", getComputerChoice());
  playerCurrentScore.innerHTML = playerResult;
  computerCurrentScore.innerHTML = computerResult;
});

scissors.addEventListener("click", () => {
  game("paper", getComputerChoice());
  playerCurrentScore.innerHTML = playerResult;
  computerCurrentScore.innerHTML = computerResult;
});
