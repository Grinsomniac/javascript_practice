
let secondsElapsed = 0;
let interval = null;

const time = document.getElementById("time")

function padStart(value) {
    return String(value).padStart(2, "0");
}

function setTime() {
    const minutes = Math.floor(secondsElapsed/60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTime();
}

function startClock() {
    if (interval) return;
    interval = setInterval(timer, 1000);
    time.style.color = "red";
}

function stopClock() {
    time.style.color = "lightgray";
    clearInterval(interval);
    interval = null;
}

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    setTime();
    time.style.color = "black";
}