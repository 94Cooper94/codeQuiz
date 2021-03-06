// Variable Declarations

var startBtn = document.getElementById("startBtn");

var startPage = document.getElementById("startPage");
var header = document.getElementById(".header");
var quizPage = document.getElementById("quizPage");
var scorePage = document.getElementById("scorePage");

// variables corresponding with each button to pass the questionArr index's string values through and begin comparing to the correctResponse array
var choice1 = document.getElementById("btn1");
var choice2 = document.getElementById("btn2");
var choice3 = document.getElementById("btn3");
var choice4 = document.getElementById("btn4");

// array of questions
var questionArr = [
  {
    "quizQuestion" : "Commonly referred to the building block languages of the internet:",
    "btn1" : "1. HTML, CSS, Javascript",
    "btn2" : "2. Numbers, strings and booleans",
    "btn3" : "3. Pokemon, Super Mario, Legend of Zelda",
    "btn4" : "4. HTTPS, DSL, USPS",
  },{
    "quizQuestion" : "HTML is to content as CSS is to _____:",
    "btn1" : "1. Programming logic",
    "btn2" : "2. Machine learning",
    "btn3" : "3. Styling elements",
    "btn4" : "4. Plotting world destruction",
  },{
    "quizQuestion" : "Which companies created and support Angular and React:",
    "btn1" : "1. Yahoo and Bing",
    "btn2" : "2. Google and Facebook",
    "btn3" : "3. Nintendo and Samsung",
    "btn4" : "4. Xbox and 360",
  },{
    "quizQuestion" : "An array can be used to store values of what type:",
    "btn1" : "1. Numbers, strings and booleans",
    "btn2" : "2. Other arrays",
    "btn3" : "3. All of the above",
    "btn4" : "4. None of the above",
  },{
    "quizQuestion" : "A function must include what _____:",
    "btn1" : "1. Quotation marks",
    "btn2" : "2. String values",
    "btn3" : "3. Willingness to learn",
    "btn4" : "4. Parenthesis",
  }
]

// separate correct response index to pass the question index past
var correctResponse = [
  {
    0 : "1. HTML, CSS, Javascript",
    1 : "2. Google and Facebook",
    2 : "3. Styling elements",
    3 : "3. All of the above",
    4 : "4. Parenthesis",
  }
]

// starting score, question Index
var startScore = 0;
var qIndex = 0;

var score = document.getElementById("score");
var quizAnswer = document.getElementById("quizAnswer");
var cachedAnswer = document.getElementById("quizAnswer");


// Shifts to Quiz Page
function startQuiz() {
  document.getElementById("startPage").style.display = "none";
  document.getElementById("quizPage").style.display = "block";
  document.getElementById("scorePage").style.display = "none";
};


// Event listener for the startBtn to activate the timer and the questions
startBtn.addEventListener("click", function(){ 
  startQuiz();
  quizTimer();
  localStorage.setItem("score", startScore);
  showQ();
});

// the timer function
function quizTimer() {
    var timeEl = document.querySelector("#timer");
    var secondsLeft = 30;
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0 || qIndex === 5) {
        clearInterval(timerInterval);
        highScores();
    }
  }, 1000);
}


// Draws up each set of questions!
function showQ() {
  var q = questionArr[qIndex];

  quizQuestion.innerHTML = q.quizQuestion;

  choice1.innerHTML = q.btn1;
  choice1.setAttribute("data-answer", q.btn1);
  choice2.innerHTML = q.btn2;
  choice2.setAttribute("data-answer", q.btn2);
  choice3.innerHTML = q.btn3;
  choice3.setAttribute("data-answer", q.btn3);
  choice4.innerHTML = q.btn4;
  choice4.setAttribute("data-answer", q.btn4);
};


// Compares the questionArr to the solutionIndex. It works and I'm scared of breaking it

choice1.addEventListener("click", function(){
  // grab the text that's displayed in the first option
  var optionText = document.getElementById("btn1").getAttribute("data-answer");
  // then pass that text to the answerQuery
  answerQuery(0,optionText);
});

choice2.addEventListener("click", function(){
  // grab the text that's displayed in the second option
  var optionText = document.getElementById("btn2").getAttribute("data-answer");
  // then pass that text to the answerQuery
  answerQuery(1,optionText);
});

choice3.addEventListener("click", function(){
  // grab the text that's displayed in the third option
  var optionText = document.getElementById("btn3").getAttribute("data-answer");
  // then pass that text to the answerQuery
  answerQuery(2,optionText);
});

choice4.addEventListener("click", function(){
  // grab the text that's displayed in the fourth option
  var optionText = document.getElementById("btn4").getAttribute("data-answer");
  // then pass that text to the answerQuery
  answerQuery(3,optionText);
});


// tracks users score in the top right corner
function scoreTracker() {
  var storedScore = localStorage.getItem("score");
  var scoreUpdate = document.querySelector("#score");

  scoreUpdate.innerText = "Score: " + storedScore;
}

// would be the functional user-initial input section which would store user's initials. couldn't get it quite working.
var initials = document.getElementById("initials");
var initialInput = document.getElementById("initialInput");
var initialBtn = document.getElementById("initialBtn");
var highScoreLog = document.getElementById("highScore");

// shows the high score page
function highScores() {
  document.getElementById("quizPage").style.display = "none";
  document.querySelector(".header").style.display = "none";
  document.getElementById("scorePage").style.display = "block";
  
  var storedScore = localStorage.getItem("score");
  var storedHighScore = document.querySelector("#highScore");

  storedHighScore.innerText = storedScore + " points";
}

// this is the actual function that compares the questions in the questionIndex to the corresponding solutions in the correctResponse index
function answerQuery(questionIndex, optionText){
  event.preventDefault();

  // this is needed because the question and solutionArrs get jumbled up and need a gentle push forward. 
  if (qIndex == 3 || qIndex == 4) {
    questionIndex++;
  }

  // pass the score increment here
  var answer = correctResponse[0][questionIndex];

  if (optionText === answer) {
    qIndex++;
    quizAnswer.textContent = "Correct!";
    score++;
    localStorage.setItem("score", score);
    showQ();
    scoreTracker();
  // pass the score decrement here
  } else {
    qIndex++;
    quizAnswer.textContent = "Incorrect!";
    score--;
    localStorage.setItem("score", score);
    showQ();
    scoreTracker();
  }
}