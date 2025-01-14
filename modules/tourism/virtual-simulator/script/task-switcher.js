const circles = document.querySelectorAll('.circle');
const taskWraps = document.querySelectorAll('.practice-part-wrap')
const numNum = document.querySelector('.num-now')
console.log('dsfsdkjf')
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
        document.querySelector('.clear-btn').style.cssText = "display: none"
        document.querySelector('.clear-btn-2').style.cssText = "display: none"
        document.querySelector('.clear-btn-3').style.cssText = "display: none"
        
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
        document.querySelector('.clear-btn').style.cssText = "display: none"
        document.querySelector('.clear-btn-2').style.cssText = "display: none"
        document.querySelector('.clear-btn-3').style.cssText = "display: none"
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
        document.querySelector('.clear-btn').style.cssText = "display: none"
        document.querySelector('.clear-btn-2').style.cssText = "display: none"
        document.querySelector('.clear-btn-3').style.cssText = "display: none"
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
    if(isCor1 && isCor2 && isCor3) ball++
    if(document.querySelector('.true-answer-2-1').checked && 
        !(document.querySelector('.true-answer-2-2').checked) &&
        document.querySelector('.true-answer-2-3').checked && 
        document.querySelector('.true-answer-2-4').checked) ball++
    if(document.querySelector('.true-answer-3-1').checked && 
        !(document.querySelector('.true-answer-3-2').checked) &&
        document.querySelector('.true-answer-3-3').checked) ball++
    if(isCor12 && isCor22 && isCor32) ball++
    if( document.querySelector('.true-answer-5-1').checked && 
    document.querySelector('.true-answer-5-2').checked) ball++
    if(isCor13 && isCor23 && isCor33) ball++
    if(document.querySelector('.answer1-hostel').value == 147810 && document.querySelector('.answer2-rest').value == 25 &&
    document.querySelector('.answer3-tour-agent').value == 369) ball++
    if(document.querySelector('.answer-8-1').value == 2 && document.querySelector('.answer-8-2').value == 3 &&
    document.querySelector('.answer-8-3').value == 1) ball++

    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}

function quationSwitcher() {
    if(numtaskNow == 1) {
        document.querySelector('.task-text').innerHTML = "Установите соответствия"
        document.querySelector('.clear-btn').style.cssText = "display: block"
    }
    else if(numtaskNow == 2) {
        document.querySelector('.task-text').innerHTML = "Какие качества должны быть у хорошего хозяина / хозяйки?"
    }
    else if(numtaskNow == 3) {
        document.querySelector('.task-text').innerHTML = "Выберите верные утверждения"
    }
    else if(numtaskNow == 4) {
        document.querySelector('.task-text').innerHTML = "Установите соответствия"
        document.querySelector('.clear-btn-2').style.cssText = "display: block"
    }
    else if(numtaskNow == 5) {
        document.querySelector('.task-text').innerHTML = "Найдите правильные ответы"
    }
    else if(numtaskNow == 6) {
        document.querySelector('.task-text').innerHTML = "Обучающимся предложен список предложений различных гостиниц, ресторанов и туристических агентств. Задание сопоставить каждое предложение с соответствующей организацией."
    }
    else if(numtaskNow == 7) {
        document.querySelector('.task-text').innerHTML = "Сопоставьте виды номеров гостиницы с их описанием"
        document.querySelector('.clear-btn-3').style.cssText = "display: block"
    }
    else if(numtaskNow == 8) {
        document.querySelector('.task-text').innerHTML = "Необходимо сопоставить разработанное меню для гостей из Китая, Японии и Кавказа с их с предпочтениями и потребностями"
    }
}