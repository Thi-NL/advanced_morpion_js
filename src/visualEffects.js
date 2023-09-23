import { winCombination, winState } from "./checkResult";
import { boxes } from "./start";

const showCombinationWin = () => {
  if (winState) {
    for (let i = 0; i <= 8; i++) {
      if (
        i != winCombination[0] - 1 &&
        i != winCombination[1] - 1 &&
        i != winCombination[2] - 1
      ) {
        for (const child of boxes[i].children) {
          child.classList.add("circle-out-combination-color");
          if (child.classList.contains('line')){
              child.classList.add("cross-out-combination-color");
          }
        }
      }
    }
  }
};

export { showCombinationWin };
