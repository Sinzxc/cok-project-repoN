const circles = document.querySelectorAll('.circle');
const taskWraps = document.querySelectorAll('.practice-part-wrap')
const numNum = document.querySelector('.num-now')
let button
let i;
let numtaskNow = 1

for(i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', (evt)=> {
        const tabTarget = evt.currentTarget;
        button = tabTarget.dataset.button;
        
        let i;
        for(i = 0; i < taskWraps.length; i++) {
            circles[i].classList.remove('circle_active');
            taskWraps[i].classList.remove('practice-part-wrap--active')
        }
        numNum.innerHTML = button[5]
        numtaskNow = button[5] //номер задания
        if(button[6] !== undefined) {
            numNum.innerHTML += button[6];
            numtaskNow = Number(numNum.innerHTML)
        }
        
        document.querySelector(`#${button}`).classList.add('practice-part-wrap--active');
        tabTarget.classList.add('circle_active');   

        taskDescSwitch(numtaskNow)
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
    if(numtaskNow > 1) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow--;

        circles[numtaskNow - 1].classList.add('circle_active');
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
    
        taskDescSwitch(numtaskNow)

        nextBtn.innerHTML = "Далее"
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

    if(numtaskNow < 12) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');
            taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow++;

        circles[numtaskNow - 1].classList.add('circle_active');
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow

        taskDescSwitch(numtaskNow)
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
    if(document.querySelector('.true-answer-1').checked) ball++
    if(document.querySelector('.true-answer-2').checked) ball++
    if(document.querySelector('.true-answer-3').checked) ball++
    if(document.querySelector('.true-answer-4').checked) ball++
    if(document.querySelector('.true-answer-5').checked) ball++
    if(document.querySelector('.true-answer-6').checked) ball++
    if(document.querySelector('.true-answer-7').checked) ball++
    if(document.querySelector('.true-answer-8').checked) ball++
    if(document.querySelector('.answer-9-1').value == 3 && document.querySelector('.answer-9-2').value == 4 &&
    document.querySelector('.answer-9-3').value == 1 && document.querySelector('.answer-9-4').value == 2 && document.querySelector('.answer-9-5').value == 5) ball++
    if(document.querySelector('.answer-10').value == "4231" || document.querySelector('.answer-10').value == "4 2 3 1") ball++
    if(document.querySelector('.true-answer-11-1').checked && !(document.querySelector('.not-true-answer-11-3').checked) && 
    document.querySelector('.true-answer-11-2').checked) ball++
    if(document.querySelector('.answer-12').value == "1324" || document.querySelector('.answer-12').value == "1 3 2 4") ball++
    
    
    
    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}

function taskDescSwitch(numtaskNow) {
    if(numtaskNow == 1 || numtaskNow == 2 || numtaskNow == 3 || numtaskNow == 4 || numtaskNow == 5 || numtaskNow == 6 || numtaskNow == 8) {
        document.querySelector('.task-text').innerHTML = "Выбрать один правильный ответ"
    }
    else if(numtaskNow == 7) {
        document.querySelector('.task-text').innerHTML = "Выберите правильный вариант перевода вытачки для данной модели"
    }
    else if(numtaskNow == 9) {
        document.querySelector('.task-text').innerHTML = "Сопоставить определение и термин"
    }
    else if(numtaskNow == 10) {
        document.querySelector('.task-text').innerHTML = "Установить последовательность основных этапов конструктивного моделирования женской блузы, представленной на рисунке"
    }
    else if(numtaskNow == 11) {
        document.querySelector('.task-text').innerHTML = "Выберите несколько правильных ответов"
    }
    else if(numtaskNow == 12) {
        document.querySelector('.task-text').innerHTML = "Установить последовательность переноса нагрудной вытачки"
    }
}