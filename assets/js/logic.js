
var currentQuestionIndex = 0;
var time = 60;
var timerId;
var penalty = 10;

// variables to reference DOM elements
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var endScreen = document.getElementById("end-screen");
var startScreen = document.getElementById("start-screen");
var finalScoreEl = document.getElementById("final-score");
var titleEl = document.getElementById("question-title");



//  Function that takes time of the clock 
function tick() {
    time--;
    timeEl.textContent = time;
      if (time <= 0) {
      quizEnd();
    }
  }

// start quiz
startBtn.onclick = startQuiz;

//Function that starts the game. This hides the start screen, un-hides the questions, starts timer
function startQuiz() {
  // hide start screen
  startScreen.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  // start timer
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  getQuestion();
}


// Function to get the questions 
function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
  // update title with current question
  titleEl.textContent = currentQuestion.questions;
  // clear out any old question choices
  choicesEl.innerHTML = "";
  // loop to go over the choices
  currentQuestion.choices.forEach(function(choice, i) {
    // Code below lets you create a new button for each choice
    var choiceNode = document.createElement("button");
    //need class here - without it it is attributing choices on the button when it needs to be on the class.
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    // attach click event listener to each choice
    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);
  });
}
