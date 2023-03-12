"use strict";

const gptSprite = document.getElementById("gpt-sprite");
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
