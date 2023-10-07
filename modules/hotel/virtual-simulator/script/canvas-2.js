let canvas2 = document.querySelector('.canvas-2');
let ctx2 = canvas2.getContext('2d');
ctx2.strokeStyle = '#3CBA94';
ctx2.lineWidth = '4';

let isCor12 = false;
let isCor22 = false;
let isCor32 = false;

const imgs2 = [
    img12 = {
        img: document.querySelector('.img12'),
        isClick: false,
        isBusy: false,
        isReady: false,
    },
    img22 = {
        img: document.querySelector('.img22'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img32 = {
        img: document.querySelector('.img32'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img42 = {
        img: document.querySelector('.img42'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img52 = {
        img: document.querySelector('.img52'),
        isClick: false,
        isBusy: false,
        sReady: false,
    },
    img62 = {
        img: document.querySelector('.img62'),
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

img22.img.addEventListener('click', (e) => {
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
        isCor12 = true;
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
    } 
});

img42.img.addEventListener('click', (e) => {
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
        isCor22 = true;
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
    console.log(isCor22)
});

img62.img.addEventListener('click', (e) => {
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
        isCor32 = true;
        imgs2[4].img.classList.add('circle-img_z-ind');
        imgs2[5].img.classList.add('circle-img_z-ind');
    }
    console.log(isCor32)
});


document.querySelector('.clear-btn-2').addEventListener('click', ()=> {
    const parent = canvas2.parentNode;
    parent.removeChild(canvas2);
    document.querySelector('.canvas-container-2').innerHTML += '<canvas class="canvas-2" width="300px" height="280px">ERROR</canvas>';
    canvas2 = document.querySelector('.canvas-2');
    ctx2 = canvas2.getContext('2d');
    ctx2.strokeStyle = '#3CBA94';
    ctx2.lineWidth = '4';
    for(let i = 0; i < imgs2.length; i++) {
        imgs2[i].isBusy = false;
        imgs2[i].isReady = false;
        imgs2[i].img.src = "img/circle-not-active.png";
        imgs2[i].img.classList.remove('circle-img_z-ind');
    }
    iscor12 = false;
    isCor22 = false;
    isCor32 = false;
});