let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById("clock-display");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
const toggleButton = document.getElementById("toggleButton");

function timeToString(time) {
  let hour = Math.floor(time / 3600000);
  let minute = Math.floor((time / 60000) % 60);
  let second = Math.floor((time / 1000) % 60);

  let hourString = hour.toString().padStart(2, "0");
  let minuteString = minute.toString().padStart(2, "0");
  let secondString = second.toString().padStart(2, "0");
  console.log(hourString, minuteString, secondString);

  return `${hourString}:${minuteString}:${secondString}`;
}

startButton.addEventListener("click", startTimer);

stopButton.addEventListener("click", stopTimer);

resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
  display.textContent = "00:00:00";
  elapsedTime = 0;
});

toggleButton.addEventListener("click", () => {
  if (isRunning) {
    stopTimer();
    toggleButton.style.backgroundColor = "greenyellow";
    toggleButton.textContent = "START";
  } else {
    toggleButton.style.backgroundColor = "rgb(255, 3, 3)";
    toggleButton.textContent = "STOP";
    startTimer();
  }
});

function stopTimer() {
  isRunning = false;
  clearInterval(timerInterval);
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 10);
}
