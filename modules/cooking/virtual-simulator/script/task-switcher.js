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

        document.querySelector(`#${button}`).classList.add('practice-part-wrap--active');
        tabTarget.classList.add('circle_active');
        if(numtaskNow==1) document.querySelector('.task-text').innerHTML = "Расположите технологические этапы приготовления песочного теста в верной последовательности" 
        else if(numtaskNow==2) document.querySelector('.task-text').innerHTML = "Соотнесите вид брака и его причины" 
        else if(numtaskNow==3) document.querySelector('.task-text').innerHTML = "Допишите недостающие слова в определении" 
        else if(numtaskNow==4) document.querySelector('.task-text').innerHTML = "Что изображено на рисунке?" 
        else if(numtaskNow==5) document.querySelector('.task-text').innerHTML = "Как называется инвентарь на картинке?" 
        else if(numtaskNow==6 || numtaskNow ==7) document.querySelector('.task-text').innerHTML = "Ответьте на вопрос" 
        else if(numtaskNow ==8) document.querySelector('.task-text').innerHTML = "Какую насадку на миксер необходимо использовать при работе с песочным тестом?" 
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
        if(numtaskNow==1) document.querySelector('.task-text').innerHTML = "Расположите технологические этапы приготовления песочного теста в верной последовательности" 
        else if(numtaskNow==2) document.querySelector('.task-text').innerHTML = "Соотнесите вид брака и его причины" 
        else if(numtaskNow==3) document.querySelector('.task-text').innerHTML = "Допишите недостающие слова в определении" 
        else if(numtaskNow==4) document.querySelector('.task-text').innerHTML = "Что изображено на рисунке?" 
        else if(numtaskNow==5) document.querySelector('.task-text').innerHTML = "Как называется инвентарь на картинке?" 
        else if(numtaskNow==6 || numtaskNow ==7) document.querySelector('.task-text').innerHTML = "Ответьте на вопрос" 
        else if(numtaskNow ==8) document.querySelector('.task-text').innerHTML = "Какую насадку на миксер необходимо использовать при работе с песочным тестом?" 
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

    if(numtaskNow < 8) {
        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('circle_active');taskWraps[i].classList.remove('practice-part-wrap--active')
        }

        numtaskNow++;
        document.querySelector(`#task-${numtaskNow}`).classList.add('practice-part-wrap--active');
        numNum.innerHTML = numtaskNow
        circles[numtaskNow - 1].classList.add('circle_active');
        if(numtaskNow==1) document.querySelector('.task-text').innerHTML = "Расположите технологические этапы приготовления песочного теста в верной последовательности" 
        else if(numtaskNow==2) document.querySelector('.task-text').innerHTML = "Соотнесите вид брака и его причины" 
        else if(numtaskNow==3) document.querySelector('.task-text').innerHTML = "Допишите недостающие слова в определении" 
        else if(numtaskNow==4) document.querySelector('.task-text').innerHTML = "Что изображено на рисунке?" 
        else if(numtaskNow==5) document.querySelector('.task-text').innerHTML = "Как называется инвентарь на картинке?" 
        else if(numtaskNow==6 || numtaskNow ==7) document.querySelector('.task-text').innerHTML = "Ответьте на вопрос" 
        else if(numtaskNow ==8) document.querySelector('.task-text').innerHTML = "Какую насадку на миксер необходимо использовать при работе с песочным тестом?" 
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
    if(document.querySelector('.sopostavit-task__input').value == '2751436' ||
    document.querySelector('.sopostavit-task__input').value == '2, 7, 5, 1, 4, 3, 6' || document.querySelector('.sopostavit-task__input').value == '2 7 5 1 4 3 6') ball++
    if((document.querySelector('.answer-input-1').value == '15' || document.querySelector('.answer-input-1').value == '1 5') && 
    (document.querySelector('.answer-input-2').value == '47' || document.querySelector('.answer-input-2').value == '4 7') &&
    (document.querySelector('.answer-input-3').value == '69' || document.querySelector('.answer-input-3').value == '6 9') &&
    (document.querySelector('.answer-input-4').value == '28' || document.querySelector('.answer-input-4').value == '2 8') &&
    (document.querySelector('.answer-input-5').value == '3')) ball++
    if(document.getElementsByClassName('input-task-3')[0].value == 'Клейковина муки' || document.getElementsByClassName('input-task-3')[0].value == 'клейковина муки') ball++
    if(document.getElementsByClassName('input-task-4')[0].value == 'Тестомесильная машина' || document.getElementsByClassName('input-task-4')[0].value == 'тестомесильная машина') ball++
    if(document.getElementsByClassName('input-task-5 ')[0].value == 'вырубки для теста' || document.getElementsByClassName('input-task-5')[0].value == 'Вырубки для теста') ball++
    if(document.getElementsByClassName('input-task-6 ')[0].value == 'не вздувалось' || document.getElementsByClassName('input-task-6')[0].value == 'Не вздувалось') ball++
    if(document.getElementsByClassName('input-task-7 ')[0].value == 'рассыпаться' || document.getElementsByClassName('input-task-7')[0].value == 'Рассыпаться') ball++
    if(document.querySelector('.true-answer-8').checked) ball++

    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}