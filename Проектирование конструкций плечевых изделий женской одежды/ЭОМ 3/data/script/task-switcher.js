const circles = document.querySelectorAll('.circle');
const taskWraps = document.querySelectorAll('.practice-part-wrap')
const numNum = document.querySelector('.num-now')
let button
let i;
let ball = 0;
let numtaskNow = 1

let solvTask = [0,0,0,0,0,0,0,0,0,0,0,0]


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
        if(solvTask[numtaskNow - 1] === 0) {
            nextBtn.innerHTML = "Проверить"
        }
        else {
            nextBtn.innerHTML = "Далее"
        }
        if(solvTask[numtaskNow - 1] === 1 && numtaskNow == circles.length) {
            nextBtn.innerHTML = "Завершить"
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
        if(solvTask[numtaskNow - 1] === 0) { 
            nextBtn.innerHTML = "Проверить"
        }
        else {
            nextBtn.innerHTML = "Далее"
        }
    }
})

const nextBtn = document.querySelector('.next-btn')
nextBtn.addEventListener('click',()=> {
    if(nextBtn.innerHTML == "Проверить") {
        nextBtn.innerHTML = "Далее"
        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Завершить"
        }

        if(numtaskNow == 1) {
            solvTask[0] = 1
            document.querySelector('.true-answer-1').setAttribute('disabled', true);
            document.querySelector('.t-1-2').setAttribute('disabled', true);
            document.querySelector('.t-1-4').setAttribute('disabled', true);
            document.querySelector('.t-1-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-1').checked) { 
                ball++ 
                document.querySelector('.circle-1').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-1').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 2) {
            solvTask[1] = 1
            document.querySelector('.true-answer-2').setAttribute('disabled', true);
            document.querySelector('.t-2-2').setAttribute('disabled', true);
            document.querySelector('.t-2-4').setAttribute('disabled', true);
            document.querySelector('.t-2-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-2').checked) { 
                ball++ 
                document.querySelector('.circle-2').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-2').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 3) {
            solvTask[2] = 1
            document.querySelector('.true-answer-3').setAttribute('disabled', true);
            document.querySelector('.t-3-2').setAttribute('disabled', true);
            document.querySelector('.t-3-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-3').checked) { 
                ball++ 
                document.querySelector('.circle-3').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-3').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 4) {
            solvTask[3] = 1
            document.querySelector('.true-answer-4').setAttribute('disabled', true);
            document.querySelector('.t-4-2').setAttribute('disabled', true);
            document.querySelector('.t-4-4').setAttribute('disabled', true);
            document.querySelector('.t-4-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-4').checked) { 
                ball++ 
                document.querySelector('.circle-4').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-4').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 5) {
            solvTask[4] = 1
            document.querySelector('.true-answer-5').setAttribute('disabled', true);
            document.querySelector('.t-5-2').setAttribute('disabled', true);
            document.querySelector('.t-5-4').setAttribute('disabled', true);
            document.querySelector('.t-5-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-5').checked) { 
                ball++ 
                document.querySelector('.circle-5').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-5').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 6) {
            solvTask[5] = 1
            document.querySelector('.true-answer-6').setAttribute('disabled', true);
            document.querySelector('.t-6-2').setAttribute('disabled', true);
            document.querySelector('.t-6-4').setAttribute('disabled', true);
            document.querySelector('.t-6-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-6').checked) { 
                ball++ 
                document.querySelector('.circle-6').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-6').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 7) {
            solvTask[6] = 1
            document.querySelector('.true-answer-7').setAttribute('disabled', true);
            document.querySelector('.t-7-2').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-7').checked) { 
                ball++ 
                document.querySelector('.circle-7').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-7').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 8) {
            solvTask[7] = 1
            document.querySelector('.true-answer-8').setAttribute('disabled', true);
            document.querySelector('.t-8-2').setAttribute('disabled', true);
            document.querySelector('.t-8-4').setAttribute('disabled', true);
            document.querySelector('.t-8-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-8').checked) { 
                ball++ 
                document.querySelector('.circle-8').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-8').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 9) {
            solvTask[8] = 1
            document.querySelector('.answer-9-1').setAttribute('disabled', true);
            document.querySelector('.answer-9-2').setAttribute('disabled', true);
            document.querySelector('.answer-9-3').setAttribute('disabled', true);
            document.querySelector('.answer-9-4').setAttribute('disabled', true);
            document.querySelector('.answer-9-5').setAttribute('disabled', true);
            if(document.querySelector('.answer-9-1').value == 3 && document.querySelector('.answer-9-2').value == 4 &&
            document.querySelector('.answer-9-3').value == 1 && document.querySelector('.answer-9-4').value == 2 && document.querySelector('.answer-9-5').value == 5) { 
                ball++ 
                document.querySelector('.circle-9').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-9').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 10) {
            solvTask[9] = 1
            document.querySelector('.answer-10').setAttribute('disabled', true);
            if(document.querySelector('.answer-10').value == "4231" || document.querySelector('.answer-10').value == "4 2 3 1") { 
                ball++ 
                document.querySelector('.circle-10').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-10').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 11) {
            solvTask[10] = 1
            document.querySelector('.true-answer-11-1').setAttribute('disabled', true);
            document.querySelector('.not-true-answer-11-3').setAttribute('disabled', true);
            document.querySelector('.true-answer-11-2').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-11-1').checked && !(document.querySelector('.not-true-answer-11-3').checked) && 
            document.querySelector('.true-answer-11-2').checked) { 
                ball++ 
                document.querySelector('.circle-11').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-11').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 12) {
            solvTask[11] = 1
            document.querySelector('.answer-12').setAttribute('disabled', true);
            if(document.querySelector('.answer-12').value == "1324" || document.querySelector('.answer-12').value == "1 3 2 4") { 
                ball++ 
                document.querySelector('.circle-12').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-12').classList.add("circle_not-true-answer")
            }
        }

    }
    else {
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
            if(solvTask[numtaskNow-1] === 0) {
    
                nextBtn.innerHTML = "Проверить"
            }
            if(solvTask[numtaskNow - 1] === 1 && numtaskNow == circles.length) {
                nextBtn.innerHTML = "Завершить"
            } 
        }
    }
})

function RaschitatiBalli() {
    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}

function taskDescSwitch(numtaskNow) {
    if(numtaskNow == 1 || numtaskNow == 2 || numtaskNow == 3 || numtaskNow == 4 || numtaskNow == 5 || numtaskNow == 6 || numtaskNow == 8) {
        document.querySelector('.task-text').innerHTML = "Выбрать один правильный ответ:"
    }
    else if(numtaskNow == 7) {
        document.querySelector('.task-text').innerHTML = "Выберите правильный вариант перевода вытачки для данной модели:"
    }
    else if(numtaskNow == 9) {
        document.querySelector('.task-text').innerHTML = "Сопоставить определение и термин:"
    }
    else if(numtaskNow == 10) {
        document.querySelector('.task-text').innerHTML = "Установить последовательность основных этапов конструктивного моделирования женской блузы, представленной на рисунке:"
    }
    else if(numtaskNow == 11) {
        document.querySelector('.task-text').innerHTML = "Выберите несколько правильных ответов:"
    }
    else if(numtaskNow == 12) {
        document.querySelector('.task-text').innerHTML = "Установить последовательность переноса нагрудной вытачки:"
    }
}