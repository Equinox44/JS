
const timeDisplay = document.getElementById("timeDisplay");
const startbtn = document.getElementById("startBtn");
const pausebtn = document.getElementById("pauseBtn");
const resetbtn = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let pause = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startbtn.addEventListener('click', ()=>{
    if(pause){
        pause = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
    }
});
pausebtn.addEventListener('click', ()=>{
    if(!pause){
        pause = false
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId)
    }
});
resetbtn.addEventListener('click', ()=>{
    pause = true;
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;   
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;
    secs = Math.floor(elapsedTime / 1000 % 60);
    mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    hrs = Math.floor(elapsedTime / (1000 * 60 * 60) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}