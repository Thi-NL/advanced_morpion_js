import { combinations, check2 } from "./checkResult.js";
import { newIcon, currentPlayer } from "./icon.js";
import { boxes } from "./start.js";

const computerMoves = (box) => {
  let crossTab;
  let circleTab;
  
  combinations.forEach((combination) => {
    crossTab = combination.filter((element) => element === "croix");
    circleTab = combination.filter((element) => element === "cercle");

    if (crossTab.length === 2) {
      combination.forEach((pos) => {
        for (let i = 0; i <= 2; i++) {
          let posElement = document.querySelector(
            `[data-pos="${combination[i]}"]`
          );
          if (!posElement.dataset.icon && currentPlayer === "cercle") {
            posElement.click();
          }
        }
      });
    }
    if (circleTab.length === 2) {
      combination.forEach((pos) => {
        for (let i = 0; i <= 2; i++) {
          let posElement = document.querySelector(
            `[data-pos="${combination[i]}"]`
          );
          if (!posElement.dataset.icon && currentPlayer === "cercle") {
            posElement.click();
          }
        }
      });
    }
  });
//   if (!boxes[7].dataset.icon) {
//     if (currentPlayer === "cercle") {
//         boxes[7].click();
//     }
//   }
  if (crossTab !== 2 && circleTab !== 2) {
    for (let i = 0; i <= 8; i++) {
      if (currentPlayer === "cercle") {
        if (!boxes[i].dataset.icon) {
          boxes[i].click();
        }
      }
    }
  }
};

export { computerMoves };
