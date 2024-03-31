import { combinations, count } from "./checkResult.js";
import { currentPlayer } from "./icon.js";
import { boxes } from "./start.js";

const computerMoves = () => {

  const defenseAndAttack = () => {
    let crossTab;
    let circleTab;

    combinations.forEach((combination) => {
      crossTab = combination.filter((element) => element === "croix");

      if (crossTab.length === 2) {
        combination.forEach((pos) => {
          if (Number.isInteger(pos)) {
            !boxes[pos - 1].dataset.icon && currentPlayer === "cercle"
              ? boxes[pos - 1].click()
              : null;
          }
        });
      } 
    });

    combinations.forEach((combination) => {
      circleTab = combination.filter((element) => element === "cercle");

      if (circleTab.length === 2) {
        combination.forEach((pos) => {
          if (Number.isInteger(pos)) {
            !boxes[pos - 1].dataset.icon && currentPlayer === "cercle"
              ? boxes[pos - 1].click()
              : null;
          }
        });
      }
    });
  };

  const takeMiddle = () => {
    (count === 0 || count === 1) &&
    currentPlayer === "cercle" &&
    !boxes[4].dataset.icon
      ? boxes[4].click()
      : null;
  };

  const brickMoveCounter = () => {
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
      boxes[4].dataset.icon === "croix" &&
      !computerFirst
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
  };

  const takeCorner = () => {
    let cornerEgdesTab = [0, 2, 6, 8];
    let random = Math.floor(Math.random() * 4);
    !boxes[cornerEgdesTab[random]].dataset.icon && currentPlayer === "cercle"
      ? boxes[cornerEgdesTab[random]].click()
      : null;
  };

  const simpleMove = () => {
    for (let i = 0; i <= 10; i++) {
      for (let i = 0; i <= 8; i++) {
        !boxes[i].dataset.icon && currentPlayer === "cercle"
          ? boxes[i].click()
          : null;
      }
    }
  };

  const firstMove = () => {
    let random = Math.floor(Math.random() * 2);
    if (count === 0){
      random === 0 ? takeCorner() : null;
      random === 1 ? takeMiddle() : null;
    }
  };

  let computerFirst = false;
  count === 0 && currentPlayer === "cercle" ? (computerFirst = true) : null;

  if (computerFirst === false) {
    defenseAndAttack();
    takeMiddle();
    brickMoveCounter();
    takeCorner();
    simpleMove();
  }
  
  if (computerFirst === true) {
    firstMove();
    defenseAndAttack();
    takeCorner();
    simpleMove();
  }
};

export { computerMoves };

