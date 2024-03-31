import { gameState } from "./gameState";
import { circleWinTab, crossWinTab } from "./checkResult";

const gameDiv = document.querySelector(".game-div");
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
const crossScore = document.querySelector(".cross-score");
const circleScore = document.querySelector(".circle-score");
let gameStatus = false;
let againstComputer = true;
let againstPlayer = false;
let roundNumber = 1;

plusButton.addEventListener("click", () => {
  if (roundNumber < 8) {
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
  gameDiv.classList.toggle("flex-active");
  startButton.classList.toggle("active");
  gameBar.classList.toggle("flex-active");
  optionButtonDiv.classList.toggle("flex-active");
  title.classList.toggle("second-position");
  stateDiv.innerHTML = "- Au tour des cercles -";

  for (let i = 1; i <= roundNumber; i++) {
    
    const circleContainer = document.createElement("div");
    circleContainer.className = "circle-container little-div";
    const circle = document.createElement("div");
    circle.className = "little-circle";

    circleContainer.appendChild(circle);
    circleScoreDiv.appendChild(circleContainer);
    
    const crossContainer = document.createElement("div");
    crossContainer.className = "cross-container little-div";
    const cross = document.createElement("i");
    cross.className = "fa-solid fa-xmark";

    crossContainer.appendChild(cross);
    crossScoreDiv.appendChild(crossContainer);
  }

  let littleCircles = document.querySelectorAll(".little-circle");
  let littleCrosses = document.querySelectorAll(".fa-xmark");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      gameState(box);

      for (let i = 0; i < circleWinTab.length; i++) {
        littleCircles[i].classList.add("round-circle-color");
      }

      for (let i = 0; i < crossWinTab.length; i++) {
        littleCrosses[i].classList.add("round-cross-color");
      }
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
