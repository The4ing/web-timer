let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById("clock-display");
const resetButton = document.getElementById("resetButton");
const toggleButton = document.getElementById("toggleButton");

function timeToString(time) {
  let hour = Math.floor(time / 3600000);
  let minute = Math.floor((time / 60000) % 60);
  let second = Math.floor((time / 1000) % 60);

  let hourString = hour.toString().padStart(2, "0");
  let minuteString = minute.toString().padStart(2, "0");
  let secondString = second.toString().padStart(2, "0");

  return `${hourString}:${minuteString}:${secondString}`;
}

function updateUI() {
  if (isRunning) {
    toggleButton.style.backgroundColor = "rgb(255, 3, 3)";
    toggleButton.textContent = "STOP";
  } else {
    toggleButton.style.backgroundColor = "greenyellow";
    toggleButton.textContent = "START";
  }
}

resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
  elapsedTime = 0;
  display.textContent = "00:00:00";
  updateUI();
});

toggleButton.addEventListener("click", () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);
    updateUI();
  } else {
    isRunning = true;
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      display.textContent = timeToString(elapsedTime);
    }, 10);

    updateUI();
  }
});
