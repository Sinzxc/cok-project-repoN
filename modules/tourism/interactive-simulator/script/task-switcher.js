const circles = document.querySelectorAll('.circle');
const taskWraps = document.querySelectorAll('.practice-part-wrap')
const numNum = document.querySelector('.num-now')

let i;
let numtaskNow = 1
for(i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', (evt)=> {
        const tabTarget = evt.currentTarget;
        const button = tabTarget.dataset.button;
        document.querySelector('.clear-btn').style.cssText = "display: none"
        let i;
        for(i = 0; i < taskWraps.length; i++) {
            circles[i].classList.remove('circle_active');
            taskWraps[i].classList.remove('practice-part-wrap--active')
        }
        numNum.innerHTML = button[5]
        numtaskNow = button[5] //номер задания
        if(numtaskNow == 1) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию гостеприимства в отеле и ответьте на вопрос: Какие аспекты гостеприимства можно наблюдать на этой картинке?"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию двух ресторанов. Определите, в каком ресторане присутствует большее проявление гостеприимства?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML =  "Рассмотрите иллюстрацию выберите правильный ответ"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте следующие ключевые слова с их определениями"
            document.querySelector('.clear-btn').style.cssText = "display: block"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию, изображающую группу туристов, которым помогают с чемоданами на вокзале. Назовите аспекты гостеприимства, которые проявлены на этой картинке"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию ресторана, где официантка дружелюбно улыбается, принося гостю заказ, как проявление гостеприимства. Выберите, правильные ответы"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Разберите понятие «кубок, наполненный добротой» на составляющие элементы и отметьте их значимость в рамках гостеприимства"
        }
        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Закончить"
        }
        else {
            nextBtn.innerHTML = "Далее"
        }

        console.log(button)

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

        if(numtaskNow == 1) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию гостеприимства в отеле и ответьте на вопрос: Какие аспекты гостеприимства можно наблюдать на этой картинке?"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию двух ресторанов. Определите, в каком ресторане присутствует большее проявление гостеприимства?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML =  "Рассмотрите иллюстрацию выберите правильный ответ"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте следующие ключевые слова с их определениями"
            document.querySelector('.clear-btn').style.cssText = "display: block"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию, изображающую группу туристов, которым помогают с чемоданами на вокзале. Назовите аспекты гостеприимства, которые проявлены на этой картинке"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию ресторана, где официантка дружелюбно улыбается, принося гостю заказ, как проявление гостеприимства. Выберите, правильные ответы"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Разберите понятие «кубок, наполненный добротой» на составляющие элементы и отметьте их значимость в рамках гостеприимства"
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
    if(numtaskNow < 7) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow++;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        document.querySelector('.clear-btn').style.cssText = "display: none"
        circles[numtaskNow - 1].classList.add('circle_active');

        if(numtaskNow == 1) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию гостеприимства в отеле и ответьте на вопрос: Какие аспекты гостеприимства можно наблюдать на этой картинке?"
        }
        else if(numtaskNow == 2) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию двух ресторанов. Определите, в каком ресторане присутствует большее проявление гостеприимства?"
        }
        else if(numtaskNow == 3) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию выберите правильный ответ"
        }
        else if(numtaskNow == 4) {
            document.querySelector('.task-text').innerHTML = "Сопоставьте следующие ключевые слова с их определениями"
            document.querySelector('.clear-btn').style.cssText = "display: block"
        }
        else if(numtaskNow == 5) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию, изображающую группу туристов, которым помогают с чемоданами на вокзале. Назовите аспекты гостеприимства, которые проявлены на этой картинке"
        }
        else if(numtaskNow == 6) {
            document.querySelector('.task-text').innerHTML = "Рассмотрите иллюстрацию ресторана, где официантка дружелюбно улыбается, принося гостю заказ, как проявление гостеприимства. Выберите, правильные ответы"
        }
        else if(numtaskNow == 7) {
            document.querySelector('.task-text').innerHTML = "Разберите понятие «кубок, наполненный добротой» на составляющие элементы и отметьте их значимость в рамках гостеприимства"
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
    if(document.querySelector('.true-answer-1').checked && !(document.querySelector('.not-true-answer-1').checked))  ball++
    if(document.querySelector('.true-answer-2').checked && !(document.querySelector('.not-true-answer-2').checked))  ball++
    if(document.querySelector('.true-answer-3').checked && !(document.querySelector('.not-true-answer-3').checked))  ball++
    if(isCor1 && isCor2 && isCor3) ball++
    if(document.querySelector('.true-answer-5-1').checked && document.querySelector('.true-answer-5-2').checked &&
    document.querySelector('.true-answer-5-3').checked)  ball++
    if(document.querySelector('.true-answer-6-1').checked && document.querySelector('.true-answer-6-2').checked)  ball++
    if(document.querySelector('.true-answer-7-1').checked && !(document.querySelector('.not-true-answer-7-2').checked)
    && document.querySelector('.true-answer-7-3') && document.querySelector('.true-answer-7-4') && document.querySelector('.true-answer-7-5') && document.querySelector('.true-answer-7-6'))  ball++


    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}