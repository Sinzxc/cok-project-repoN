let canvas3 = document.querySelector('.canvas-3');
let ctx3 = canvas3.getContext('2d');
ctx3.strokeStyle = '#3CBA94';
ctx3.lineWidth = '4';

let isCor13 = false;
let isCor23 = false;
let isCor33 = false;

const imgs3 = [
    img13 = {
        img: document.querySelector('.img13'),
        isClick: false,
        isBusy: false,
        isReady: false,
    },
    img23 = {
        img: document.querySelector('.img23'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img33 = {
        img: document.querySelector('.img33'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img43 = {
        img: document.querySelector('.img43'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img53 = {
        img: document.querySelector('.img53'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img63 = {
        img: document.querySelector('.img63'),
        isClick: false,
        isBusy: false,
        sReady: false,
    }
];

function relativeCoors(ev) {
    return {
        x: ev.pageX - ev.target.offsetLeft,
        y: ev.pageY - ev.target.offsetTop
    };
}

imgs3[0].img.addEventListener('click', ()=> {
    // Убирает активную картинку на всех, кроме той где кликнлуи
    for(let i = 0; i < imgs3.length; i++) {
        imgs3[i].isClick = false;
        if(!imgs3[i].isReady) imgs3[i].img.src = "img/circle-not-active.png";
    }
    imgs3[0].isClick = true;
    imgs3[0].img.src = "img/circle-active.png";
    
});

imgs3[2].img.addEventListener('click', ()=> {
    // Убирает активную картинку на всех, кроме той где кликнлуи
    for(let i = 0; i < imgs3.length; i++) {
        imgs3[i].isClick = false;
        if(!imgs3[i].isReady) imgs3[i].img.src = "img/circle-not-active.png";
    }
    imgs3[2].isClick = true;
    imgs3[2].img.src = "img/circle-active.png";
});

imgs3[4].img.addEventListener('click', ()=> {
    // Убирает активную картинку на всех, кроме той где кликнлуи
    for(let i = 0; i < imgs3.length; i++) {
        imgs3[i].isClick = false;
        if(!imgs3[i].isReady) imgs3[i].img.src = "img/circle-not-active.png";
    }
    imgs3[4].isClick = true;
    imgs3[4].img.src = "img/circle-active.png";
});

img23.img.addEventListener('click', (e) => {
    const { x, y } = relativeCoors(e);
    if(imgs3[0].isClick && !imgs3[1].isBusy) {
        imgs3[0].isClick = false;
        imgs3[0].isBusy = true;
        imgs3[1].isBusy = true;
        imgs3[0].isReady = true;
        imgs3[1].isReady = true;
        ctx3.moveTo(15,15);
        ctx3.lineTo(285,15);
        ctx3.stroke();
        imgs3[1].img.src = "img/circle-active.png"; 
        imgs3[0].img.classList.add('circle-img_z-ind');
        imgs3[1].img.classList.add('circle-img_z-ind');
    }
    else if(imgs3[2].isClick && !imgs3[1].isBusy) {
        imgs3[2].isClick = false;
        imgs3[2].isBusy = true;
        imgs3[1].isBusy = true;
        imgs3[2].isReady = true;
        imgs3[1].isReady = true;
        ctx3.moveTo(15,141);
        ctx3.lineTo(285,15);
        ctx3.stroke();
        imgs3[1].img.src = "img/circle-active.png";
        imgs3[2].img.classList.add('circle-img_z-ind');
        imgs3[1].img.classList.add('circle-img_z-ind');
    }
    else if(imgs3[4].isClick && !imgs3[1].isBusy) {
        imgs3[4].isClick = false;
        imgs3[4].isBusy = true;
        imgs3[1].isBusy = true;
        imgs3[4].isReady = true;
        imgs3[1].isReady = true;
        ctx3.moveTo(15,265);
        ctx3.lineTo(285,15);
        ctx3.stroke();
        imgs3[1].img.src = "img/circle-active.png";
        imgs3[4].img.classList.add('circle-img_z-ind');
        imgs3[1].img.classList.add('circle-img_z-ind');
        isCor13 = true;
    }
});

img43.img.addEventListener('click', (e) => {
    const { x, y } = relativeCoors(e);
    if(imgs3[0].isClick && !imgs3[3].isBusy) {
        imgs3[0].isClick = false;
        imgs3[0].isBusy = true;
        imgs3[3].isBusy = true;
        imgs3[0].isReady = true;
        imgs3[3].isReady = true;
        ctx3.moveTo(15,15); 
        ctx3.lineTo(285,141);
        ctx3.stroke();
        imgs3[3].img.src = "img/circle-active.png";
        imgs3[0].img.classList.add('circle-img_z-ind');
        imgs3[3].img.classList.add('circle-img_z-ind');
        isCor23 = true;
    }
    else if(imgs3[2].isClick && !imgs3[3].isBusy) {
        imgs3[2].isClick = false;
        imgs3[2].isBusy = true;
        imgs3[3].isBusy = true;
        imgs3[2].isReady = true;
        imgs3[3].isReady = true;
        ctx3.moveTo(15,141);
        ctx3.lineTo(285,141);
        ctx3.stroke();
        imgs3[3].img.src = "img/circle-active.png";
        imgs3[2].img.classList.add('circle-img_z-ind');
        imgs3[3].img.classList.add('circle-img_z-ind');
    }
    else if(imgs3[4].isClick && !imgs3[3].isBusy) {
        imgs3[4].isClick = false;
        imgs3[3].isBusy = true;
        imgs3[4].isBusy = true;
        imgs3[4].isReady = true;
        imgs3[3].isReady = true;
        ctx3.moveTo(15,265);
        ctx3.lineTo(285,141);
        ctx3.stroke();
        imgs3[3].img.src = "img/circle-active.png";
        imgs3[3].img.classList.add('circle-img_z-ind');
        imgs3[4].img.classList.add('circle-img_z-ind');
    }
});

img63.img.addEventListener('click', (e) => {
    const { x, y } = relativeCoors(e);
    if(imgs3[0].isClick && !imgs3[5].isBusy) {
        imgs3[0].isClick = false;
        imgs3[0].isBusy = true;
        imgs3[5].isBusy = true;
        imgs3[0].isReady = true;
        imgs3[5].isReady = true;
        ctx3.moveTo(15,15);
        ctx3.lineTo(285,265);
        ctx3.stroke();
        imgs3[5].img.src = "img/circle-active.png";
        imgs3[0].img.classList.add('circle-img_z-ind');
        imgs3[5].img.classList.add('circle-img_z-ind');
    }
    else if(imgs3[2].isClick && !imgs3[5].isBusy) {
        imgs3[2].isClick = false;
        imgs3[2].isBusy = true;
        imgs3[5].isBusy = true;
        imgs3[2].isReady = true;
        imgs3[5].isReady = true;
        ctx3.moveTo(15,141);
        ctx3.lineTo(285,265);
        ctx3.stroke();
        imgs3[5].img.src = "img/circle-active.png";
        imgs3[2].img.classList.add('circle-img_z-ind');
        imgs3[5].img.classList.add('circle-img_z-ind');
        isCor33 = true;
    }
    else if(imgs3[4].isClick && !imgs3[5].isBusy) {
        imgs3[4].isClick = false;
        imgs3[4].isBusy = true;
        imgs3[5].isBusy = true;
        imgs3[4].isReady = true;
        imgs3[5].isReady = true;
        ctx3.moveTo(15,265);
        ctx3.lineTo(285,265);
        ctx3.stroke();
        imgs3[5].img.src = "img/circle-active.png";
        imgs3[4].img.classList.add('circle-img_z-ind');
        imgs3[5].img.classList.add('circle-img_z-ind');
    }
});


document.querySelector('.clear-btn-3').addEventListener('click', ()=> {
    const parent = canvas3.parentNode;
    parent.removeChild(canvas3);
    document.querySelector('.canvas-container-3').innerHTML += '<canvas class="canvas-3" width="300px" height="280px">ERROR</canvas>';
    canvas3 = document.querySelector('.canvas-3');
    ctx3 = canvas3.getContext('2d');
    ctx3.strokeStyle = '#3CBA94';
    ctx3.lineWidth = '4';
    for(let i = 0; i < imgs3.length; i++) {
        imgs3[i].isBusy = false;
        imgs3[i].isReady = false;
        imgs3[i].img.src = "img/circle-not-active.png";
        imgs3[i].img.classList.remove('circle-img_z-ind');
    }
    isCor13 = false;
    isCor23 = false;
    isCor33 = false;
});
