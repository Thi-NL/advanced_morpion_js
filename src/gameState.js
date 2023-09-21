import { restartButton } from "./restart.js";
import {
  nullState,
  winState,
  changeCount,
  emptyWinTab,
  userIcon,
  checkWinner,
} from "./checkResult.js";
import { stateDiv, newIcon } from "./icon.js";
import { computerMoves } from "./computer.js";
import { againstComputer, againstPlayer } from "./start.js";

const gameState = (box) => {
  if (againstComputer && !box.dataset.icon && !nullState && !winState) {
    newIcon(box);
    window.setTimeout(() => {
      computerMoves(box);
    }, 250);
  }

  if (againstPlayer && !box.dataset.icon && !nullState && !winState){
    newIcon(box);
    checkWinner();
  }

  if ((winState || nullState) && !restartButton.classList.contains("visible")) {
    winState
      ? (stateDiv.innerHTML = `Les ${userIcon} ont gagnés`)
      : (stateDiv.innerHTML = "Match null");
    changeCount(0);
    emptyWinTab();
    restartButton.classList.toggle("visible");
  }
};

export { gameState };
