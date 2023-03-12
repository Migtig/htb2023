"use strict";

const gptSprite = document.getElementById("gpt-sprite");
const startGameBtn = document.getElementById("start-game");
const startMenu = document.getElementById("start-menu");
const introScene = document.getElementById("intro-scene");
const continueBtn = document.getElementById("continue");
const gameBox = document.getElementById("game-box");
const wrapper = document.querySelector(".wrapper");

const frames = [
  "gpt-idle-frame1.png",
  "gpt-idle-frame2.png",
  "gpt-idle-frame3.png",
  "gpt-idle-frame4.png",
];
let index = 0;

function animateSprite() {
  gptSprite.src = "images/sprites/" + frames[index];
  index++;
  if (index == frames.length) {
    index = 0;
  }
}

setInterval(animateSprite, 400);

startGameBtn.addEventListener("click", function () {
  startMenu.style.display = "none";
  introScene.style.display = "block";
});

continueBtn.addEventListener("click", function () {
  introScene.style.display = "none";
  gameBox.style.display = "block";
  wrapper.style.maxWidth = "800px";
});
