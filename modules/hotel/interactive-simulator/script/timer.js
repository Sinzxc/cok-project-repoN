const timerText = document.querySelector('.timer'); 
let time = 600;

const intervalId = setInterval(updateCOuntdown, 1000)

function updateCOuntdown() {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec<10?"0"+sec:sec;
    min = min<10?'0'+min:min;
    timerText.innerHTML = min+':'+sec;
    if(time === 0) clearInterval(intervalId);
    time--;
}