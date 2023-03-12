// Question Bank
const questionsBank = [
  // Level 1
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
  // Level 2
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
  // Level 3
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
];

let questions = questionsBank;

const gptSprite = document.getElementById("gpt-sprite");
const startGameBtn = document.getElementById("start-game");
const startMenu = document.getElementById("start-menu");
const introScene = document.getElementById("intro-scene");
const continueBtn = document.getElementById("continue");
const gameBox = document.getElementById("game-box");
const wrapper = document.querySelector(".wrapper");


startGameBtn.addEventListener("click", function () {
  startMenu.style.display = "none";
  introScene.style.display = "block";
});

continueBtn.addEventListener("click", function () {
  introScene.style.display = "none";
  gameBox.style.display = "flex";
  wrapper.style.maxWidth = "800px";
});

const game = {
  startBtn: document.getElementById('start-btn'),

  // Elements for the player and enemy sprites
  enemyE: document.getElementById('gpt-sprite'),
  playerE: document.getElementById('player-sprite'),

  // Keeps track of the current level
  level: 1,

  // Keeps track of the current question
  currentQuestion: undefined,

  // Elements for the question and answers
  questionE: document.getElementById('question'),
  answer1E: document.getElementById('answer-1'),
  answer2E: document.getElementById('answer-2'),
  answer3E: document.getElementById('answer-3'),

  // Keeps track of the timer
  timer: undefined,
  timerE: document.getElementById('timer'),
  timerInterval: undefined,

  // Keeps track of the player and enemy health
  pHealth: 3,
  pHealthE: document.getElementById('player-health'),
  eHealth: 5,
  eHealthE: document.getElementById('gpt-health'),

  generateQuestion: function() {
    // Picks a random question from the bank of unanswered questions, then removes it from the bank so it can't be picked again
    game.currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    questions = questions.filter((index) => {
      return index !== game.currentQuestion;
    })

    // Displays the question and answers
    game.questionE.textContent = game.currentQuestion.question;
    game.answer1E.textContent = game.currentQuestion.choices[0];
    game.answer2E.textContent = game.currentQuestion.choices[1];
    game.answer3E.textContent = game.currentQuestion.choices[2];

    game.questionE.style.display = 'block';
    game.answer1E.style.display = 'block';
    game.answer2E.style.display = 'block';
    game.answer3E.style.display = 'block';

    // Starts the timer
    game.startTimer(game.level);
  },

  // Damages the player
  hitPlayer: function() {
    game.pHealth -= 1;
    game.pHealthE.textContent = game.pHealth;
    if (game.pHealth === 0) {
      game.playerDeath();
    }
  },

  // Damages the enemy
  hitEnemy: function() {
    game.eHealth -= 1;
    game.eHealthE.textContent = game.eHealth;
    if (game.eHealth === 0) {
      game.enemyDeath();
    }
  },

  // Animates the death of the enemy
  enemyDeath: function() {
    console.log('enemy death');
    // TODO: Add enemy death animation
  },

  // Animates the death of the player
  playerDeath: function() {
    console.log('player death');
    // TODO: Add player death animation
  },

  // Checks if a question was answered correctly
  checkAnswer: function(answer) {
    // Stops the timer
    game.stopTimer();


    if (answer === game.currentQuestion.answer) {
      game.hitEnemy();
    } else {
      game.hitPlayer();
    }

    game.questionE.style.display = 'none';
    game.answer1E.style.display = 'none';
    game.answer2E.style.display = 'none';
    game.answer3E.style.display = 'none';
  },

  // Counts down the timer by 1 second
  countTimerDown: function() {
    game.timerE.textContent = game.timer;
    game.timer -= 1;
    if (game.timer === 0) {
      game.hitPlayer();
      game.stopTimer();
    }
  },

  // Starts the timer
  startTimer: function(level) {
    game.timer = 40 - (level * 10);
    game.timerE.style.display = 'block';
    game.timerE.textContent = game.timer;
    game.timerInterval = setInterval(game.countTimerDown, 1000);
  },

  // Stops the timer
  stopTimer: function() {
    clearInterval(game.timerInterval);
    // game.timerE.style.display = 'none';
  },

  // Initializes the level
  startLevel: function(level) {

  },


}


game.startBtn.addEventListener('click', function() {
  game.generateQuestion();

  game.answer1E.addEventListener('click', function() {
    game.checkAnswer(game.currentQuestion.choices[0]);
  });
  game.answer2E.addEventListener('click', function() {
    game.checkAnswer(game.currentQuestion.choices[1]);
  });
  game.answer3E.addEventListener('click', function() {
    game.checkAnswer(game.currentQuestion.choices[2]);
  });
});