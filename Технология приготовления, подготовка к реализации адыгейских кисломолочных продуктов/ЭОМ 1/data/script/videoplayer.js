const video = document.querySelector('#video-player');
const playPauseBtn = document.querySelector('#play');
const volumeBtn = document.querySelector('#volume')
const progress = document.querySelector('#progress');
const time = document.querySelector('.controls-line__time');
const fullScreen = document.querySelector('#full');

fullTimer();
// Запуск и пауза видео
let isPause = true;
playPauseBtn.addEventListener('click', () => {
    if(isPause) { 
        video.play(); 
        isPause = false;
    }
    else {
        video.pause();
        isPause = true;
    } 
    playPauseBtn.classList.toggle('pause');
});

// Вкл / Выкл звук
let isSound = true;
volumeBtn.addEventListener('click', ()=> {
    if(isSound) {
        isSound = false;
        video.volume = 0;
    }
    else {
        isSound = true;
        video.volume = 1;
    }
        volumeBtn.classList.toggle('volume-active');
});

// Прогресс бар
function updateProgressbar() {
    progress.value = (video.currentTime / video.duration) * 100;

    let minutes = Math.floor(video.currentTime / 60);
    if(minutes < 10) {
        minutes = '0' + String(minutes);
    }
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10) {
        seconds = '0' + String(seconds);
    }
    time.innerHTML = minutes + ':' + seconds;
    if(video.currentTime === video.duration) {
        isPause = true;
        playPauseBtn.classList.toggle('pause');
    }
}
video.addEventListener('timeupdate', updateProgressbar);

// Set progress
function setProgress() {
    video.currentTime = (progress.value * video.duration) / 100;
}
progress.addEventListener('change', setProgress);

// На весь экран
fullScreen.addEventListener('click', () => {
    video.requestFullscreen();
});



function fullTimer() {
    let f = document.querySelector('.full-time');
    let minute = Math.floor(video.duration / 60);
    let second = Math.floor(video.duration % 60);
    if(minute < 10 && second < 10) f.innerHTML  = '0' + Number(minute) + ':0' + Number(second);
    else if(minute < 10) f.innerHTML  = '0' + Number(minute) + ':' + Number(second);
    else if(second < 10) f.innerHTML  =  Number(minute) + ':0' + Number(second);
    

}
