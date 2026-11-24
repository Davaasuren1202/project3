const addNum = document.getElementById("addCount");
const worldTime = document.getElementById("world-time");
const now = new Date();

let worldHours = String(now.getHours()).padStart(2, "0");
let worldMinutes = String(now.getMinutes()).padStart(2, "0");
let worldSeconds = String(now.getSeconds()).padStart(2, "0");
//   let milliseconds = String(now.getMilliseconds()).padStart(3, "0");

setInterval(() => {
  const now = new Date();

  worldHours = String(now.getHours()).padStart(2, "0");
  worldMinutes = String(now.getMinutes()).padStart(2, "0");
  worldSeconds = String(now.getSeconds()).padStart(2, "0");
  // milliseconds = String(now.getMilliseconds()).padStart(3, "0");

  worldTime.textContent = `${"World Time "}:${worldHours}:${worldMinutes}:${worldSeconds}`;
}, 1000);

let hours = 0;
let minutes = 0;
let seconds = 0;
let days = 0;
let getTime = Number(prompt("min oruul : "));
let getNum = getTime * 60;

const countDown = () => {
  seconds = getNum % 60;
  minute = (getNum - seconds) / 60;
  minutes = minute % 60;
  hour = (minute - (minute % 60)) / 60;
  hours = hour % 24;
  days = (hour - (hour % 24)) / 24;
  getNum--;
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  addNum.textContent =
    days + " DAY" + " " + hours + " : " + minutes + " : " + seconds;
  stop();
};
const interval = setInterval(countDown, 1000);

const stop = () => {
  if (getNum < 0) {
    alert("timeout!!!");
    clearInterval(interval);
  }
};
const plusHalfSec = () => {
  getNum += 30;
};
const plusMin = () => {
  getNum += 60;
};
const plusFiveMin = () => {
  getNum += 60 * 5;
};
