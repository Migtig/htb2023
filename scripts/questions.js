// Question Bank
const questionsBank = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does JavaScript do?",
    choices: [
      "Adds interactivity to web pages",
      "Styles web pages",
      "Creates animations",
    ],
    answer: "Adds interactivity to web pages",
  },
  {
    question: "What is the CSS property used to add a background image?",
    choices: ["background-color", "background-image", "background"],
    answer: "background-image",
  },
  {
    question: "What is the HTML tag used to create a hyperlink?",
    choices: ["<a>", "<h>", "<p>"],
    answer: "<a>",
  },
  {
    question: "What is a closure in JavaScript?",
    choices: [
      "A function that has access to variables in its outer scope",
      "A function that returns another function",
      "A function that is called when the page loads",
    ],
    answer: "A function that has access to variables in its outer scope",
  },
  {
    question: "What is the HTML attribute used to specify an image source?",
    choices: ["src", "href", "alt"],
    answer: "src",
  },
  {
    question: "What is the CSS property used to change the font size?",
    choices: ["font-weight", "font-size", "font-family"],
    answer: "font-size",
  },
  {
    question:
      "What is the JavaScript method used to add an element to the end of an array?",
    choices: ["push()", "pop()", "shift()"],
    answer: "push()",
  },
  {
    question: "What is the HTML tag used to define a section of the page?",
    choices: ["<div>", "<section>", "<article>"],
    answer: "<div>",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    choices: [
      "== compares value, === compares value and type",
      "== compares value and type, === compares value",
      "== compares reference, === compares value",
    ],
    answer: "== compares value, === compares value and type",
  },
  {
    question: "What is the CSS property used to create a drop shadow?",
    choices: ["box-shadow", "text-shadow", "shadow"],
    answer: "box-shadow",
  },
  {
    question: "What is a higher-order function in JavaScript?",
    choices: [
      "A function that takes another function as an argument or returns a function",
      "A function that has access to variables in its outer scope",
      "A function that is called when the page loads",
    ],
    answer:
      "A function that takes another function as an argument or returns a function",
  },
  {
    question: "What is the HTML tag used to create a numbered list?",
    choices: ["<ul>", "<li>", "<ol>"],
    answer: "<ol>",
  },
  {
    question:
      "What is the JavaScript method used to remove an element from an array?",
    choices: ["pop()", "splice()", "slice()"],
    answer: "splice()",
  },
  {
    question: "What does HTTP stand for?",
    choices: ["Hyper Text Transfer Protocol", "Hyperlinks and Text Transfer Protocol", "Home Tool Transfer Protocol"],
    answer: "Hyper Text Transfer Protocol",
  },
  {
    question: "What is the difference between a GET and a POST request?",
    choices: [
      "GET requests data from a server, while POST submits data to a server",
      "POST requests data from a server, while GET submits data to a server",
      "GET and POST are the same type of request",
    ],
    answer: "GET requests data from a server, while POST submits data to a server",
  },
  {
    question: "What is a CSS selector?",
    choices: ["A pattern that matches HTML elements to apply styles to", "A function that selects elements in JavaScript", "A type of HTML tag"],
    answer: "A pattern that matches HTML elements to apply styles to",
  },
  {
    question: "What is the HTML tag used to create a table?",
    choices: ["<table>", "<tr>", "<td>"],
    answer: "<table>",
  },
  {
    question: "What is the CSS property used to center an element horizontally?",
    choices: ["text-align", "margin-left", "margin-right"],
    answer: "margin: 0 auto;",
  },
  {
    question: "What is the JavaScript method used to convert a string to a number?",
    choices: ["parseInt()", "toString()", "toFixed()"],
    answer: "parseInt()",
  },
  {
    question: "What is the HTML tag used to create a line break?",
    choices: ["<br>", "<hr>", "<p>"],
    answer: "<br>",
  },
  {
    question: "What is the CSS property used to make an element's font bold?",
    choices: ["font-weight", "font-size", "text-transform"],
    answer: "font-weight",
  },
  {
    question: "What is the JavaScript method used to add an element to the beginning of an array?",
    choices: ["unshift()", "shift()", "pop()"],
    answer: "unshift()",
  },
  {
    question: "What is the HTML tag used to create an unordered list?",
    choices: ["<ul>", "<li>", "<ol>"],
    answer: "<ul>",
  },
  {
    question: "What is the difference between null and undefined in JavaScript?",
    choices: [
      "null is an intentional absence of any object value, while undefined is the absence of a value",
      "undefined is an intentional absence of any object value, while null is the absence of a value",
      "null and undefined are the same thing",
    ],
    answer: "null is an intentional absence of any object value, while undefined is the absence of a value",
  },
  {
    question: "What is the CSS property used to create a gradient?",
    choices: ["background-image", "background-color", "gradient"],
    answer: "background-image",
  },
  {
    question: "What is a callback function in JavaScript?",
    choices: [
      "A function that is passed as an argument to another function and is executed when an event occurs",
      "A function that returns another function",
      "A function that is called when the page loads",
    ],
    answer: "A function that is passed as an argument to another function and is executed when an event occurs",
  }
];

