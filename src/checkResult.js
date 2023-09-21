import  { roundNumber } from './start';

let nullState = false;
let winState = false;
let userIcon;
let count = 0;
let winTab;
let circleWinTab = [];
let crossWinTab = [];

const changeNullState = (newNullState) => (nullState = newNullState);
const changeWinState = (newWinState) => (winState = newWinState);
const changeCount = (newCount) => (count = newCount);

const combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const checkResult = (box) => {
  userIcon = box.dataset.icon;
  let userPos = parseInt(box.dataset.pos);

  combinations.forEach((combination) => {
    if (combination.includes(userPos)) {
      combination.push(userIcon);
      winTab = combination.filter((element) => element === userIcon);
      if (winTab.length === 3) {
        winState = true;
      }
    }
  });
  
  count += 1;
  count === 9 && !winState ? (nullState = true) : null;
};

const emptyWinTab = () => {
  combinations.forEach((combination) => (combination.length = 3));
};

const checkWinner = () => {
  winState && userIcon === "cercle" ? circleWinTab.push(userIcon) : null;
  winState && userIcon === "croix" ? circleWinTab.push(userIcon) : null;

  circleWinTab.length === roundNumber ? console.log(`Les ${userIcon} gagne la partie`) : null;
  crossWinTab.length === roundNumber ? console.log(`Les ${userIcon} gagne la partie`) : null;
};

export {
  checkResult,
  emptyWinTab,
  nullState,
  winState,
  userIcon,
  count,
  combinations,
  changeCount,
  changeNullState,
  changeWinState,
  checkWinner,
};
