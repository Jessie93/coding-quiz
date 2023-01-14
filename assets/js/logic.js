var currentQuestionIndex = 0;
var time = 60;
var timerId;
var penalty = 10;


// variables to reference DOM elements
var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit-button");
var startScreen = document.querySelector("#start-screen");
var questionsArray = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var highScores = document.querySelector("#highscores");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var choicesEl = document.querySelector("#choices");

