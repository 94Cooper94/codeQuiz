document.querySelector("#generate").addEventListener("click",setTime);
// START TIMER CODE
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "media/stop-hand.jpg");
  mainEl.appendChild(imgEl);
}
setTime();
// END TIMER CODE