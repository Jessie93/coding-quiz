// viewed many hours of @learnwithleon (on yourtube) he was very helpful for this task
var currentQuestionIndex = 0;
var time = 60;
var timerId;
var penalty = 10;

// variables to reference DOM elements
var questionsA = document.getElementById("questions");
var timerA = document.getElementById("time");
var choicesA = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsA = document.getElementById("initials");
var feedbackA = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var startScreen = document.getElementById("start-screen");
var finalScore = document.getElementById("final-score");
var questionTitle = document.getElementById("question-title");



//  Function that takes time of the clock. it should reduce the time by 1 second. 
function tick() {
    time--;
    timerA.textContent = time;
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
  questionsA.removeAttribute("class");
  // start timer
  timerId = setInterval(countdown, 1000);
  timerA.textContent = time;
  getQuestion();
}


// Function to get the questions 
function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  // update question with current question
  questionTitle.textContent = currentQuestion.questions;
  // clear out any old question choices
  choicesA.innerHTML = "";
  // loop to go over the choices
  currentQuestion.choices.forEach(function(choice, i) {
    // Code below lets you create a new button for each choice
    var optionBtn = document.createElement("button");
    //need 'class' here - without it it is attributing choices on the button when it needs to be on the class.
    optionBtn.setAttribute("class", "choice");
    optionBtn.setAttribute("value", choice);
    optionBtn.textContent = i + 1 + ". " + choice;
    // attach click event listener to each choice
    optionBtn.onclick = questionClick;
    choicesA.appendChild(optionBtn);
  });
}
// below code is to add audio to the quiz
var correctAudio = new Audio('./assets/sfx/correct.wav')
var incorrectAudio = new Audio('./assets/sfx/incorrect.wav')
// Function to see if answer are correct
// click on question answer either generate new question or end quiz if final question, and deduct time for answering wrong
function questionClick() {

  // 'this.value' shows if the answer if correct or not. need to view why this works and textcontent doesnt work
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalty time
    time -= 10;
    if (time < 0) {
      time = 0;
    }
    // code shows new time on screen along side if the answer is right or wrong
    timerA.textContent = time;
    feedbackA.textContent = "Wrong!";
    //below lets the audio play when the right or wrong button is pressed
    incorrectAudio.play();
  } else {
    feedbackA.textContent = "Correct!";
    correctAudio.play();
  }
  feedbackA.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackA.setAttribute("class", "feedback hide");
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
  finalScore.textContent = time;
  questionsA.setAttribute("class", "hide");
}



function countdown() {
  time--;
  timerA.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}

// Function to save the high scores
function saveScore() {
  // box to insert initials to be saved in localstorage
  var initials = initialsA.value.trim();
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
    saveScore();
  }
}

// submit initials
submitBtn.onclick = saveScore;

// onkeyup = when the key goes up the action happens
initialsA.onkeyup = pressEnter;
