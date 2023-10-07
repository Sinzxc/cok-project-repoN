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
        document.querySelector('.clear-btn').style.cssText = "display: none"
        document.querySelector('.clear-btn-2').style.cssText = "display: none"
        document.querySelector('.clear-btn-3').style.cssText = "display: none"
        
        numNum.innerHTML = button[5]
        numtaskNow = button[5] //номер задания
        if(numtaskNow == 1) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
            document.querySelector('.clear-btn').style.cssText = "display: block"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Какие качества должны быть у хорошего хозяина / хозяйки?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML = "Задание «верно-неверно»"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
            document.querySelector('.clear-btn-2').style.cssText = "display: block"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Найди правильные ответы"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Обучающимся предложен список предложений различных гостиниц, ресторанов и туристических агентств. Задание сопоставить каждое предложение с соответствующей организацией."
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте виды номеров гостиницы с их описанием"
            document.querySelector('.clear-btn-3').style.cssText = "display: block"
        }
        console.log(button)
        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Закончить"
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
    console.log(numtaskNow)
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
        if(numtaskNow == 1) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
            document.querySelector('.clear-btn').style.cssText = "display: block"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Какие качества должны быть у хорошего хозяина / хозяйки?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML = "Задание «верно-неверно»"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
            document.querySelector('.clear-btn-2').style.cssText = "display: block"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Найди правильные ответы"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Обучающимся предложен список предложений различных гостиниц, ресторанов и туристических агентств. Задание сопоставить каждое предложение с соответствующей организацией."
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте виды номеров гостиницы с их описанием"
        }
        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Закончить"
        }
        else {
            nextBtn.innerHTML = "Далее"
        }
    }
})

const nextBtn = document.querySelector('.next-btn')

nextBtn.addEventListener('click',()=> {
    if(nextBtn.innerHTML == "Закончить") {
        document.querySelector(`#task-${numtaskNow}`).classList.remove('practice-part-wrap--active');
        const resultBlock = document.querySelector('.result-block');
        resultBlock.classList.add('result-block--active')
        document.querySelector('.virtual-simulator__footer').style.cssText = "display: none;"
        clearInterval(intervalId);
        RaschitatiBalli()
    }
    console.log(numtaskNow)
    if(numtaskNow < circles.length) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow++;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');
        document.querySelector('.clear-btn').style.cssText = "display: none"
        if(numtaskNow == 1) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
            document.querySelector('.clear-btn').style.cssText = "display: block"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Какие качества должны быть у хорошего хозяина / хозяйки?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML = "Задание «верно-неверно»"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Установите соответствия"
            document.querySelector('.clear-btn-2').style.cssText = "display: block"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Найди правильные ответы"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Обучающимся предложен список предложений различных гостиниц, ресторанов и туристических агентств. Задание сопоставить каждое предложение с соответствующей организацией."
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте виды номеров гостиницы с их описанием"
        }
        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Закончить"
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

    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}

function RaschitatiBalli() {
    let ball = 0;
    if(iscor1 && isCor2 && isCor3) ball++
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

    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}