import { restartButton } from './restart.js';
import { nullState, winState, changeCount, emptyWinTab, checkResult, userIcon } from './checkResult.js';
import { stateDiv, newIcon } from './icon.js';

const gameState = (box) => {
  if (!box.dataset.icon && !nullState && !winState) {
    newIcon(box);
    checkResult(box);
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
