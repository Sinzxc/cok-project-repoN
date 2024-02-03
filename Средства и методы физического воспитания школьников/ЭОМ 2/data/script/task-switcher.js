const circles = document.querySelectorAll('.circle');
const taskWraps = document.querySelectorAll('.practice-part-wrap')
const numNum = document.querySelector('.num-now')

let i;
let ball = 0;
let numtaskNow = 1

let solvTask = [0,0,0,0,0,0,0,0,0,0]

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
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');
        quationSwitcher()
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
            document.querySelector('.answer-1-1').setAttribute('disabled', true);
            document.querySelector('.answer-1-2').setAttribute('disabled', true);
            document.querySelector('.answer-1-3').setAttribute('disabled', true);
            document.querySelector('.answer-1-4').setAttribute('disabled', true);
            if(document.querySelector('.answer-1-1').value == 4 && document.querySelector('.answer-1-2').value == 2 && document.querySelector('.answer-1-3').value == 3 && document.querySelector('.answer-1-4').value == 1) { 
                ball++ 
                document.querySelector('.circle-1').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-1').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 2) {
            solvTask[1] = 1
            document.querySelector('.true-answer-2-1').setAttribute('disabled', true);
            document.querySelector('.true-answer-2-3').setAttribute('disabled', true);
            document.querySelector('.true-answer-2-5').setAttribute('disabled', true);
            document.querySelector('.not-true-answer-2-2').setAttribute('disabled', true);
            document.querySelector('.not-true-answer-2-4').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-2-1').checked && document.querySelector('.true-answer-2-3') && document.querySelector('.true-answer-2-5').checked &&
    !(document.querySelector('.not-true-answer-2-2').checked) && !(document.querySelector('.not-true-answer-2-4').checked)) { 
                ball++ 
                document.querySelector('.circle-2').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-2').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 3) {
            solvTask[2] = 1
            document.querySelector('.answer-2-1').setAttribute('disabled', true);
            document.querySelector('.answer-2-2').setAttribute('disabled', true);
            document.querySelector('.answer-2-3').setAttribute('disabled', true);
            document.querySelector('.answer-2-4').setAttribute('disabled', true);
            if(document.querySelector('.answer-2-1').value == 3 && document.querySelector('.answer-2-2').value == 1 && document.querySelector('.answer-2-3').value == 2 && document.querySelector('.answer-2-4').value == 4) { 
                ball++ 
                document.querySelector('.circle-3').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-3').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 4) {
            solvTask[3] = 1
            document.querySelector('.answer-4-1').setAttribute('disabled', true);
            document.querySelector('.answer-4-2').setAttribute('disabled', true);
            document.querySelector('.answer-4-3').setAttribute('disabled', true);
            if(document.querySelector('.answer-4-1').value == 2 && document.querySelector('.answer-4-2').value == 3 && document.querySelector('.answer-4-3').value == 1) { 
                ball++ 
                document.querySelector('.circle-4').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-4').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 5) {
            solvTask[4] = 1
            document.querySelector('.answer-5-1').setAttribute('disabled', true);
            document.querySelector('.answer-5-2').setAttribute('disabled', true);
            document.querySelector('.answer-5-3').setAttribute('disabled', true);
            document.querySelector('.answer-5-4').setAttribute('disabled', true);
            document.querySelector('.answer-5-5').setAttribute('disabled', true);
            if(document.querySelector('.answer-5-1').value == 4 && document.querySelector('.answer-5-2').value == 3 && document.querySelector('.answer-5-3').value == 2 && document.querySelector('.answer-5-4').value == 1 && document.querySelector('.answer-5-5').value == 5) { 
                ball++ 
                document.querySelector('.circle-5').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-5').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 6) {
            solvTask[5] = 1
            document.querySelector('.answer-6-1').setAttribute('disabled', true);
            document.querySelector('.answer-6-2').setAttribute('disabled', true);
            document.querySelector('.answer-6-3').setAttribute('disabled', true);
            document.querySelector('.answer-6-4').setAttribute('disabled', true);
            if(document.querySelector('.answer-6-1').value == 3 && document.querySelector('.answer-6-2').value == 2 && document.querySelector('.answer-6-3').value == 4 && document.querySelector('.answer-6-4').value == 1) { 
                ball++ 
                document.querySelector('.circle-6').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-6').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 7) {
            solvTask[6] = 1
            document.querySelector('.answer-7').setAttribute('disabled', true);
            if(document.querySelector('.answer-7').value == 'движение' || document.querySelector('.answer-7').value == 'Движение')  { 
                ball++ 
                document.querySelector('.circle-7').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-7').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 8) {
            solvTask[7] = 1
            document.querySelector('.answer-9').setAttribute('disabled', true);
            if(document.querySelector('.answer-9').value == 'движение' || document.querySelector('.answer-9').value == 'Движение')  { 
                ball++ 
                document.querySelector('.circle-8').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-8').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 9) {
            solvTask[8] = 1
            document.querySelector('.answer-9').setAttribute('disabled', true);
            if(document.querySelector('.answer-9').value == 'движение' || document.querySelector('.answer-9').value == 'Движение')  { 
                ball++ 
                document.querySelector('.circle-9').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-9').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 10) {
            solvTask[9] = 1
            document.querySelector('.true-answer-10-1').setAttribute('disabled', true);
            document.querySelector('.true-answer-10-2').setAttribute('disabled', true);
            document.querySelector('.true-answer-10-4').setAttribute('disabled', true);
            document.querySelector('.true-answer-10-6').setAttribute('disabled', true);
            document.querySelector('.not-true-answer-10-3').setAttribute('disabled', true);
            document.querySelector('.not-true-answer-10-5').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-10-1').checked && !(document.querySelector('.not-true-answer-10-3').checked)
    && document.querySelector('.true-answer-10-2').checked && document.querySelector('.true-answer-10-4').checked && document.querySelector('.true-answer-10-6').checked && !(document.querySelector('.not-true-answer-10-5').checked)) { 
                ball++ 
                document.querySelector('.circle-10').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-10').classList.add("circle_not-true-answer")
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
    
        if(numtaskNow < circles.length) {
            for(i = 0; i < circles.length; i++) {
                circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
            }
    
            numtaskNow++;
            document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
            numNum.innerHTML = numtaskNow
            circles[numtaskNow - 1].classList.add('circle_active');
            if(numtaskNow == 1) document.querySelector('.task-text').innerHTML = "Задание в виде сопоставления"
            quationSwitcher()
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

function quationSwitcher() {
    if(numtaskNow == 1) document.querySelector('.task-text').innerHTML = "Задание в виде сопоставления:"
    else if(numtaskNow == 2) document.querySelector('.task-text').innerHTML = "Выберите верные утверждения:"
    else if(numtaskNow == 3) document.querySelector('.task-text').innerHTML = "Сопоставьте группы методов с их разновидностями:"
    else if(numtaskNow == 4) document.querySelector('.task-text').innerHTML = "Сопоставьте группы средств с их разновидностями:"
    else if(numtaskNow == 5) document.querySelector('.task-text').innerHTML = "Сопоставьте методы обучения двигательным действиям, методы частично –регламентированного упражнения с их недостатками и сущностью:"
    else if(numtaskNow == 6) document.querySelector('.task-text').innerHTML = "Сопоставьте  методы физического воспитания с их классификациями:"
    else if(numtaskNow == 7 || numtaskNow == 8 || numtaskNow == 9) document.querySelector('.task-text').innerHTML = "Заполните пропуск:"
    else if(numtaskNow == 10) document.querySelector('.task-text').innerHTML = "К  гигиеническим  факторам, содействующим укреплению здоровья относятся:"
}