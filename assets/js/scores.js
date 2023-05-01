var scores = document.getElementById("scores");
var backtoQuiz = document.getElementById("backtoQuiz");
highscore = JSON.parse(localStorage.getItem("highscore"));

function onBacktoQuiz() {
    window.location.href = 'index.html';
}

 var highscore = highscore
    for (var i=0; i < highscore.length; i++) {
    var results = document.createElement("div");
     results.textContent = highscore[i];
     scores.appendChild(results);
        }

    


backtoQuiz.addEventListener("click", onBacktoQuiz)
