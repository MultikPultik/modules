import { DateTime } from "./luxon.js"; // 1
import { playSound } from "./sound.js";

export const timerForm = document.getElementById('timer');

const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const tmr = document.getElementById('tmr');

const input_hour = document.getElementById('input_hour');
const input_min = document.getElementById('input_min');
const input_sec = document.getElementById('input_sec');

const startbtn = document.getElementsByClassName('start');
const stopbtn = document.getElementsByClassName('stop');

var interval = 0;

timerForm.addEventListener("input", (ev) => {


  if (ev.target.name === "hour" || ev.target.name === "min" || ev.target.name === "sec") {
    tmr.innerText = DateTime.fromObject(getTimeFromHTML()).toFormat('HH:mm:ss');
  }

  console.log(
    DateTime.fromObject(getTimeFromHTML())
      .toFormat('hh:mm:ss')
  );
});


function getTimeFromHTML() {
  return {
    hour: input_hour.value,
    minutes: input_min.value,
    seconds: input_sec.value,
    zone: 'local',
  }
}

function timer() {
  const end = DateTime.local().plus(getTimeFromHTML());
  console.log(end.diff(DateTime.local()).toFormat('hh:mm:ss'));

  interval = setInterval(function () {
    const delta = end.diff(DateTime.local());

    if (delta.valueOf() < 1) {
      clearInterval(interval);
    } else {
      console.log(end.diff(DateTime.local()).toFormat('hh:mm:ss'));
      tmr.innerText = end.diff(DateTime.local()).toFormat('hh:mm:ss');
      if (end.diff(DateTime.local()).toFormat('ss') <= 5) {
        playSound();
      }
    }
  }, 1000);
}

startbtn[0].addEventListener('click', ev => {
  ev.preventDefault();
  timer();
})

stopbtn[0].addEventListener('click', ev => {
  ev.preventDefault();
  clearInterval(interval);
})

