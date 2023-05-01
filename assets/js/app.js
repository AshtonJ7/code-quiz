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


result.style.display = 'none'
quiz.style.display= 'none'


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

function displayQuestion() {

    currentQuestion++;

    console.log('current question ' + currentQuestion);

    if (currentQuestion >= questions.length) {
        stopGame();
        return;
    }


var question = questions[currentQuestion];
document.getElementById("question").textContent = question.title

options.innerHTML = "";
options.style.cursor = "pointer";

for (var i = 0; i < question.choices.length; i++) {

    var option = document.createElement("div");
    option.textContent = question.choices[i];
    option.onclick = onSelectAnswer;
    option.classList.add("option");

    options.appendChild(option);
}

}

function onSelectAnswer(e) {
    var correctAnswer = questions[currentQuestion].answer;

    var userAnswer = e.target.textContent;

    if (correctAnswer === userAnswer) {
        score++;

        displayMessage('CORRECT')
    } else {

        score--;
        displayMessage('WRONG')
    }

    displayQuestion();
}

function displayMessage(msg) {

    message.textContent = msg;

    setTimeout(function() {
        message.tectContent = " ";
    }, 1000);
}

function stopGame() {
    quiz.style.display= 'none' //hide quiz box
    

    clearInterval(countdownTimer);

    timer.textContent = ""

    quiz.style.display -"none";
    result.style.display = 'flex'

    summary.textContent = "Your Score is: " + score;

}

startQuiz.addEventListener("click", onstartGame);