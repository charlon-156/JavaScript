
var init = document.querySelector("#start")
init.addEventListener("click", start);

var pse = document.querySelector("#pause")
pse.addEventListener("click" , pause);

var end = document.querySelector("#reset")
end.addEventListener("click", reset);

let hour = 0;
let minute = 0;
let second = 0;
let milli = 0;
let cro = 0;

function start() {
    pause();
    cro = setInterval(() => { timer();}, 10);
  }
  
  function pause() {
    clearInterval(cro);
  }
  
  function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
  }
  
  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }