// Variable Declarations

var startBtn = document.getElementById("startBtn");

var startPage = document.getElementById("startPage");
var header = document.getElementById(".header");
var quizPage = document.getElementById("quizPage");
var scorePage = document.getElementById("scorePage");

var option1 = document.getElementById("btn1");
var option2 = document.getElementById("btn2");
var option3 = document.getElementById("btn3");
var option4 = document.getElementById("btn4");
var correctOption = document.getElementById("correctBtn");

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

var score = document.getElementById("score");
var cachedAnswer = document.getElementById("quizAnswer");

var initials = document.getElementById("initials");
var initialInput = document.getElementById("initialInput");
var initialBtn = document.getElementById("initialBtn");



// Starter Page
function theQuiz() {
  document.getElementById("startPage").style.display = "block";
  document.getElementById("header").style.display = "none";
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("scorePage").style.display = "none";
};

// Shifts to Quiz Page
function startQuiz() {
  document.getElementById("startPage").style.display = "none";
  document.getElementById("quizPage").style.display = "block";
  document.getElementById("scorePage").style.display = "none";
};

// Event listern for the startBtn
startBtn.addEventListener("click", function(){ 
  startQuiz();
  localStorage.setItem("score", startScore);
});

// Draws up each set of questions!
function showEachQ() {
  var q = questionArr[qIndex];

  quizQuestion.innerHTML = q.quizQuestion;

  option1.innerHTML = q.btn1;
  option1.setAttribute("data-answer", q.btn1);
  option2.innerHTML = q.btn2;
  option2.setAttribute("data-answer", q.btn2);
  option3.innerHTML = q.btn3;
  option3.setAttribute("data-answer", q.btn3);
  option4.innerHTML = q.btn4;
  option4.setAttribute("data-answer", q.btn4);
};

showEachQ();

// Compares the questionArr to the solutionIndex. It works and I'm scared of breaking it

option1.addEventListener("click", function(){
  // grab the text that's displayed in option 1 
  var optionText = document.getElementById("btn1").getAttribute("data-answer");
  // then pass that text to the answerQuery
  answerQuery(0,optionText);
});

option2.addEventListener("click", function(){
  // grab the text that's displayed in option 2
  var optionText = document.getElementById("btn2").getAttribute("data-answer");
  // then pass that text to the answerQuery
  answerQuery(1,optionText);
});

option3.addEventListener("click", function(){
  // grab the text that's displayed in option 3 
  var optionText = document.getElementById("btn3").getAttribute("data-answer");
  // then pass that text to the answerQuery
  answerQuery(2,optionText);
});

option4.addEventListener("click", function(){
  // grab the text that's displayed in option 4 
  var optionText = document.getElementById("btn4").getAttribute("data-answer");
  // then pass that text to the answerQuery
  answerQuery(3,optionText);
});



function answerQuery(questionIndex, optionText){
  event.preventDefault();
  // this is needed because the question and solutionArrs get jumbled up and need a gentle push forward
  if (qIndex == 3 || qIndex == 4){
    questionIndex++
  }

  // pass the score increment down here
  var answer = correctResponse[0][questionIndex];

  if (optionText === answer) {
    qIndex++;
    console.log("correct");
    score++;
    localStorage.setItem("score", score);
    showEachQ();

  // pass the loss of score or time here
  } else {
    qIndex++;
    console.log("incorrect");
    score--;
    localStorage.setItem("score", score);
    showEachQ();
  }
}





// Scrapped attempting the timer due to limited time.
// START TIMER CODE

// var timeEl = document.querySelector("#timer");
// var mainEl = document.getElementById("main");

// var secondsLeft = 60;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = "Time: " + secondsLeft;

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }
//   }, 1000);
// }
// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "media/stop-hand.jpg");
//   mainEl.appendChild(imgEl);
// }
// setTime();

// END TIMER CODE