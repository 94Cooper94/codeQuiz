// START TIMER CODE

// var timeEl = document.querySelector(".time");
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


// SCORE TRACKER

var counter = document.querySelector("#counter");

var score = localStorage.getItem("score");

counter.textContent = score;

correct.addEventListener("click", function() {
  score++;
  score.textContent = score;

  localStorage.setItem("score", score);
});

button1.addEventListener("click", function() {
  counter.textContent = score;

  localStorage.setItem("score", score);
});

// END SCORE TRACKER