const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let interval = null;
[milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

startButton.addEventListener("click", () => {
  if (interval !== null) {
    return;
  }
  interval = setInterval(startCount, 10);
});

stopButton.addEventListener("click", stopCount);
resetButton.addEventListener("click", resetCount);

function startCount() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  timer.innerHTML = getTimer();
}
function stopCount() {
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
  }
}
function resetCount() {
  stopCount();
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timer.innerHTML = "00 : 00 : 00 : 000";
}
function getTimer() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  return `${h} : ${m} : ${s} : ${ms}`;
}
