import { combinations, count } from "./checkResult.js";
import { currentPlayer } from "./icon.js";
import { boxes } from "./start.js";

const computerMoves = (box) => {
  let crossTab;
  let circleTab;
  let cornerEgdesTab = [0, 2, 6, 8];

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
    }

    if (circleTab.length === 2) {
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

  count === 1 && !boxes[4].dataset.icon ? boxes[4].click() : null;

  const edgeCombinations = [
    combinations[0],
    combinations[3],
    combinations[5],
    combinations[2],
  ];

  const brickMove = [
    [1, 5],
    [5, 7],
    [7, 3],
    [3, 1],
  ];
  let brickMoveState = false;

  brickMove.forEach((combination) => {
    let checkBrickMove = 0;
    combination.forEach((pos) => {
      boxes[pos].dataset.icon === "cercle" ? (checkBrickMove += 1) : null;
    });
    if (checkBrickMove === 2) {
      brickMoveState = true;
    }
  });

  if (
    brickMoveState === true &&
    count === 3 &&
    boxes[4].dataset.icon === "croix"
  ) {
    edgeCombinations.forEach((edgeCombination) => {
      edgeCombination.forEach((edgePos) => {
        if (Number.isInteger(edgePos)) {
          if (boxes[edgePos - 1].dataset.icon) {
            if (boxes[edgePos - 1].dataset.icon === "cercle") {
              edgeCombination.forEach((test) => {
                if (Number.isInteger(test)) {
                  if (
                    !boxes[test - 1].dataset.icon &&
                    currentPlayer === "cercle"
                  ) {
                    boxes[test - 1].click();
                    brickMoveState = false;
                  }
                }
              });
            }
          }
        }
      });
    });
  }

  for (let i = 0; i <= 10; i++) {
    let random = Math.floor(Math.random() * 4);
    !boxes[cornerEgdesTab[random]].dataset.icon && currentPlayer === "cercle"
      ? boxes[cornerEgdesTab[random]].click()
      : null;
  }

  for (let i = 0; i <= 8; i++) {
    !boxes[i].dataset.icon && currentPlayer === "cercle"
      ? boxes[i].click()
      : null;
  }
};

export { computerMoves };
