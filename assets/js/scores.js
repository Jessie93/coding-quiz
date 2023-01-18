
// Highscores function
// this should get the highscores from localstorge
function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores"));

  
    highscores.forEach(function(score) {
      // create list for each highscore. Will look into how to put them in highest to lowest
      var list = document.createElement("li");
      list.textContent = score.initials + " - " + score.score;
  
      // display on page
      var highscoreA = document.getElementById("highscores");
      // adding a new element to the HTML file
      highscoreA.innerHTML += list.outerHTML;
    });
  }
  
// function to clear the highscores
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  document.getElementById("clear").onclick = clearHighscores;
  
//   This shows the scores on the page
  printHighscores();
