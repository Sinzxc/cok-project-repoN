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
        quationSwitcher() 
        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Завершить"
        }
        else {
            nextBtn.innerHTML = "Далее"
        }

        document.querySelector(`#${button}`).classList.add('practice-part-wrap--active');
        tabTarget.classList.add('circle_active');      
    })
}

const backBtn = document.querySelector('.back-btn')

backBtn.addEventListener('click',()=> {
    if(numtaskNow > 1) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow--;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');

        quationSwitcher() 
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

        quationSwitcher() 
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

    if(document.querySelector('.answer-1-1').value == 1 && document.querySelector('.answer-1-2').value == 5 &&
    document.querySelector('.answer-1-3').value == 4 && document.querySelector('.answer-1-4').value == 6 && document.querySelector('.answer-1-5').value == 2 && document.querySelector('.answer-1-6').value == 3) ball++
    if(document.querySelector('.answer-2-1').value == 4 && document.querySelector('.answer-2-2').value == 3 &&
    document.querySelector('.answer-2-3').value == 2 && document.querySelector('.answer-2-4').value == 1) ball++
    if(document.querySelector('.answer-3').value == "майонез" || document.querySelector('.answer-3').value == "Майонез") ball++
    if(document.querySelector('.answer-4').value == "волованы с курицей" || document.querySelector('.answer-4').value == "Волованы с курицей") ball++
    if(document.querySelector('.answer-5').value == "150" || document.querySelector('.answer-5').value == "150") ball++
    if(document.querySelector('.answer-6').value == "30" || document.querySelector('.answer-6').value == "30") ball++
    if(document.querySelector('.answer-7').value == "Галантин" || document.querySelector('.answer-7').value == "галантин") ball++
    if(document.querySelector('.answer-8').value == "Заливное из курицы" || document.querySelector('.answer-8').value == "заливное из курицы") ball++

    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}

function quationSwitcher() {
    if(numtaskNow == 1) {
        document.querySelector('.task-text').innerHTML = "Установите соответствие между правильностью использования разделочных досок при приготовлении кулинарной продукции:"
    }
    else if(numtaskNow == 2) {
        document.querySelector('.task-text').innerHTML = "Установите соответствие между нормами расхода соли и специй для приготовления холодных блюд и закусок:"
    }
    else if(numtaskNow == 3 || numtaskNow == 4 || numtaskNow == 5 || numtaskNow == 7 || numtaskNow == 8 || numtaskNow == 6) {
        document.querySelector('.task-text').innerHTML = "Ответьте на вопрос:"
    }

}