"use strict";

const x = document.querySelectorAll(".X");
const o = document.querySelectorAll(".O");
const gameContainer = document.querySelector(".game-area");
const gameBox = document.querySelectorAll(".grid-item");
const win = document.querySelector(".win__message");
const winPL1 = document.querySelector(".text--1");
const winPL2 = document.querySelector(".text--2");
const newGame = document.querySelector(".newGame__btn");
const draw = document.querySelector(".draw");
const overlay = document.querySelector(".overlay");
let click = 0;

const resetGame = function () {
  win.classList.add("hidden");
  winPL2.classList.add("hidden");
  winPL1.classList.add("hidden");
  overlay.classList.add("hidden");
  draw.classList.add("hidden");
  o.forEach((el) => (el.textContent = ""));
  click = 0;
};
const displayWinningMessage = function () {
  overlay.classList.remove("hidden");
  win.classList.remove("hidden");
};
//Combination functions
const winCombination = function (el1, el2, el3) {
  if (
    o[el1].textContent === "X" &&
    o[el2].textContent === "X" &&
    o[el3].textContent === "X"
  ) {
    // overlay.classList.remove("hidden");
    // win.classList.remove("hidden");

    displayWinningMessage();
    winPL1.classList.remove("hidden");
  }
  if (
    o[el1].textContent === "O" &&
    o[el2].textContent === "O" &&
    o[el3].textContent === "O"
  ) {
    displayWinningMessage();
    winPL2.classList.remove("hidden");
  }
};

const drawCombinations = function () {
  let countX = 0;
  let countO = 0;
  o.forEach((el) => {
    if (el.textContent === "X") countX++;
    if (el.textContent === "O") countO++;
  });

  if (
    ((countO == 4 && countX == 5) || (countO == 5 && countX == 4)) &&
    win.classList.contains("hidden")
  ) {
    displayWinningMessage();
    draw.classList.remove("hidden");
  }
};
//Events
gameContainer.addEventListener("click", function (e) {
  click++;
  const target = e.target;
  if (!target.classList.contains("grid-item")) return;
  if (click % 2 == 0) {
    target.children[0].textContent = "O";
  }

  if (click % 2 != 0) {
    target.children[0].textContent = "X";
  }

  //Reset game
  newGame.addEventListener("click", function () {
    resetGame();
  });
  //Winning combinations

  winCombination(0, 1, 2);
  winCombination(3, 4, 5);
  winCombination(6, 7, 8);
  winCombination(0, 3, 6);
  winCombination(0, 3, 6);
  winCombination(1, 4, 7);
  winCombination(2, 5, 8);
  winCombination(0, 4, 8);
  winCombination(2, 4, 6);

  //Draw
  drawCombinations();
});
