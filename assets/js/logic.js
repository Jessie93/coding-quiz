// var currentQuestionIndex = 0;
// var time = 60;
// var timerId;
// var penalty = 10;


// // variables to reference DOM elements
// var timeEl = document.querySelector("#time");
// var startBtn = document.querySelector("#start");
// // var submitBtn = document.querySelector("#submit-button");
// var startScreen = document.querySelector("#start-screen");
// var questionsArray = document.querySelector("#questions");
// var endScreen = document.querySelector("#end-screen");
// // var highScores = document.querySelector("#highscores");
// var initialsEl = document.querySelector("#initials");
// var feedbackEl = document.querySelector("#feedback");
// var choicesEl = document.querySelector("#choices");

// // user clicks button to start quiz
// startBtn.onclick = startQuiz;

// //Function that starts the game. This hides the start screen, un-hides the questions, starts timer
// function startQuiz() {
//     startScreen.setAttribute("class", "hide");
//     questionsArray.setAttribute("class", "start");
//     timerId = setInterval(tick, 1000);
//     timeEl.textContent = time;
//     getQuestion();
//   }

// //Function that takes time of the clock 
// function tick() {
//     time--;
//     timeEl.textContent = time;
//       if (time <= 0) {
//       quizEnd();
//     }
//   }

// // Function to get the questions 
//   function getQuestion() {
//     var currentQuestion = questions[currentQuestionIndex];
//     // update title with current question
//     var titleEl = document.querySelector("#question-title");
//     titleEl.textContent = currentQuestion.questions;
//     // clear out any old question choices
//     choicesEl.innerHTML = "";
  
// // loop to go over the choices
//     currentQuestion.choices.forEach(function(choice, i) {
//     // Code below lets you create a new button for each choice
//       var choiceNode = document.createElement("button");
//     //need class here - without it it is attributing choices on the button when it needs to be on the class.
//       choiceNode.setAttribute("class", "choices");
//       choiceNode.textContent = i + 1 + ". " + choice;
//     // attach click event listener to each choice
//       choiceNode.addEventListener("click", questionClick);
//     // display on the page
//       choicesEl.appendChild(choiceNode);
//     });
    
//   }

//   // Function to see if answer are correct
//   // click on question answer either generate new question or end quiz if final question, and deduct time for answering wrong
// function questionClick() {
//   // check if user guessed wrong
//   if (this.textContent !== questions[currentQuestionIndex].answer) {

//     // penalize time
//     time -= penalty;
//     if (time < 0) {
//       time = 0;
//     }

//     feedbackEl.textContent = "Wrong!"; 
//   } else {
//     feedbackEl.textContent = "Correct!";
//   }
//   if(currentQuestionIndex === questions.length) {
//       quizEnd();
//   } 

//     // flash right/wrong feedback on page for half a second
//     feedbackEl.setAttribute("class", "feedback");
//     setTimeout(function() {
//       feedbackEl.setAttribute("class", "feedback hide");
//     }, 1000);
  
//     // move to next question
//     currentQuestionIndex++;
//     // getQuestion();
  
//     // check if we've run out of questions
//     if (currentQuestionIndex === questions.length) {
//       quizEnd();
//     } 
// //     else {
// //       getQuestion();
// //     }
//  }
  

// //Function that ends the quiz
// function quizEnd(){
//   clearInterval(timerId);
//   questionsArray.setAttribute("class", "hide");
//   endScreen.setAttribute("class", "start");
//   var finalScore = (timeEl.textContent/60)*100;
//   document.querySelector("#final-score").textContent = finalScore;
//   document.querySelector("#final-score").textContent = time;
//   // show the input for initials and submit button
//   initialsEl.style.display = "block";
//   submitBtn.style.display = "block";
//   }
  
//   // function to submit scores
//   submitBtn.onclick = function() {
//   submitScores();
//   displayHighScores();
//   };
  
//   function submitScores() {
//   // get user's initials and score
//   var userInitials = initialsEl.value;
//   var userScore = timeEl.textContent;
  
//   // save to local storage
//   var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//   var newScore = {initials: userInitials, score: userScore};
//   highScores.push(newScore);
//   localStorage.setItem("highScores", JSON.stringify(highScores));
//   }
  
//   function displayHighScores() {
//   var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//   var highScoresList = document.querySelector("#highscores");
  
//   // clear out old scores
//   highScoresList.innerHTML = "";
  
//   // display each score as a list item
//   for (var i = 0; i < highScores.length; i++) {
//   var newLi = document.createElement("li");
//   newLi.textContent = highScores[i].initials +}















































// // function to submit scores
// function submitScores() {
//   // get user's initials and score
//   var userInitials = initialsEl.value;
//   var userScore = time;

//   // create an object for the user's score data
//   var userData = {initials: userInitials, score: userScore};

//   // add the user's score data to the high scores array
//   highScores.push(userData);

//   // clear the input field for initials
//   initialsEl.value = "";
// }

// // event listener for submit button
// submitBtn.addEventListener("click", submitScores);

//     // navigate to the high scores page
//     // ... code to navigate to high scores page
//   {}

//   // event listener for submit button
//   submitBtn.addEventListener("click", function(event) {
//       event.preventDefault();
//       submitScores();
//   });
  







// // Store the score in local storage
// localStorage.setItem("initials", initials);
// localStorage.setItem("score", score);

// // Retrieve the scores from local storage
// var highScores = [];
// for (var i = 0; i < localStorage.length; i++) {
//   var key = localStorage.key(i);
//   if (key.startsWith("score")) {
//     var initials = localStorage.getItem("initials" + key.substring(5));
//     var score = localStorage.getItem(key);
//     highScores.push({ initials: initials, score: score });
//   }
// }

// // Sort the scores in descending order
// highScores.sort(function(a, b) {
//   return b.score - a.score;
// });

// // Display the scores in a table
// var table = document.createElement("table");
// for (var i = 0; i < highScores.length; i++) {
//   var row = table.insertRow();
//   var initialsCell = row.insertCell();
//   initialsCell.innerHTML = highScores[i].initials;
//   var scoreCell = row.insertCell();
//   scoreCell.innerHTML = highScores[i].score;
// }
// document.body.appendChild(table);}







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


// Function to see if answer are correct
// click on question answer either generate new question or end quiz if final question, and deduct time for answering wrong
function questionClick() {
  // 'this.value' shows if the answer if correct or not. need to view why this works and text content doesnt 
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




function clockTick() {
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




function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }
}


// submit initials
submitBtn.onclick = saveHighscore;


initialsEl.onkeyup = checkForEnter;