var btn1 = document.querySelector('.pop-up-window__btn1');
var btn2 = document.querySelector('.pop-up-window__btn2');
var btn3 = document.querySelector('.pop-up-window__btn3');
var btn4 = document.querySelector('.pop-up-window__btn4');
var btn5 = document.querySelector('.pop-up-window__btn5');

var popUpWindowInfoContent = document.querySelector('.pop-up-container-info-content');
var popUpWindowKeyWords = document.querySelector('.pop-up-container-key-words');
var popUpWindowCard1 = document.querySelector('.pop-up-container-card-1');
var popUpWindowCard2 = document.querySelector('.pop-up-container-card-2');
var popUpWindowCard3 = document.querySelector('.pop-up-container-card-3');

var btnClose1 = document.querySelector('.close-btn1');
var btnClose2 = document.querySelector('.close-btn2');
var btnClose3 = document.querySelector('.close-btn3');
var btnClose4 = document.querySelector('.close-btn4');
var btnClose5 = document.querySelector('.close-btn5');

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

