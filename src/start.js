import { gameState } from './gameState';

const gridContainer = document.querySelector(".grid-container");
const startButton = document.querySelector(".start");
const quitButton = document.querySelector('.leave');
const title = document.querySelector('.title');
const stateDiv = document.querySelector(".state-div");
let gameStatus = false;

const start = () => {
  const createBoxes = (boxNum) => {
    const box = document.createElement("div");
    box.className = "box";
    box.setAttribute("data-pos", boxNum);
    gridContainer.appendChild(box);
  };

  for (let i = 1; i <= 9; i++) {
    createBoxes(i);
  }

  const boxes = document.querySelectorAll(".box");

  gameStatus = true;
  gridContainer.classList.toggle("active-container");
  startButton.classList.toggle("active");
  quitButton.classList.toggle("visible");
  title.classList.toggle("second-position");
  stateDiv.innerHTML = "- Au tour des cercles -";

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      gameState(box);
    });
  });
};

startButton.addEventListener("click", () => (!gameStatus ? start() : null));
quitButton.addEventListener('click', () => location.reload());

export {start, quitButton, startButton, stateDiv };