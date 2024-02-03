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
        document.querySelector('.clear-btn').style.cssText = "display: none"
        document.querySelector('.clear-btn-2').style.cssText = "display: none"
        document.querySelector('.clear-btn-3').style.cssText = "display: none"
        
        numNum.innerHTML = button[5]
        numtaskNow = button[5] //номер задания
        if(button[6] !== undefined) {
            numNum.innerHTML += button[6];
            numtaskNow = Number(numNum.innerHTML)
        }
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
        document.querySelector(`#${button}`).classList.add('practice-part-wrap--active');
        tabTarget.classList.add('circle_active');      
    })
}

const backBtn = document.querySelector('.back-btn')

backBtn.addEventListener('click',()=> {
    if(numtaskNow > 1) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');
            taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow--;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');
        document.querySelector('.clear-btn').style.cssText = "display: none"
        document.querySelector('.clear-btn-2').style.cssText = "display: none"
        document.querySelector('.clear-btn-3').style.cssText = "display: none"
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
            document.querySelector('.clear-btn').style.cssText = "display: none"
            if(isCor1 && isCor2 && isCor3) { 
                ball++ 
                document.querySelector('.circle-1').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-1').classList.add("circle_not-true-answer")
            }
        }
        else if(numtaskNow == 2) {
            solvTask[1] = 1
            document.querySelector('.true-answer-2-1').setAttribute('disabled', true);
            document.querySelector('.true-answer-2-2').setAttribute('disabled', true);
            document.querySelector('.true-answer-2-3').setAttribute('disabled', true);
            document.querySelector('.true-answer-2-4').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-2-1').checked && 
            !(document.querySelector('.true-answer-2-2').checked) &&
            document.querySelector('.true-answer-2-3').checked && 
            document.querySelector('.true-answer-2-4').checked) {
                ball++ 
                document.querySelector('.circle-2').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-2').classList.add("circle_not-true-answer")
            }
        }
        else if(numtaskNow == 3) {
            solvTask[2] = 1
            document.querySelector('.true-answer-3-1').setAttribute('disabled', true);
            document.querySelector('.true-answer-3-2').setAttribute('disabled', true);
            document.querySelector('.true-answer-3-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-3-1').checked && 
            !(document.querySelector('.true-answer-3-2').checked) &&
            document.querySelector('.true-answer-3-3').checked) {
                ball++
                document.querySelector('.circle-3').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-3').classList.add("circle_not-true-answer")
            }
        }
        else if(numtaskNow == 4) {
            solvTask[3] = 1
            document.querySelector('.clear-btn-2').style.cssText = "display: none"
            if(isCor12 && isCor22 && isCor32)  { 
                ball++ 
                document.querySelector('.circle-4').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-4').classList.add("circle_not-true-answer")
            }
        }
        else if(numtaskNow == 5) {
            solvTask[4] = 1
            document.querySelector('.true-answer-5-1').setAttribute('disabled', true);
            document.querySelector('.true-answer-5-2').setAttribute('disabled', true);
            if( document.querySelector('.true-answer-5-1').checked && 
            document.querySelector('.true-answer-5-2').checked) {
                ball++ 
                document.querySelector('.circle-5').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-5').classList.add("circle_not-true-answer")
            }
        }
        else if(numtaskNow == 6) {
            solvTask[5] = 1
            document.querySelector('.answer1-hostel').setAttribute('disabled', true);
            document.querySelector('.answer2-rest').setAttribute('disabled', true);
            document.querySelector('.answer3-tour-agent').setAttribute('disabled', true);
            if(document.querySelector('.answer1-hostel').value == 147810 && document.querySelector('.answer2-rest').value == 25 &&
            document.querySelector('.answer3-tour-agent').value == 369) {
                ball++
                document.querySelector('.circle-6').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-6').classList.add("circle_not-true-answer")
            }
            
        }
        else if(numtaskNow == 7) {
            solvTask[6] = 1
            document.querySelector('.clear-btn-3').style.cssText = "display: none"
            if(isCor13 && isCor23 && isCor33)  { 
                ball++ 
                document.querySelector('.circle-7').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-7').classList.add("circle_not-true-answer")
            }
        }
        else if(numtaskNow == 8) {
            solvTask[7] = 1
            document.querySelector('.answer-8-1').setAttribute('disabled', true);
            document.querySelector('.answer-8-2').setAttribute('disabled', true);
            document.querySelector('.answer-8-3').setAttribute('disabled', true);
            if(document.querySelector('.answer-8-1').value == 2 && document.querySelector('.answer-8-2').value == 3 &&
            document.querySelector('.answer-8-3').value == 1){
                ball++;
                document.querySelector('.circle-8').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-8').classList.add("circle_not-true-answer")
            }
        }
        else if(numtaskNow == 9) {
            solvTask[8] = 1
            document.querySelector('.answer-9').setAttribute('disabled', true);
            if(document.querySelector('.answer-9').value == "426351") {
                ball++;
                document.querySelector('.circle-9').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-9').classList.add("circle_not-true-answer")
            }
        }
        else if(numtaskNow == 10) {
            solvTask[9] = 1
            document.querySelector('.answer10-1').setAttribute('disabled', true);
            document.querySelector('.answer10-2').setAttribute('disabled', true);
            document.querySelector('.answer10-3').setAttribute('disabled', true);

            if(document.querySelector('.answer10-1').value == 3 && document.querySelector('.answer10-2').value == 2 &&
            document.querySelector('.answer10-3').value == 1) {
                ball++;
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
            document.querySelector('.clear-btn').style.cssText = "display: none"
            document.querySelector('.clear-btn-2').style.cssText = "display: none"
            document.querySelector('.clear-btn-3').style.cssText = "display: none"
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
    if(numtaskNow == 1) {
        document.querySelector('.task-text').innerHTML = "Установите соответствия"
        if(solvTask[0] === 0) document.querySelector('.clear-btn').style.cssText = "display: block" 
    }
    else if(numtaskNow == 2) {
        document.querySelector('.task-text').innerHTML = "Какие качества должны быть у хорошего хозяина / хозяйки?"
    }
    else if(numtaskNow == 3) {
        document.querySelector('.task-text').innerHTML = "Выберите верные утверждения"
    }
    else if(numtaskNow == 4) {
        document.querySelector('.task-text').innerHTML = "Установите соответствия"
        if(solvTask[3] === 0) document.querySelector('.clear-btn-2').style.cssText = "display: block"
    }
    else if(numtaskNow == 5) {
        document.querySelector('.task-text').innerHTML = "Найдите правильные ответы"
    }
    else if(numtaskNow == 6) {
        document.querySelector('.task-text').innerHTML = "Обучающимся предложен список предложений различных гостиниц, ресторанов и туристических агентств. Задание сопоставить каждое предложение с соответствующей организацией."
    }
    else if(numtaskNow == 7) {
        document.querySelector('.task-text').innerHTML = "Сопоставьте виды номеров гостиницы с их описанием"
        if(solvTask[6] === 0) document.querySelector('.clear-btn-3').style.cssText = "display: block"
    }
    else if(numtaskNow == 8) {
        document.querySelector('.task-text').innerHTML = "Необходимо сопоставить разработанное меню для гостей из Китая, Японии и Кавказа с их с предпочтениями и потребностями"
    }
    else if(numtaskNow == 10) {
        document.querySelector('.task-text').innerHTML = "Обучающимся необходимо сопоставить принципы гостеприимства с определениями"
    }
    else if(numtaskNow == 9) {
        document.querySelector('.task-text').innerHTML = "Обучающимся необходимо расположить этапы гостеприимства в правильном порядке"
    }
}