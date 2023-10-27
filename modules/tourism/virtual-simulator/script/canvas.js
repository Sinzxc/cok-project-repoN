let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d');
ctx.strokeStyle = '#3CBA94';
ctx.lineWidth = '4';

let isCor1 = false;
let isCor2 = false;
let isCor3 = false;

const imgs = [
    img1 = {
        img: document.querySelector('.img1'),
        isClick: false,
        isBusy: false,
        isReady: false,
    },
    img2 = {
        img: document.querySelector('.img2'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img3 = {
        img: document.querySelector('.img3'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img4 = {
        img: document.querySelector('.img4'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img5 = {
        img: document.querySelector('.img5'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img6 = {
        img: document.querySelector('.img6'),
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

imgs[0].img.addEventListener('click', ()=> {
    // Убирает активную картинку на всех, кроме той где кликнлуи
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].isClick = false;
        if(!imgs[i].isReady) imgs[i].img.src = "/modules/tourism/interactive-simulator/img/circle-not-active.png";
    }
    imgs[0].isClick = true;
    imgs[0].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
    
});

imgs[2].img.addEventListener('click', ()=> {
    // Убирает активную картинку на всех, кроме той где кликнлуи
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].isClick = false;
        if(!imgs[i].isReady) imgs[i].img.src = "/modules/tourism/interactive-simulator/img/circle-not-active.png";
    }
    imgs[2].isClick = true;
    imgs[2].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
});

imgs[4].img.addEventListener('click', ()=> {
    // Убирает активную картинку на всех, кроме той где кликнлуи
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].isClick = false;
        if(!imgs[i].isReady) imgs[i].img.src = "/modules/tourism/interactive-simulator/img/circle-not-active.png";
    }
    imgs[4].isClick = true;
    imgs[4].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
});

img2.img.addEventListener('click', (e) => {
    const { x, y } = relativeCoors(e);
    if(imgs[0].isClick && !imgs[1].isBusy) {
        imgs[0].isClick = false;
        imgs[0].isBusy = true;
        imgs[1].isBusy = true;
        imgs[0].isReady = true;
        imgs[1].isReady = true;
        ctx.moveTo(15,15);
        ctx.lineTo(285,15);
        ctx.stroke();
        imgs[1].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
        isCor1 = true;
        imgs[0].img.classList.add('circle-img_z-ind');
        imgs[1].img.classList.add('circle-img_z-ind');
    }
    else if(imgs[2].isClick && !imgs[1].isBusy) {
        imgs[2].isClick = false;
        imgs[2].isBusy = true;
        imgs[1].isBusy = true;
        imgs[2].isReady = true;
        imgs[1].isReady = true;
        ctx.moveTo(15,141);
        ctx.lineTo(285,15);
        ctx.stroke();
        imgs[1].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
        imgs[2].img.classList.add('circle-img_z-ind');
        imgs[1].img.classList.add('circle-img_z-ind');
    }
    else if(imgs[4].isClick && !imgs[1].isBusy) {
        imgs[4].isClick = false;
        imgs[4].isBusy = true;
        imgs[1].isBusy = true;
        imgs[4].isReady = true;
        imgs[1].isReady = true;
        ctx.moveTo(15,265);
        ctx.lineTo(285,15);
        ctx.stroke();
        imgs[1].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
        imgs[4].img.classList.add('circle-img_z-ind');
        imgs[1].img.classList.add('circle-img_z-ind');
        isCor1 = true;
    }
});

img4.img.addEventListener('click', (e) => {
    const { x, y } = relativeCoors(e);
    if(imgs[0].isClick && !imgs[3].isBusy) {
        imgs[0].isClick = false;
        imgs[0].isBusy = true;
        imgs[3].isBusy = true;
        imgs[0].isReady = true;
        imgs[3].isReady = true;
        ctx.moveTo(15,15);
        ctx.lineTo(285,141);
        ctx.stroke();
        imgs[3].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
        imgs[0].img.classList.add('circle-img_z-ind');
        imgs[3].img.classList.add('circle-img_z-ind');
        isCor2 = true;
    }
    else if(imgs[2].isClick && !imgs[3].isBusy) {
        imgs[2].isClick = false;
        imgs[2].isBusy = true;
        imgs[3].isBusy = true;
        imgs[2].isReady = true;
        imgs[3].isReady = true;
        ctx.moveTo(15,141);
        ctx.lineTo(285,141);
        ctx.stroke();
        imgs[3].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
        isCor2 = true;
        imgs[2].img.classList.add('circle-img_z-ind');
        imgs[3].img.classList.add('circle-img_z-ind');
    }
    else if(imgs[4].isClick && !imgs[3].isBusy) {
        imgs[4].isClick = false;
        imgs[3].isBusy = true;
        imgs[4].isBusy = true;
        imgs[4].isReady = true;
        imgs[3].isReady = true;
        ctx.moveTo(15,265);
        ctx.lineTo(285,141);
        ctx.stroke();
        imgs[3].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
        imgs[3].img.classList.add('circle-img_z-ind');
        imgs[4].img.classList.add('circle-img_z-ind');
    }
});

img6.img.addEventListener('click', (e) => {
    const { x, y } = relativeCoors(e);
    if(imgs[0].isClick && !imgs[5].isBusy) {
        imgs[0].isClick = false;
        imgs[0].isBusy = true;
        imgs[5].isBusy = true;
        imgs[0].isReady = true;
        imgs[5].isReady = true;
        ctx.moveTo(15,15);
        ctx.lineTo(285,265);
        ctx.stroke();
        imgs[5].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
        imgs[0].img.classList.add('circle-img_z-ind');
        imgs[5].img.classList.add('circle-img_z-ind');
    }
    else if(imgs[2].isClick && !imgs[5].isBusy) {
        imgs[2].isClick = false;
        imgs[2].isBusy = true;
        imgs[5].isBusy = true;
        imgs[2].isReady = true;
        imgs[5].isReady = true;
        ctx.moveTo(15,141);
        ctx.lineTo(285,265);
        ctx.stroke();
        imgs[5].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
        imgs[2].img.classList.add('circle-img_z-ind');
        imgs[5].img.classList.add('circle-img_z-ind');
        isCor3 = true;
    }
    else if(imgs[4].isClick && !imgs[5].isBusy) {
        imgs[4].isClick = false;
        imgs[4].isBusy = true;
        imgs[5].isBusy = true;
        imgs[4].isReady = true;
        imgs[5].isReady = true;
        ctx.moveTo(15,265);
        ctx.lineTo(285,265);
        ctx.stroke();
        imgs[5].img.src = "/modules/tourism/interactive-simulator/img/circle-active.png";
        isCor3 = true;
        imgs[4].img.classList.add('circle-img_z-ind');
        imgs[5].img.classList.add('circle-img_z-ind');
    }
});


document.querySelector('.clear-btn').addEventListener('click', ()=> {
    const parent = canvas.parentNode;
    parent.removeChild(canvas);
    document.querySelector('.canvas-container').innerHTML += '<canvas class="canvas" width="300px" height="280px">ERROR</canvas>';
    canvas = document.querySelector('.canvas');
    ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#3CBA94';
    ctx.lineWidth = '4';
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].isBusy = false;
        imgs[i].isReady = false;
        imgs[i].img.src = "/modules/tourism/interactive-simulator/img/circle-not-active.png";
        imgs[i].img.classList.remove('circle-img_z-ind');
    }
    isCor1 = false;
    isCor2 = false;
    isCor3 = false;
});



function proverka() {
    if(isCor1 && isCor2 && isCor3) {}
}