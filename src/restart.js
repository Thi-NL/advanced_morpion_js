import { changeCurrentPlayer } from "./icon.js";
import { stateDiv, boxes } from "./start.js";
import { changeWinState, changeNullState } from "./checkResult.js";

const restartButton = document.querySelector(".restart");

const restart = () => {
  let icons = document.querySelectorAll(".icon");

  // bug si je déplace vers le bas
  stateDiv.innerHTML = "- Au tour des croix -";
  restartButton.classList.toggle("visible");
  changeWinState(false);
  changeNullState(false);

  icons.forEach((icon) => icon.remove());
  for (let i = 0 ; i <= 8 ; i++) {
    !boxes[i].dataset.icon ? null : boxes[i].removeAttribute("data-icon");
  }
};

restartButton.addEventListener("click", () => restart());

export {restart, restartButton};
