let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById("clock-display");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

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

startButton.addEventListener("click", () => {
  if (isRunning) return;
  isRunning = true;

  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 10);
});

stopButton.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timerInterval);
});

resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
  display.textContent = "00:00:00";
  elapsedTime = 0;
});
