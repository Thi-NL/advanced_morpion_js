import  { roundNumber } from './start';
const winModalContainer = document.querySelector('.win-modal-container');
const winModalText = document.querySelector('.win-modal-text');
const winModalButton = document.querySelector('.win-modal-button');

let nullState = false;
let winState = false;
let userIcon;
let count = 0;
let winTab;
let circleWinTab = [];
let crossWinTab = [];
let winCombination;

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
        winCombination = combination;
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
  winState && userIcon === "croix" ? crossWinTab.push(userIcon) : null;

  winModalButton.addEventListener('click', () => location.reload());

  if (circleWinTab.length === roundNumber){
    winModalContainer.classList.toggle('flex-active');
    winModalText.innerHTML = `Les ${userIcon} gagnent la partie`;
  }
  if (crossWinTab.length === roundNumber){
    winModalContainer.classList.toggle('flex-active');
    winModalText.innerHTML = `Les ${userIcon} gagnent la partie`;
  }
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
  circleWinTab,
  crossWinTab,
  winCombination,
};
