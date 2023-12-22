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
        quationSwitcher()
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
    if(document.querySelector('.true-answer-3').checked) ball++
    if(document.querySelector('.true-answer-4').checked) ball++
    if(document.querySelector('.true-answer-5').checked) ball++
    if(document.querySelector('.true-answer-6').checked) ball++
    if(document.querySelector('.true-answer-7').checked) ball++
    if(document.querySelector('.answer-8-1').value == 2 && document.querySelector('.answer-8-2').value == 1 && document.querySelector('.answer-8-3').value == 6 && document.querySelector('.answer-8-4').value == 5 &&
    document.querySelector('.answer-8-5').value == 4 && document.querySelector('.answer-8-6').value == 3) ball++
    if(document.querySelector('.answer-9').value == 2431) ball++
    if(document.querySelector('.answer-10').value == 'соревновательный метод' || document.querySelector('.answer-10').value == 'Соревновательный метод') ball++
    if(document.querySelector('.answer-11').value == 'методический приём' || document.querySelector('.answer-11').value == 'Методический приём') ball++
    if(document.querySelector('.answer-12').value == 'форма физического упражнения' || document.querySelector('.answer-12').value == 'Форма физического упражнения') ball++
    if(!(document.querySelector('.not-true-answer-13-1').checked) && document.querySelector('.true-answer-13-2') && document.querySelector('.true-answer-13-5').checked &&
    !(document.querySelector('.not-true-answer-13-3').checked) && !(document.querySelector('.not-true-answer-13-4').checked)) ball++;

    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}

function quationSwitcher() {
    if(numtaskNow == 1 || numtaskNow == 2 || numtaskNow == 3 || numtaskNow == 6 || numtaskNow == 5 || numtaskNow == 6 || numtaskNow == 7) document.querySelector('.task-text').innerHTML = "Выберите один правильный ответ:"
    if(numtaskNow == 8) document.querySelector('.task-text').innerHTML = "Сопоставить классификационную группу и физические упражнения:"
    if(numtaskNow == 9) document.querySelector('.task-text').innerHTML = "Установите последовательность методов при обучении двигательного действия:"
    else if(numtaskNow == 12 || numtaskNow == 10 || numtaskNow == 11) document.querySelector('.task-text').innerHTML = "Заполните пропуск:"
    if(numtaskNow == 13) document.querySelector('.task-text').innerHTML = "Какие методы являются специфическими методами в физическом воспитании?"

}