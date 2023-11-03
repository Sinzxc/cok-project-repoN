const circles = document.querySelectorAll('.circle');
const taskWraps = document.querySelectorAll('.practice-part-wrap')
const numNum = document.querySelector('.num-now')

let i;
let numtaskNow = 1
for(i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', (evt)=> {
        const tabTarget = evt.currentTarget;
        const button = tabTarget.dataset.button;

        let i;
        for(i = 0; i < taskWraps.length; i++) {
            circles[i].classList.remove('circle_active');
            taskWraps[i].classList.remove('practice-part-wrap--active')
        }
        numNum.innerHTML = button[5]
        numtaskNow = button[5] //номер задания

        document.querySelector(`#${button}`).classList.add('practice-part-wrap--active');
        tabTarget.classList.add('circle_active');

        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Завершить"
        }
        else {
            nextBtn.innerHTML = "Далее"
        }
    })
}

const backBtn = document.querySelector('.back-btn')

backBtn.addEventListener('click',()=> {
    console.log(numtaskNow)
    if(numtaskNow > 1) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow--;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');
        
        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Завершить"
        }
        else {
            nextBtn.innerHTML = "Далее"
        }
    }
})

const nextBtn = document.querySelector('.next-btn')

nextBtn.addEventListener('click',()=> {
    if(nextBtn.innerHTML == "Завершить") {
        document.querySelector(`#task-${numtaskNow}`).classList.remove('practice-part-wrap--active');
        document.querySelector('.virtual-simulator__active-part').classList.add('hide');
        document.querySelector('.virtual-simulator__result-part').classList.remove('hide');
        const resultBlock = document.querySelector('.result-block');
        resultBlock.classList.add('result-block--active')
        document.querySelector('.virtual-simulator__footer').style.cssText = "display: none;"
        clearInterval(intervalId);
        RaschitatiBalli()
    }

    if(numtaskNow < circles.length) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow++;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');
        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Завершить"
        }
        else {
            nextBtn.innerHTML = "Далее"
        }
    }   
})


function RaschitatiBalli() {
    let ball = 0;
    if(document.querySelector('.answer-1-1').value == 4 && document.querySelector('.answer-1-2').value == 2 && document.querySelector('.answer-1-3').value == 3 && document.querySelector('.answer-1-4').value == 1) ball++;
    if(document.querySelector('.true-answer-2-1').checked && document.querySelector('.true-answer-2-3') && document.querySelector('.true-answer-2-5').checked &&
    !(document.querySelector('.not-true-answer-2-2').checked) && !(document.querySelector('.not-true-answer-2-4').checked)) ball++;
    if(document.querySelector('.answer-2-1').value == 3 && document.querySelector('.answer-2-2').value == 1 && document.querySelector('.answer-2-3').value == 2 && document.querySelector('.answer-2-4').value == 4) ball++;
    if(document.querySelector('.answer-4-1').value == 2 && document.querySelector('.answer-4-2').value == 3 && document.querySelector('.answer-4-3').value == 1) ball++;
    if(document.querySelector('.answer-5-1').value == 4 && document.querySelector('.answer-5-2').value == 3 && document.querySelector('.answer-5-3').value == 2 && document.querySelector('.answer-5-4').value == 1 && document.querySelector('.answer-5-5').value == 5) ball++;
    if(document.querySelector('.answer-6-1').value == 3 && document.querySelector('.answer-6-2').value == 2 && document.querySelector('.answer-6-3').value == 4 && document.querySelector('.answer-6-4').value == 1) ball++;
    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}