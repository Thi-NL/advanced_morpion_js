import { stateDiv } from "./start";
import { nullState, winState, checkResult } from "./checkResult.js";

let currentPlayer = "croix";

const changeCurrentPlayer = (newPlayer) => (currentPlayer = newPlayer);

const newIcon = (box) => {
  const circle = document.createElement("div");
  const cross = document.createElement("div");
  const lineOne = document.createElement("div");
  const lineTwo = document.createElement("div");

  if (currentPlayer == "croix" && !nullState && !winState) {
    circle.className = "cercle icon";
    box.setAttribute("data-icon", "cercle");
    box.appendChild(circle);
    currentPlayer = "cercle";
    stateDiv.innerHTML = "- Au tour des croix -";
    checkResult(box);
  } else if (currentPlayer == "cercle" && !nullState && !winState) {
    lineOne.className = "line line-one";
    lineTwo.className = "line line-two";
    cross.appendChild(lineOne);
    cross.appendChild(lineTwo);
    cross.className = "croix icon";
    box.setAttribute("data-icon", "croix");
    box.appendChild(cross);
    currentPlayer = "croix";
    stateDiv.innerHTML = "- Au tour des cercles -";
    checkResult(box);
  }
};

export { stateDiv, changeCurrentPlayer, newIcon, currentPlayer };
