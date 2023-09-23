import { combinations, count } from "./checkResult.js";
import { currentPlayer } from "./icon.js";
import { boxes } from "./start.js";

const computerMoves = (box) => {
  let crossTab;
  let circleTab;
  let cornerEgdesTab = [0, 2, 6, 8];
  let middleEdgesTab = [1, 3, 5, 7];
  let middleTaken = false;
  let blindSpot1 = false;

  combinations.forEach((combination) => {
    crossTab = combination.filter((element) => element === "croix");
    circleTab = combination.filter((element) => element === "cercle");

    if (crossTab.length === 2) {
      combination.forEach((pos) => {
        for (let i = 0; i <= 2; i++) {
          let posElement = document.querySelector(
            `[data-pos="${combination[i]}"]`
          );
          !posElement.dataset.icon && currentPlayer === "cercle"
            ? posElement.click()
            : null;
        }
      });
    } else if (circleTab.length === 2) {
      combination.forEach((pos) => {
        for (let i = 0; i <= 2; i++) {
          let posElement = document.querySelector(
            `[data-pos="${combination[i]}"]`
          );
          !posElement.dataset.icon && currentPlayer === "cercle"
            ? posElement.click()
            : null;
        }
      });
    }
  });

  crossTab !== 2 && circleTab !== 2 && count === 1 && !boxes[4].dataset.icon
    ? boxes[4].click()
    : null;

  if (
    crossTab !== 2 &&
    circleTab !== 2 &&
    boxes[4].dataset.icon === "cercle" &&
    count === 1
  ) {
    middleEdgesTab.forEach((edge) => {
      let random = Math.floor(Math.random() * 4);
      !boxes[middleEdgesTab[random]].dataset.icon && currentPlayer === "cercle"
        ? boxes[middleEdgesTab[random]].click()
        : null;
    });
    middleTaken = true;
  }


  if (count === 3){
    combinations.forEach((combination) => {
      let combinationPosTaken = 0;
      combination.forEach((pos) => {
        if (Number.isInteger(pos)) {
          boxes[pos - 1].dataset.icon ? (combinationPosTaken += 1) : null;
        }
        if (combinationPosTaken === 3) {
          blindSpot1 = true;
        }
      });
    });
  }

  const edgeCombinations = [
    combinations[0],
    combinations[3],
    combinations[5],
    combinations[2],
  ];

  let random2 = Math.floor(Math.random() * 4);


  if (blindSpot1 === true && middleTaken === true) {
    edgeCombinations.forEach((edgeCombination) => {
      edgeCombination.forEach((edgePos) => {
        if (Number.isInteger(edgePos)) {
          if(boxes[edgePos - 1].dataset.icon){
            if (boxes[edgePos - 1].dataset.icon === "cercle") {
              edgeCombination.forEach((test) => {
                if (Number.isInteger(test)){
                  if (!boxes[test - 1].dataset.icon && currentPlayer === "cercle") {
                    blindSpot1 = false;
                    boxes[test - 1].click();
                  }
                }
              });
            }
          }
        }
      });
    });
  } else if (crossTab !== 2 && circleTab !== 2 && !boxes[cornerEgdesTab[random2]].dataset.icon) {
    currentPlayer === "cercle" ? boxes[cornerEgdesTab[random2]].click() : null;
  }
};

export { computerMoves };
