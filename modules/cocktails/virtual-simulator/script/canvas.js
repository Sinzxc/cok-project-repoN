let canvas = document.querySelector('.canvas');
let ctx2 = canvas.getContext('2d');
ctx2.strokeStyle = '#3CBA94';
ctx2.lineWidth = '4';

let isCor1 = false;
let isCor2 = false;
let isCor3 = false;

const imgs2 = [
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

imgs2[0].img.addEventListener('click', ()=> {
    // Убирает активную картинку на всех, кроме той где кликнлуи
    for(let i = 0; i < imgs2.length; i++) {
        imgs2[i].isClick = false;
        if(!imgs2[i].isReady) imgs2[i].img.src = "img/circle-not-active.png";
    }
    imgs2[0].isClick = true;
    imgs2[0].img.src = "img/circle-active.png";
    
});

imgs2[2].img.addEventListener('click', ()=> {
    // Убирает активную картинку на всех, кроме той где кликнлуи
    for(let i = 0; i < imgs2.length; i++) {
        imgs2[i].isClick = false;
        if(!imgs2[i].isReady) imgs2[i].img.src = "img/circle-not-active.png";
    }
    imgs2[2].isClick = true;
    imgs2[2].img.src = "img/circle-active.png";
});

imgs2[4].img.addEventListener('click', ()=> {
    // Убирает активную картинку на всех, кроме той где кликнлуи
    for(let i = 0; i < imgs2.length; i++) {
        imgs2[i].isClick = false;
        if(!imgs2[i].isReady) imgs2[i].img.src = "img/circle-not-active.png";
    }
    imgs2[4].isClick = true;
    imgs2[4].img.src = "img/circle-active.png";
});

img2.img.addEventListener('click', (e) => {
    const { x, y } = relativeCoors(e);
    if(imgs2[0].isClick && !imgs2[1].isBusy) {
        imgs2[0].isClick = false;
        imgs2[0].isBusy = true;
        imgs2[1].isBusy = true;
        imgs2[0].isReady = true;
        imgs2[1].isReady = true;
        ctx2.moveTo(15,15);
        ctx2.lineTo(285,15);
        ctx2.stroke();
        imgs2[1].img.src = "img/circle-active.png";
        isCor1 = true;
        imgs2[0].img.classList.add('circle-img_z-ind');
        imgs2[1].img.classList.add('circle-img_z-ind');
    }
    else if(imgs2[2].isClick && !imgs2[1].isBusy) {
        imgs2[2].isClick = false;
        imgs2[2].isBusy = true;
        imgs2[1].isBusy = true;
        imgs2[2].isReady = true;
        imgs2[1].isReady = true;
        ctx2.moveTo(15,141);
        ctx2.lineTo(285,15);
        ctx2.stroke();
        imgs2[1].img.src = "img/circle-active.png";
        imgs2[2].img.classList.add('circle-img_z-ind');
        imgs2[1].img.classList.add('circle-img_z-ind');
    }
    else if(imgs2[4].isClick && !imgs2[1].isBusy) {
        imgs2[4].isClick = false;
        imgs2[4].isBusy = true;
        imgs2[1].isBusy = true;
        imgs2[4].isReady = true;
        imgs2[1].isReady = true;
        ctx2.moveTo(15,265);
        ctx2.lineTo(285,15);
        ctx2.stroke();
        imgs2[1].img.src = "img/circle-active.png";
        imgs2[4].img.classList.add('circle-img_z-ind');
        imgs2[1].img.classList.add('circle-img_z-ind');
        isCor1 = true;
    }
});

img4.img.addEventListener('click', (e) => {
    const { x, y } = relativeCoors(e);
    if(imgs2[0].isClick && !imgs2[3].isBusy) {
        imgs2[0].isClick = false;
        imgs2[0].isBusy = true;
        imgs2[3].isBusy = true;
        imgs2[0].isReady = true;
        imgs2[3].isReady = true;
        ctx2.moveTo(15,15);
        ctx2.lineTo(285,141);
        ctx2.stroke();
        imgs2[3].img.src = "img/circle-active.png";
        imgs2[0].img.classList.add('circle-img_z-ind');
        imgs2[3].img.classList.add('circle-img_z-ind');
        isCor2 = true;
    }
    else if(imgs2[2].isClick && !imgs2[3].isBusy) {
        imgs2[2].isClick = false;
        imgs2[2].isBusy = true;
        imgs2[3].isBusy = true;
        imgs2[2].isReady = true;
        imgs2[3].isReady = true;
        ctx2.moveTo(15,141);
        ctx2.lineTo(285,141);
        ctx2.stroke();
        imgs2[3].img.src = "img/circle-active.png";
        isCor2 = true;
        imgs2[2].img.classList.add('circle-img_z-ind');
        imgs2[3].img.classList.add('circle-img_z-ind');
    }
    else if(imgs2[4].isClick && !imgs2[3].isBusy) {
        imgs2[4].isClick = false;
        imgs2[3].isBusy = true;
        imgs2[4].isBusy = true;
        imgs2[4].isReady = true;
        imgs2[3].isReady = true;
        ctx2.moveTo(15,265);
        ctx2.lineTo(285,141);
        ctx2.stroke();
        imgs2[3].img.src = "img/circle-active.png";
        imgs2[3].img.classList.add('circle-img_z-ind');
        imgs2[4].img.classList.add('circle-img_z-ind');
    }
});

img6.img.addEventListener('click', (e) => {
    const { x, y } = relativeCoors(e);
    if(imgs2[0].isClick && !imgs2[5].isBusy) {
        imgs2[0].isClick = false;
        imgs2[0].isBusy = true;
        imgs2[5].isBusy = true;
        imgs2[0].isReady = true;
        imgs2[5].isReady = true;
        ctx2.moveTo(15,15);
        ctx2.lineTo(285,265);
        ctx2.stroke();
        imgs2[5].img.src = "img/circle-active.png";
        imgs2[0].img.classList.add('circle-img_z-ind');
        imgs2[5].img.classList.add('circle-img_z-ind');
    }
    else if(imgs2[2].isClick && !imgs2[5].isBusy) {
        imgs2[2].isClick = false;
        imgs2[2].isBusy = true;
        imgs2[5].isBusy = true;
        imgs2[2].isReady = true;
        imgs2[5].isReady = true;
        ctx2.moveTo(15,141);
        ctx2.lineTo(285,265);
        ctx2.stroke();
        imgs2[5].img.src = "img/circle-active.png";
        imgs2[2].img.classList.add('circle-img_z-ind');
        imgs2[5].img.classList.add('circle-img_z-ind');
        isCor3 = true;
    }
    else if(imgs2[4].isClick && !imgs2[5].isBusy) {
        imgs2[4].isClick = false;
        imgs2[4].isBusy = true;
        imgs2[5].isBusy = true;
        imgs2[4].isReady = true;
        imgs2[5].isReady = true;
        ctx2.moveTo(15,265);
        ctx2.lineTo(285,265);
        ctx2.stroke();
        imgs2[5].img.src = "img/circle-active.png";
        isCor3 = true;
        imgs2[4].img.classList.add('circle-img_z-ind');
        imgs2[5].img.classList.add('circle-img_z-ind');
    }
});


document.querySelector('.clear-btn').addEventListener('click', ()=> {
    const parent = canvas.parentNode;
    parent.removeChild(canvas);
    document.querySelector('.canvas-container').innerHTML += '<canvas class="canvas" width="300px" height="280px">ERROR</canvas>';
    canvas = document.querySelector('.canvas');
    ctx2 = canvas.getContext('2d');
    ctx2.strokeStyle = '#3CBA94';
    ctx2.lineWidth = '4';
    for(let i = 0; i < imgs2.length; i++) {
        imgs2[i].isBusy = false;
        imgs2[i].isReady = false;
        imgs2[i].img.src = "img/circle-not-active.png";
        imgs2[i].img.classList.remove('circle-img_z-ind');
    }
    isCor1 = false;
    isCor2 = false;
    isCor3 = false;
});



function proverka() {
    if(isCor1 && isCor2 && isCor3) {}
}