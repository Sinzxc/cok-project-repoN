const btn1 = document.querySelector('.pop-up-window__btn1');
const btn2 = document.querySelector('.pop-up-window__btn2');
const btn3 = document.querySelector('.pop-up-window__btn3');
const btn4 = document.querySelector('.pop-up-window__btn4');
const btn5 = document.querySelector('.pop-up-window__btn5');

const popUpWindowInfoContent = document.querySelector('.pop-up-container-info-content');
const popUpWindowKeyWords = document.querySelector('.pop-up-container-key-words');
const popUpWindowCard1 = document.querySelector('.pop-up-container-card-1');
const popUpWindowCard2 = document.querySelector('.pop-up-container-card-2');
const popUpWindowCard3 = document.querySelector('.pop-up-container-card-3');

const btnClose1 = document.querySelector('.close-btn1');
const btnClose2 = document.querySelector('.close-btn2');
const btnClose3 = document.querySelector('.close-btn3');
const btnClose4 = document.querySelector('.close-btn4');
const btnClose5 = document.querySelector('.close-btn5');

function overflowHiden() {
    document.querySelector('body').classList.toggle('over-flow-body');
}

btn1.addEventListener('click', ()=> {
    popUpWindowInfoContent.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});

btnClose1.addEventListener('click', ()=> {
    popUpWindowInfoContent.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    overflowHiden();
});

btn2.addEventListener('click', ()=> {
    popUpWindowKeyWords.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});

btnClose2.addEventListener('click', ()=> {
    popUpWindowKeyWords.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    overflowHiden();
});

btn3.addEventListener('click', ()=> {
    popUpWindowCard1.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});

btnClose3.addEventListener('click', ()=> {
    popUpWindowCard1.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    overflowHiden();
});

btn4.addEventListener('click', ()=> {
    popUpWindowCard2.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});

btnClose4.addEventListener('click', ()=> {
    popUpWindowCard2.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    overflowHiden();
});

btn5.addEventListener('click', ()=> {
    popUpWindowCard3.classList.add('show-pop-up');
    shadow.classList.add('shadow-active');
    overflowHiden();
});

btnClose5.addEventListener('click', ()=> {
    popUpWindowCard3.classList.remove('show-pop-up');
    shadow.classList.remove('shadow-active');
    overflowHiden();
});

