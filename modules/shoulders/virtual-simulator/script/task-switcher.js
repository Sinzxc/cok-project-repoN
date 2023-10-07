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
        if(numtaskNow == 1 || numtaskNow == 2 || numtaskNow == 3 || numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Вам необходимо найти правильную модельную конструкцию плечевого изделия в соответствии с техническим эскизом"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где использовалось при моделировании коническое расширение детали"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где использовалось при моделировании параллельное расширение детали"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где вытачка частично перенесена в линию рельефа"
        }
        else if(numtaskNow == 8) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где вытачка перенесена в кокетку"
        }
        console.log(button)

        document.querySelector(`#${button}`).classList.add('practice-part-wrap--active');
        tabTarget.classList.add('circle_active');
        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Закончить"
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
        if(numtaskNow == 1 || numtaskNow == 2 || numtaskNow == 3 || numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Вам необходимо найти правильную модельную конструкцию плечевого изделия в соответствии с техническим эскизом"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где использовалось при моделировании коническое расширение детали"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где использовалось при моделировании параллельное расширение детали"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где вытачка частично перенесена в линию рельефа"
        }
        else if(numtaskNow == 8) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где вытачка перенесена в кокетку"
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
    if(numtaskNow < 8) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow++;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');

        if(numtaskNow == 1 || numtaskNow == 2 || numtaskNow == 3 || numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Вам необходимо найти правильную модельную конструкцию плечевого изделия в соответствии с техническим эскизом"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где использовалось при моделировании коническое расширение детали"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где использовалось при моделировании параллельное расширение детали"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где вытачка частично перенесена в линию рельефа"
        }
        else if(numtaskNow == 8) {
            document.querySelector('.task-text').innerHTML = "Выбрать модель одежды, где вытачка перенесена в кокетку"
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