var startQuiz = document.getElementById("startQuiz");
var saveScore = document.getElementById("saveScore")
var viewScore = document.getElementById("viewScore");
var playAgain = document.getElementById("playAgain");



var welcome = document.getElementById("welcome");
var quiz = document.getElementById("quiz");
var result = document.getElementById("result")
var info = document.getElementById("info")
var highscore = [];

var options = document.getElementById("options")
var message = document.getElementById("message")

var timer = document.getElementById("timer")
var countdown = document.getElementById("timer")
var summary = document.getElementById("summary")

var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;
var currentTimer;

function onstartGame() {

    secondsLeft = 75;

    currentQuestion = 0;

    score = 0;

    countdownTimer = setInterval(function () {

        if (secondsLeft > 0) {
            timer.textContent = secondsLeft;
        } else {

            stopGame();
        }
        secondsLeft--;

    }, 1000);

    welcome.style.display = 'none';
    result.style.display = 'none';
    info.style.display = 'none';
    quiz.style.display = 'flex';

    displayQuestion();
}