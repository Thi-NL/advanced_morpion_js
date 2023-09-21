import { gameState } from "./gameState";

const gridContainer = document.querySelector(".grid-container");
const startButton = document.querySelector(".start");
const gameBar = document.querySelector(".game-bar");
const quitButton = document.querySelector(".leave");
const title = document.querySelector(".title");
const stateDiv = document.querySelector(".state-div");
const optionButtonDiv = document.querySelector(".option-button-div");
const computerOptionButton = document.querySelector(".computer-option");
const playerOptionButton = document.querySelector(".player-option");
const roundNumberInput = document.querySelector(".round-number");
const plusButton = document.querySelector(".plus");
const lessButton = document.querySelector(".less");
const boxes = document.querySelectorAll(".box");
const circleScoreDiv = document.querySelector(".circle-score-div");
const crossScoreDiv = document.querySelector(".cross-score-div");
let gameStatus = false;
let againstComputer = true;
let againstPlayer = false;
let roundNumber = 1;

plusButton.addEventListener("click", () => {
  if (roundNumber < 10) {
    roundNumber += 1;
    roundNumberInput.value = roundNumber.toString();
  }
});

lessButton.addEventListener("click", () => {
  if (roundNumber > 1) {
    roundNumber -= 1;
    roundNumberInput.value = roundNumber.toString();
  }
});

computerOptionButton.addEventListener("click", () => {
  if (!againstComputer) {
    computerOptionButton.classList.toggle("clicked-option");
    againstComputer = !againstComputer;
  }
  if (againstPlayer) {
    againstPlayer = !againstPlayer;
    playerOptionButton.classList.toggle("clicked-option");
  }
});

playerOptionButton.addEventListener("click", () => {
  if (!againstPlayer) {
    againstPlayer = !againstPlayer;
    playerOptionButton.classList.toggle("clicked-option");
  }
  if (againstComputer) {
    againstComputer = !againstComputer;
    computerOptionButton.classList.toggle("clicked-option");
  }
});

startButton.addEventListener("click", () => (!gameStatus ? start() : null));
quitButton.addEventListener("click", () => location.reload());

const start = () => {
  gameStatus = true;
  gridContainer.classList.toggle("active-container");
  startButton.classList.toggle("active");
  gameBar.classList.toggle("flex-active");
  optionButtonDiv.classList.toggle("flex-active");
  title.classList.toggle("second-position");
  stateDiv.innerHTML = "- Au tour des cercles -";

  for (let i = 1; i <= roundNumber; i++) {
    const circle = document.createElement("div");
    const cross = document.createElement("div");
    const lineOne = document.createElement("div");
    const lineTwo = document.createElement("div");
  
    circle.className = "cercle icon little-icon";
    circleScoreDiv.appendChild(circle);
  
    lineOne.className = "line line-one little-line";
    lineTwo.className = "line line-two little-line";
    cross.appendChild(lineOne);
    cross.appendChild(lineTwo);
    cross.className = "croix icon little-icon";
    crossScoreDiv.appendChild(cross);
  }

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      gameState(box);
    });
  });
};

// Ne fonctionne pas pour des raisons inconnues pour l'instant
// const againstChoice = (againstState, choiceButton, otherOption) => {
//   if (!otherOption){
//     againstState = !againstState;
//     againstState ? choiceButton.classList.toggle('clicked-option') : choiceButton.classList.toggle('clicked-option');
//   }
// }

export {
  start,
  gameBar,
  startButton,
  stateDiv,
  againstComputer,
  againstPlayer,
  boxes,
  roundNumber,
};