let questions = questionsBank;

const gptSprite = document.getElementById("gpt-sprite");
const startGameBtn = document.getElementById("start-game");
const startMenu = document.getElementById("start-menu");
const introScene = document.getElementById("intro-scene");
const continueBtn = document.getElementById("continue");
const gameoverPlayAgainBtn = document.getElementById("gameover-play-again");
const wingamePlayAgainBtn = document.getElementById("wingame-play-again");
const winScreen = document.getElementById("you-win-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const gameBox = document.getElementById("game-box");
const wrapper = document.querySelector(".wrapper");
const levelInfo = document.querySelector(".level-info")

startGameBtn.addEventListener("click", function () {
  startMenu.style.display = "none";
  introScene.style.display = "block";
});

continueBtn.addEventListener("click", function () {
  introScene.style.display = "none";
  gameBox.style.display = "flex";
  wrapper.style.maxWidth = "800px";
  game.level = 1;
  game.startLevel(game.level);
});

gameoverPlayAgainBtn.addEventListener("click", function () {
  winScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  gameBox.style.display = "flex";
  wrapper.style.maxWidth = "800px";
  questions = questionsBank;
  game.level = 1;
  game.startLevel(game.level);
});

wingamePlayAgainBtn.addEventListener("click", function () {
  winScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  gameBox.style.display = "flex";
  wrapper.style.maxWidth = "800px";
  questions = questionsBank;
  game.level = 1;
  game.startLevel(game.level);
});






// GAME OBJECT
// ____________________________________________________________
const game = {
  startBtn: document.getElementById("start-btn"),

  // Game stage elements
  enemyE: document.getElementById("gpt-sprite"),
  playerE: document.getElementById("player-sprite"),
  background: document.getElementById('background'),

  // Keeps track of the current level
  level: 1,

  // Keeps track of the current question
  currentQuestion: undefined,

  // Elements for the question and answers
  questionE: document.getElementById("question"),
  answer1E: document.getElementById("answer-1"),
  answer2E: document.getElementById("answer-2"),
  answer3E: document.getElementById("answer-3"),

  // Keeps track of the timer
  timer: undefined,
  timerE: document.getElementById("timer"),
  timerInterval: undefined,

  // Keeps track of the player and enemy health
  pHealth: 3,
  pHealthE: document.getElementById("player-health"),
  eHealth: 5,
  eHealthE: document.getElementById("gpt-health"),

  generateQuestion: function () {
    // if (game.timerInterval !== undefined) {
    //   return;
    // }

    // Picks a random question from the bank of unanswered questions, then removes it from the bank so it can't be picked again
    game.currentQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    questions = questions.filter((index) => {
      return index !== game.currentQuestion;
    });

    console.log(questions.length)

    // Displays the question and answers
    game.questionE.textContent = game.currentQuestion.question;
    game.answer1E.textContent = game.currentQuestion.choices[0];
    game.answer2E.textContent = game.currentQuestion.choices[1];
    game.answer3E.textContent = game.currentQuestion.choices[2];

    game.questionE.style.display = "block";
    game.answer1E.style.display = "block";
    game.answer2E.style.display = "block";
    game.answer3E.style.display = "block";

    // Starts the timer
    game.startTimer(game.level);
  },

  // Damages the player
  hitPlayer: function () {
    game.pHealth -= 1;
    game.pHealthE.lastChild.remove();

    // game.enemyE.classList.remove("gpt-idle");
    // game.enemyE.classList.add("gpt-attack");
    // setTimeout(game.enemyE.classList.remove("gpt-attack"), 1500);
    // setTimeout(game.enemyE.classList.add("gpt-idle"), 1500);

    // setTimeout(function() {
    //   game.playerE.classList.remove("player-idle")
    //   game.playerE.classList.add("player-hurt")
    //   setTimeout(game.playerE.classList.remove("player-hurt"), 1500)
    //   setTimeout(game.playerE.classList.add("player-idle"), 1500)
    // }, 1500)

    
    if (game.pHealth === 0) {
      game.playerDeath();
    }
  },

  // Damages the enemy
  hitEnemy: function () {
    game.eHealth -= 1;
    game.eHealthE.lastChild.remove();
    if ((game.eHealth === 0) && (game.level === 3)) {
      game.enemyDeath();
    }
    else if (game.eHealth === 0) {
      game.level += 1;
      game.startLevel(game.level);
    }
  },

  // Animates the death of the enemy
  enemyDeath: function () {
    console.log("enemy death");
    gameBox.style.display = "none";
    winScreen.style.display = "block";
    // TODO: Add enemy death animation
  },

  // Animates the death of the player
  playerDeath: function () {
    console.log("player death");
    gameBox.style.display = "none";
    gameOverScreen.style.display = "block";
    // TODO: Add player death animation
  },

  // Checks if a question was answered correctly
  checkAnswer: function (answer) {
    // Stops the timer
    game.stopTimer();
    oldLevel = game.level;

    game.questionE.style.display = "none";
    game.answer1E.style.display = "none";
    game.answer2E.style.display = "none";
    game.answer3E.style.display = "none";

    if (answer === game.currentQuestion.answer) {
      game.hitEnemy();
    } else {
      game.hitPlayer();
    }


    console.log(game.eHealth, game.pHealth)
    if (oldLevel == game.level) {
      game.generateQuestion();
    }
  },

  // Counts down the timer by 1 second
  countTimerDown: function () {
    game.timerE.textContent = game.timer;
    game.timer -= 1;
    if (game.timer === 0) {
      game.hitPlayer();
      game.stopTimer();
    }
  },

  // Starts the timer
  startTimer: function (level) {
    game.timer = 40 - level * 10;
    game.timerE.style.display = "block";
    game.timerE.textContent = game.timer;
    game.timerInterval = setInterval(game.countTimerDown, 1000);
  },

  // Stops the timer
  stopTimer: function () {
    clearInterval(game.timerInterval);
    game.timerInterval = undefined;
    // game.timerE.style.display = 'none';
  },

  populatePHealth: function(health) {
    for (let i = 0; i < game.pHealth; i++) {
      if (game.pHealthE.lastChild !== null) {
        game.pHealthE.lastChild.remove();
      }
    }

    game.pHealth = health;
    for (let i = 0; i < health; i++) {
      let healthE = document.createElement('img');
      healthE.classList.add('health');
      healthE.src = './images/sprites/health.png';
      game.pHealthE.appendChild(healthE);
    }
  },

  populateEHealth: function(health) {
    for (let i = 0; i < game.eHealth; i++) {
      if (game.eHealthE.lastChild !== null) {
        game.eHealthE.lastChild.remove();
      }
    }

    game.eHealth = health;
    for (let i = 0; i < health; i++) {
      let healthE = document.createElement('img');
      healthE.classList.add('health');
      healthE.src = './images/sprites/health.png';
      game.eHealthE.appendChild(healthE);
    }
  },

  // Initializes the level
  startLevel: function (level) {
    if (game.timerInterval !== undefined) {
      game.stopTimer();
    }

    console.log(level);
    levelInfo.innerHTML = `Level ${game.level}`;
    game.background.src = `./images/backgrounds/bg-lvl-${level}.png`;
    game.populateEHealth(4 + level);
    game.populatePHealth(3);
    game.generateQuestion();
  },
};


game.answer1E.addEventListener("click", function () {
  game.checkAnswer(game.currentQuestion.choices[0]);
});
game.answer2E.addEventListener("click", function () {
  game.checkAnswer(game.currentQuestion.choices[1]);
});
game.answer3E.addEventListener("click", function () {
  game.checkAnswer(game.currentQuestion.choices[2]);
});
