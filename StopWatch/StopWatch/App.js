var min = 0;
var sec = 0;
var milisec = 0;
var interval;
var minTitle = document.getElementById('min');
var secTitle = document.getElementById("sec");
var milisecTitle = document.getElementById('miliSec');
var lap = document.getElementById('lap');

function timer() {
    milisec++;
    milisecTitle.innerHTML = ":" + milisec;
    if (milisec >= 100) {
        milisec = 0;
        sec++;
        secTitle.innerHTML = sec;
    }
    else if (sec >= 60) {
        min++;
        sec = 0;
        minTitle.innerHTML = min + ":";
    }
}
function play() {
    interval = setInterval(timer, 10);

}
function pause() {
    clearInterval(interval);

}
function reset() {
    min = 00;
    sec = 00;
    milisec = 00;
    minTitle.innerHTML = min + "0:";
    secTitle.innerHTML = sec + "0";
    milisecTitle.innerHTML = ":0" + milisec;
    pause()
    lap.innerHTML = " ";
}
function timerHistory() {
    var lapHistory = (min) + ":" + (sec) + ":" + (milisec);
    lap.innerHTML += lapHistory + "<br>"
}