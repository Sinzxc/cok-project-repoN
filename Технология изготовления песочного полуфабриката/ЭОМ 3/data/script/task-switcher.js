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
        answer()
        if(solvTask[numtaskNow - 1] === 0) {
            nextBtn.innerHTML = "Ответить"
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
        answer()
        if(solvTask[numtaskNow - 1] === 0) { 
            nextBtn.innerHTML = "Ответить"
        }
        else {
            nextBtn.innerHTML = "Далее"
        }
    }
})

const nextBtn = document.querySelector('.next-btn')

nextBtn.addEventListener('click',()=> {
    if(nextBtn.innerHTML == "Ответить") {
        nextBtn.innerHTML = "Далее"
        if(numtaskNow == circles.length) {
            nextBtn.innerHTML = "Завершить"
        }

        if(numtaskNow == 1) {
            solvTask[0] = 1
            document.querySelector('.sopostavit-task__input').setAttribute('disabled', true);
            if(document.querySelector('.sopostavit-task__input').value == '2751436' ||
            document.querySelector('.sopostavit-task__input').value == '2, 7, 5, 1, 4, 3, 6' || document.querySelector('.sopostavit-task__input').value == '2 7 5 1 4 3 6') { 
                ball++ 
                document.querySelector('.circle-1').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-1').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 2) {
            solvTask[1] = 1
            document.querySelector('.answer-input-1').setAttribute('disabled', true);
            document.querySelector('.answer-input-2').setAttribute('disabled', true);
            document.querySelector('.answer-input-3').setAttribute('disabled', true);
            document.querySelector('.answer-input-4').setAttribute('disabled', true);
            document.querySelector('.answer-input-5').setAttribute('disabled', true);
            if((document.querySelector('.answer-input-1').value == '15' || document.querySelector('.answer-input-1').value == '1 5') && 
    (document.querySelector('.answer-input-2').value == '47' || document.querySelector('.answer-input-2').value == '4 7') &&
    (document.querySelector('.answer-input-3').value == '69' || document.querySelector('.answer-input-3').value == '6 9') &&
    (document.querySelector('.answer-input-4').value == '28' || document.querySelector('.answer-input-4').value == '2 8') &&
    (document.querySelector('.answer-input-5').value == '3')) { 
                ball++ 
                document.querySelector('.circle-2').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-2').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 3) {
            solvTask[2] = 1
            document.querySelector('.input-task-3').setAttribute('disabled', true);
            if(document.getElementsByClassName('input-task-3')[0].value == 'Клейковина муки' || document.getElementsByClassName('input-task-3')[0].value == 'клейковина муки') { 
                ball++ 
                document.querySelector('.circle-3').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-3').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 4) {
            solvTask[3] = 1
            document.querySelector('.input-task-4').setAttribute('disabled', true);
            if(document.getElementsByClassName('input-task-4')[0].value == 'Тестомесильная машина' || document.getElementsByClassName('input-task-4')[0].value == 'тестомесильная машина') { 
                ball++ 
                document.querySelector('.circle-4').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-4').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 5) {
            solvTask[4] = 1
            document.querySelector('.input-task-5').setAttribute('disabled', true);
            if(document.getElementsByClassName('input-task-5')[0].value == 'вырубки для теста' || document.getElementsByClassName('input-task-5')[0].value == 'Вырубки для теста') { 
                ball++ 
                document.querySelector('.circle-5').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-5').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 6) {
            solvTask[5] = 1
            document.querySelector('.sopostavit-task__input-6').setAttribute('disabled', true);
            if(document.querySelector('.sopostavit-task__input-6').value == '315492768' ||
            document.querySelector('.sopostavit-task__input-6').value == '3, 1, 5, 4, 9, 2, 7, 6, 8' || document.querySelector('.sopostavit-task__input-6').value == '3 1 5 4 9 2 7 6 8') { 
                ball++ 
                document.querySelector('.circle-6').classList.add("circle_true-answer")
            }
            else {
                document.querySelector('.circle-6').classList.add("circle_not-true-answer")
            }
        }
        if(numtaskNow == 7) {
            solvTask[6] = 1
            document.querySelector('.answer-input-7-1').setAttribute('disabled', true);
            document.querySelector('.answer-input-7-2').setAttribute('disabled', true);
            document.querySelector('.answer-input-7-3').setAttribute('disabled', true);
            document.querySelector('.answer-input-7-4').setAttribute('disabled', true);
            if(document.querySelector('.answer-input-7-1').value == '4' && document.querySelector('.answer-input-7-2').value == '3' &&
    document.querySelector('.answer-input-7-3').value == '2' && document.querySelector('.answer-input-7-4').value == '1') { 
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
            document.querySelector('.answer-9').setAttribute('disabled', true);
            if(document.querySelector('.answer-9').value == '220-230' || document.querySelector('.answer-9').value == '220 - 230') { 
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
            document.querySelector('.not-true-answer-10-2').setAttribute('disabled', true);
            document.querySelector('.true-answer-10-3').setAttribute('disabled', true);
            if(document.querySelector('.true-answer-10-1').checked && !(document.querySelector('.not-true-answer-10-2').checked) && document.querySelector('.true-answer-10-3').checked)  { 
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
            answer()
            if(solvTask[numtaskNow-1] === 0) {
    
                nextBtn.innerHTML = "Ответить"
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

function answer() {
    if(numtaskNow==1) document.querySelector('.task-text').innerHTML = "Расположите технологические этапы приготовления песочного теста в верной последовательности:" 
    else if(numtaskNow==2) document.querySelector('.task-text').innerHTML = "Соотнесите вид брака и его причины:" 
    else if(numtaskNow==3) document.querySelector('.task-text').innerHTML = "Допишите недостающие слова в определении:" 
    else if(numtaskNow==4) document.querySelector('.task-text').innerHTML = "Что изображено на рисунке?" 
    else if(numtaskNow==5) document.querySelector('.task-text').innerHTML = "Как называется инвентарь на картинке?" 
    else if(numtaskNow==6) document.querySelector('.task-text').innerHTML = "Укажите верную последовательность этапов приготовления песочного полуфабриката для пирожного «Корзиночка»:" 
    else if(numtaskNow==7) document.querySelector('.task-text').innerHTML = "Соотнесите вид теста и используемый способ разрыхления:" 
    else if(numtaskNow==8) document.querySelector('.task-text').innerHTML = "Какую насадку на миксер необходимо использовать при работе с песочным тестом?" 
    else if(numtaskNow==9) document.querySelector('.task-text').innerHTML = "Ответьте на вопрос:" 
    else if(numtaskNow==10) document.querySelector('.task-text').innerHTML = "Выберите все верные утверждения, которые относится к правилам безопасной эксплуатации тестомесильной машины:" 
}