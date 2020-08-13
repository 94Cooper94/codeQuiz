// Variable Declarations

var startBtn = document.getElementById("startBtn");

var startPage = document.getElementById("startPage");
var header = document.getElementById(".header");
var quizPage = document.getElementById("quizPage");
var scorePage = document.getElementById("scorePage");

var choice1 = document.getElementById("btn1");
var choice2 = document.getElementById("btn2");
var choice3 = document.getElementById("btn3");
var choice4 = document.getElementById("btn4");
var correctOption = document.getElementById("correctBtn");

// my array of questions
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


var startScore = 0;
var qIndex = 0;

var quizAnswer = document.getElementById("quizAnswer");
var score = document.getElementById("score");
var cachedAnswer = document.getElementById("quizAnswer");

var initials = document.getElementById("initials");
var initialInput = document.getElementById("initialInput");
var initialBtn = document.getElementById("initialBtn");


function highScores() {
  // incomplete at the moment
}


function quizTimer() {
    var timeEl = document.querySelector("#timer");
    var secondsLeft = 90;
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        highScores();
    }
  }, 1000);
}


// Shifts to Quiz Page
function startQuiz() {
  document.getElementById("startPage").style.display = "none";
  document.getElementById("quizPage").style.display = "block";
  document.querySelector(".header").style.display = "block";
  document.getElementById("scorePage").style.display = "none";
};

// Event listern for the startBtn
startBtn.addEventListener("click", function(){ 
  startQuiz();
  quizTimer();
  localStorage.setItem("score", startScore);
});

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

showQ();

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


function scoreTracker() {
  var scoreUpdate = document.querySelector("#score");
  scoreUpdate.innerHTML.setValue(score);
}

//   var scoreUpdate = score.innerHTML;
//   scoreUpdate.innerHTML = "Score: " + score;


function answerQuery(questionIndex, optionText){
  event.preventDefault();
  // this is needed because the question and solutionArrs get jumbled up and need a gentle push forward
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