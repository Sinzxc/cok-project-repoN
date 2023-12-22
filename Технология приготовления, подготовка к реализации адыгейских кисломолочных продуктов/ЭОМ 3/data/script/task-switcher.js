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
        if(button[6] !== undefined) {
            numNum.innerHTML += button[6];
            numtaskNow = Number(numNum.innerHTML)
        }

        document.querySelector(`#${button}`).classList.add('practice-part-wrap--active');
        tabTarget.classList.add('circle_active');     
        quationSwitcher() 
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
    if(document.querySelector('.true-answer-1').checked) ball++
    if(document.querySelector('.true-answer-2').checked) ball++
    if(document.querySelector('.true-answer-3-1').checked && !(document.querySelector('.not-true-answer-3-2').checked) &&
    document.querySelector('.true-answer-3-4').checked && !(document.querySelector('.not-true-answer-3-3').checked)) ball++
    if(document.querySelector('.true-answer-4-1').checked && document.querySelector('.true-answer-4-2').checked &&
    document.querySelector('.true-answer-4-3').checked) ball++
    if(!(document.querySelector('.not-true-answer-5-1').checked) && document.querySelector('.true-answer-5-2').checked &&
    document.querySelector('.true-answer-5-3').checked && !(document.querySelector('.not-true-answer-5-4').checked)) ball++
    if(document.querySelector('.answer-6').value == "32146579810" || document.querySelector('.answer-6').value == "3 2 1 4 6 5 7 9 8 10") ball++
    if(document.querySelector('.answer-7-1').value == 5 && document.querySelector('.answer-7-2').value == 2 &&
    document.querySelector('.answer-7-3').value == 9 && document.querySelector('.answer-7-4').value == 6 && document.querySelector('.answer-7-5').value == 8 &&
    document.querySelector('.answer-7-6').value == 4 && document.querySelector('.answer-7-7').value == 7 &&
    document.querySelector('.answer-7-8').value == 3 && document.querySelector('.answer-7-9').value == 1) ball++
    if((document.querySelector('.answer-8-1').value == "95-98" || document.querySelector('.answer-8-1').value == "95 - 98")  && (document.querySelector('.answer-8-2').value == "10-15" || (document.querySelector('.answer-8-2').value == "10 - 15"))) ball++
    if(document.querySelector('.answer-9-1').value == "38"  && document.querySelector('.answer-9-2').value == "55" && (document.querySelector('.answer-9-3').value == "77,5" || document.querySelector('.answer-9-3').value == "77.5")) ball++
    if(document.querySelector('.answer-10-1').value == "побочным"  && document.querySelector('.answer-10-3').value == "50" && 
    (document.querySelector('.answer-10-2').value == "подсырную, творожную и казеиновую" || document.querySelector('.answer-10-2').value == "подсырную, казеиновую и творожную" || document.querySelector('.answer-10-2').value == "творожную, казеиновую и подсырную" || document.querySelector('.answer-10-2').value == "творожную, подсырную и казеиновую" || document.querySelector('.answer-10-2').value == "казеиновую, творожную и подсырную" || document.querySelector('.answer-10-2').value == "казеиновую, подсырную и творожную")) ball++

    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}

function quationSwitcher() {
    if(numtaskNow == 1 || numtaskNow == 2) document.querySelector('.task-text').innerHTML = "Выберите один правильный ответ:"
    else if(numtaskNow == 3 || numtaskNow == 4 || numtaskNow == 5) document.querySelector('.task-text').innerHTML = "Выберите несколько правильных ответов:"
    else if(numtaskNow == 6) document.querySelector('.task-text').innerHTML = "Определите очередность технологических операций по производству адыгейского сыра:"
    else if(numtaskNow == 7) document.querySelector('.task-text').innerHTML = "Необходимо сопоставить вид сыра  с соответствующим названием  страны производителя:"
    else {
        document.querySelector('.task-text').innerHTML = "Введите в текстовые поля недостающие слова:"
    }
}