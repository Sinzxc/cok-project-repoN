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
        console.log(button)

        document.querySelector(`#${button}`).classList.add('practice-part-wrap--active');
        tabTarget.classList.add('circle_active');     
        if(numtaskNow == 1 || numtaskNow == 2) document.querySelector('.task-text').innerHTML = "Выберите правильный ответ:"
        else if(numtaskNow == 3) document.querySelector('.task-text').innerHTML = "Восстановите правильный порядок обслуживания гостей в отел"
        else if(numtaskNow == 4) document.querySelector('.task-text').innerHTML = "Отметьте верные утверждения"
        else if(numtaskNow == 5) document.querySelector('.task-text').innerHTML = "Выберите правильные ответы"
        else if(numtaskNow == 6) document.querySelector('.task-text').innerHTML = "Сопоставьте обязанности сотрудников СПиР с их описанием"
        else if(numtaskNow == 7) document.querySelector('.task-text').innerHTML = "Реорганизуйте последовательность этапов процесса обслуживания гостей в отеле"
        else if(numtaskNow == 8) document.querySelector('.task-text').innerHTML = "Из перечисленных функций выделите функции службы бронирования"
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
        if(numtaskNow == 1 || numtaskNow == 2) document.querySelector('.task-text').innerHTML = "Выберите правильный ответ:"
        else if(numtaskNow == 3) document.querySelector('.task-text').innerHTML = "Восстановите правильный порядок обслуживания гостей в отел"
        else if(numtaskNow == 4) document.querySelector('.task-text').innerHTML = "Отметьте верные утверждения"
        else if(numtaskNow == 5) document.querySelector('.task-text').innerHTML = "Выберите правильные ответы"
        else if(numtaskNow == 6) document.querySelector('.task-text').innerHTML = "Отметьте верные утверждения"
        else if(numtaskNow == 7) document.querySelector('.task-text').innerHTML = "Сопоставьте обязанности сотрудников СПиР с их описанием"
        else if(numtaskNow == 8) document.querySelector('.task-text').innerHTML = "Реорганизуйте последовательность этапов процесса обслуживания гостей в отеле"
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
        const resultBlock = document.querySelector('.result-block');
        resultBlock.classList.add('result-block--active')
        document.querySelector('.virtual-simulator__footer').style.cssText = "display: none;"
        clearInterval(intervalId);
        RaschitatiBalli()
    }
    console.log(numtaskNow)
    if(numtaskNow < 8) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow++;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');
        if(numtaskNow == 1 || numtaskNow == 2) document.querySelector('.task-text').innerHTML = "Выберите правильный ответ:"
        else if(numtaskNow == 3) document.querySelector('.task-text').innerHTML = "Восстановите правильный порядок обслуживания гостей в отел"
        else if(numtaskNow == 4) document.querySelector('.task-text').innerHTML = "Отметьте верные утверждения"
        else if(numtaskNow == 5) document.querySelector('.task-text').innerHTML = "Выберите правильные ответы"
        else if(numtaskNow == 6) document.querySelector('.task-text').innerHTML = "Отметьте верные утверждения"
        else if(numtaskNow == 7) document.querySelector('.task-text').innerHTML = "Сопоставьте обязанности сотрудников СПиР с их описанием"
        else if(numtaskNow == 8) document.querySelector('.task-text').innerHTML = "Реорганизуйте последовательность этапов процесса обслуживания гостей в отеле"
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
    if(proverka()) ball++
    if(!(document.querySelector('.not-true-answer-4-1').checked) && !(document.querySelector('.not-true-answer-4-4').checked) && !(document.querySelector('.not-true-answer-4-5').checked) && document.querySelector('.true-answer-4-2').checked && document.querySelector('.true-answer-4-3').checked) ball++
    if(!(document.querySelector('.not-true-answer-5-2').checked) && !(document.querySelector('.not-true-answer-5-3').checked) && document.querySelector('.true-answer-5-1').checked && document.querySelector('.true-answer-5-4').checked) ball++
    if(document.querySelector('.answer-6-1').value == 5 && document.querySelector('.answer-6-2').value == 4 &&
    document.querySelector('.answer-6-3').value == 2 && document.querySelector('.answer-6-4').value == 1 && document.querySelector('.answer-6-5').value == 3) ball++
    if(document.querySelector('.answer-7').value == "бгвдае" || document.querySelector('.answer-7').value == "БГВДАЕ") ball++
    if(!(document.querySelector('.not-true-answer-8-2').checked) && !(document.querySelector('.not-true-answer-8-5').checked) &&!(document.querySelector('.not-true-answer-8-7').checked) && document.querySelector('.true-answer-8-1').checked && document.querySelector('.true-answer-8-3').checked && document.querySelector('.true-answer-8-4').checked &&document.querySelector('.true-answer-8-6').checked) ball++

    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}