const timerText = document.querySelector('.timer'); 
let time = 600;

const intervalId = setInterval(updateCOuntdown, 1000)

function updateCOuntdown() {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec<10?"0"+sec:sec;
    min = min<10?'0'+min:min;
    timerText.innerHTML = min+':'+sec;
    if(time === 0) {
        clearInterval(intervalId);
        document.querySelector(`#task-${numtaskNow}`).classList.remove('practice-part-wrap--active');
        document.querySelector('.virtual-simulator__active-part').classList.add('hide');
        document.querySelector('.virtual-simulator__result-part').classList.remove('hide');
        const resultBlock = document.querySelector('.result-block');
        resultBlock.classList.add('result-block--active')
        document.querySelector('.virtual-simulator__footer').style.cssText = "display: none;"
        clearInterval(intervalId);
        document.querySelector('.virtual-simulator__header-rigth-side').classList.add('hide')
        document.querySelector('.task-text-wrap').innerHTML = "Результаты"
        RaschitatiBalli()
    }
    time--;
}