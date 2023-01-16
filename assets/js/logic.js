
var currentQuestionIndex = 0;
var time = 60;
var timerId;
var penalty = 10;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var startScreen = document.getElementById("start-screen");
var finalScoreEl = document.getElementById("final-score");
var titleEl = document.getElementById("question-title");



//  Function that takes time of the clock 
function tick() {
    time--;
    timerEl.textContent = time;
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
  timerId = setInterval(countdown, 1000);
  timerEl.textContent = time;
  getQuestion();
}


// Function to get the questions 
function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  // update question with current question
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


// Function to see if answer are correct
// click on question answer either generate new question or end quiz if final question, and deduct time for answering wrong
function questionClick() {

  // 'this.value' shows if the answer if correct or not. need to view why this works and textcontent doesnt work
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalty time
    time -= 15;
    if (time < 0) {
      time = 0;
    }
    // code shows new time on screen along side if the answer is right or wrong
    timerEl.textContent = time;
    feedbackEl.textContent = "Wrong!";
  } else {
    feedbackEl.textContent = "Correct!";
  }
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);
  // moves onto the next question
  currentQuestionIndex++;
  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}


//Function that ends the quiz
function quizEnd() {
  clearInterval(timerId);
  endScreen.removeAttribute("class");
  // final score
  finalScoreEl.textContent = time;
  questionsEl.setAttribute("class", "hide");
}



function countdown() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}

// Function to save the high scores
function saveHighscore() {
  // box to insert initials to be saved in localstorage
  var initials = initialsEl.value.trim();
  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: time,
      initials: initials
    };
    // this should save score to the local storage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscores.html";
  }
}

// Function lets you press enter on your keyboard 
function pressEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// submit initials
submitBtn.onclick = saveHighscore;

// onkeyup = when the key goes up the action happens
initialsEl.onkeyup = pressEnter;
