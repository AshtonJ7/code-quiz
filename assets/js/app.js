//Buttons
var startQuiz = document.getElementById("startQuiz");
var saveScore = document.getElementById("saveScore")
var viewScore = document.getElementById("viewScore");
var playAgain = document.getElementById("playAgain");


//HTML Div elements
var frontPage = document.getElementById("frontPage");
var quiz = document.getElementById("quiz");
var result = document.getElementById("result")
var info = document.getElementById("info")

//Quiz options and display message
var options = document.getElementById("options")
var message = document.getElementById("message")

//Timer and score
var timer = document.getElementById("timer")
var countdown = document.getElementById("timer")
var summary = document.getElementById("summary")
var highscore = [];

var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;
var currentTimer;

//hide results and quiz section on first page of quiz
result.style.display = 'none'
quiz.style.display= 'none'

// if start Quiz button clicked action the following:

function onstartGame() {

    secondsLeft = 75;

    currentQuestion = 0;

    score = 0;
// start timer
    countdownTimer = setInterval(function () {

        if (secondsLeft > 0) {
            // display timer
            timer.textContent = secondsLeft;
        } else {

            stopGame();
        }
        secondsLeft--;

    }, 1000);
//hide the followig when quiz is open:
    frontPage.style.display = 'none';
    result.style.display = 'none';
    info.style.display = 'none';

//Style quiz display
    quiz.style.display = 'flex';

    displayQuestion();
}

// function for displaying current question
function displayQuestion() {

    currentQuestion++;

    console.log('current question ' + currentQuestion);

    if (currentQuestion >= questions.length) {
        stopGame();
        return;
    }


var question = questions[currentQuestion];
document.getElementById("question").textContent = question.title

// Display choice options
options.innerHTML = "";
options.style.cursor = "pointer";


// loop for choice options
for (var i = 0; i < question.choices.length; i++) {

    var option = document.createElement("div");
    option.textContent = question.choices[i];
    option.onclick = onSelectAnswer;
    option.classList.add("option");

    options.appendChild(option);
}

}

// Function to check if chosen answer is correct
// & adds to user's score if it is
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

//Function for when game is over
function stopGame() {
    quiz.style.display= 'none' //hide quiz box
    
//Clears Timer
    clearInterval(countdownTimer);

    timer.textContent = ""


    //display results page
    result.style.display = 'flex'

    summary.textContent = "Your Score is: " + score;

}

//Save score to local storage
function onSaveScore(e) {
    var initials = document.getElementById("initials").value
    var highscore = JSON.parse(localStorage.getItem("highscore")) || [];
    if (initials === "") {
        initials = alert("Please input valid initials");
    } else {
        initials.value = " ";
        var userScore = initials.concat(": ", score);
        highscore.push(userScore);
        localStorage.setItem("highscore", JSON.stringify(highscore));
        var rankings = document.createElement("div");
        rankings.textContent = userScore;
        result.appendChild(rankings);
    }
}

//Open scores page
function onViewScore(e) {
    window.location.href = 'scores.html'}

//Open Index html
function onplayAgain() {
    window.location.href = 'index.html'}


startQuiz.addEventListener("click", onstartGame);
saveScore.addEventListener("click", onSaveScore);
viewScore.addEventListener("click", onViewScore);
playAgain.addEventListener("click", onplayAgain);