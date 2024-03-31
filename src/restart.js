import { stateDiv, boxes, againstComputer } from "./start.js";
import { changeWinState, changeNullState } from "./checkResult.js";
import { computerMoves } from "./computer.js";
import { currentPlayer, changeCurrentPlayer } from "./icon.js";

const restartButton = document.querySelector(".restart");
let currentRound = 1;

const restart = () => {
  let icons = document.querySelectorAll(".icon");

  // bug si je déplace vers le bas
  stateDiv.innerHTML = `Au tour des ${currentPlayer === "croix" ? "cercle" : "croix"}`;
  restartButton.classList.toggle("visible");
  changeWinState(false);
  changeNullState(false);

  icons.forEach((icon) => icon.remove());
  for (let i = 0 ; i <= 8 ; i++) {
    !boxes[i].dataset.icon ? null : boxes[i].removeAttribute("data-icon");
  }

  currentRound += 1;

  if (Number.isInteger(currentRound / 2)){
    changeCurrentPlayer("cercle")
    againstComputer ? computerMoves() : null;
  } else {
    changeCurrentPlayer("croix")
  }

};

restartButton.addEventListener("click", () => restart());

export {restart, restartButton, currentRound};
