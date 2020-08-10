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

var count = localStorage.getItem("count");

counter.textContent = count;

addButton.addEventListener("click", function() {
  count++;
  counter.textContent = count;

  localStorage.setItem("count", count);
});

subtractButton.addEventListener("click", function() {
  count--;
  counter.textContent = count;

  localStorage.setItem("count", count);
});

// END SCORE TRACKER