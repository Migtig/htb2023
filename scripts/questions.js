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


const game = {
  enemyE: document.getElementById('gpt-sprite'),
  playerE: document.getElementById('player-sprite'),

  currentQuestion: undefined,

  questionE: document.getElementById('question'),
  answer1E: document.getElementById('answer-1'),
  answer2E: document.getElementById('answer-2'),
  answer3E: document.getElementById('answer-3'),

  timer: 20,
  timerE: document.getElementById('timer'),

  pHealth: 3,
  pHealthE: document.getElementById('player-health'),

  eHealth: 5,
  eHealthE: document.getElementById('enemy-health'),

  generateQuestion: function() {
    game.currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    questions = questions.filter((index) => {
      return index !== game.currentQuestion;
  })
    game.questionE.textContent = game.currentQuestion.question;
    game.answer1E.textContent = game.currentQuestion.choices[0];
    game.answer2E.textContent = game.currentQuestion.choices[1];
    game.answer3E.textContent = game.currentQuestion.choices[2];
  },

  hitPlayer: function() {
    game.pHealth -= 1;
    game.pHealthE.textContent = game.pHealth;
  },

  hitEnemy: function() {
    game.eHealth -= 1;
    game.eHealthE.textContent = game.eHealth;
  },

  enemyDeath: function() {
    // TODO: Add enemy death animation
  },

  playerDeath: function() {
    // TODO: Add player death animation
  },

  checkAnswer: function(answer) {
    if (answer === game.currentQuestion.answer) {
      game.hitEnemy();
    } else {
      game.hitPlayer();
    }
  },

  countTimerDown: function() {
    game.timerE.textContent = game.timer;
    game.timer -= 1;
    if (game.timer === 0) {
      game.hitPlayer();
      game.timer = 20;
    }
  },

  startTimer: function() {
    game.timerE.textContent = game.timer;
    setInterval(game.countTimerDown, 1000);
  },

  stopTimer: function() {
    clearInterval(game.countTimerDown);
  },



}