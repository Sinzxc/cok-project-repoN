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
        if(numtaskNow == 1) document.querySelector('.task-text').innerHTML = "Дайте ответ в соответствии с действующими «Правилами предоставления гостиничных услуг в РФ» в данной ситуации"
        else if(numtaskNow == 2) document.querySelector('.task-text').innerHTML = "Определите по содержанию какой ответ и в какой форме дал менеджер по бронированию отеля «Звезда» госпоже Натальи  на полученную от нее заявку на бронирование. "
        else if(numtaskNow == 3) document.querySelector('.task-text').innerHTML = "Определите по содержанию какой ответ и в какой форме дал менеджер по бронированию отеля «Белые ночи» г-ну Быкову Василию Викторовичу на полученную от него заявку на бронирование."
        else if(numtaskNow == 4 || numtaskNow == 5) document.querySelector('.task-text').innerHTML = "Рассчитать размер оплаты за проживание по брони в гостинице"

        else if(numtaskNow == 6) document.querySelector('.task-text').innerHTML = "Определите по содержанию какой ответ и в какой форме дал менеджер по бронированию отеля «Биба» г-ну Нехай Руслану Аслановичу на полученную от него заявку на бронирование."
        else if(numtaskNow == 7) document.querySelector('.task-text').innerHTML = "Рассчитайте коэффициент двойной загрузки номеров за 10 дней в гостинице."
        else if(numtaskNow == 8) document.querySelector('.task-text').innerHTML = "О каком типе бронирования идет речь в данной ситуации."
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
        if(numtaskNow == 1) document.querySelector('.task-text').innerHTML = "Дайте ответ в соответствии с действующими «Правилами предоставления гостиничных услуг в РФ» в данной ситуации"
        else if(numtaskNow == 2) document.querySelector('.task-text').innerHTML = "Определите по содержанию какой ответ и в какой форме дал менеджер по бронированию отеля «Звезда» госпоже Натальи  на полученную от нее заявку на бронирование. "
        else if(numtaskNow == 3) document.querySelector('.task-text').innerHTML = "Определите по содержанию какой ответ и в какой форме дал менеджер по бронированию отеля «Белые ночи» г-ну Быкову Василию Викторовичу на полученную от него заявку на бронирование."
        else if(numtaskNow == 4 || numtaskNow == 5) document.querySelector('.task-text').innerHTML = "Рассчитать размер оплаты за проживание по брони в гостинице"

        else if(numtaskNow == 6) document.querySelector('.task-text').innerHTML = "Определите по содержанию какой ответ и в какой форме дал менеджер по бронированию отеля «Биба» г-ну Нехай Руслану Аслановичу на полученную от него заявку на бронирование."
        else if(numtaskNow == 7) document.querySelector('.task-text').innerHTML = "Рассчитайте коэффициент двойной загрузки номеров за 10 дней в гостинице."
        else if(numtaskNow == 8) document.querySelector('.task-text').innerHTML = "О каком типе бронирования идет речь в данной ситуации."
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
        if(numtaskNow == 1) document.querySelector('.task-text').innerHTML = "Дайте ответ в соответствии с действующими «Правилами предоставления гостиничных услуг в РФ» в данной ситуации"
        else if(numtaskNow == 2) document.querySelector('.task-text').innerHTML = "Определите по содержанию какой ответ и в какой форме дал менеджер по бронированию отеля «Звезда» госпоже Натальи  на полученную от нее заявку на бронирование. "
        else if(numtaskNow == 3) document.querySelector('.task-text').innerHTML = "Определите по содержанию какой ответ и в какой форме дал менеджер по бронированию отеля «Белые ночи» г-ну Быкову Василию Викторовичу на полученную от него заявку на бронирование."
        else if(numtaskNow == 4 || numtaskNow == 5) document.querySelector('.task-text').innerHTML = "Рассчитать размер оплаты за проживание по брони в гостинице"

        else if(numtaskNow == 6) document.querySelector('.task-text').innerHTML = "Определите по содержанию какой ответ и в какой форме дал менеджер по бронированию отеля «Биба» г-ну Нехай Руслану Аслановичу на полученную от него заявку на бронирование."
        else if(numtaskNow == 7) document.querySelector('.task-text').innerHTML = "Рассчитайте коэффициент двойной загрузки номеров за 10 дней в гостинице."
        else if(numtaskNow == 8) document.querySelector('.task-text').innerHTML = "О каком типе бронирования идет речь в данной ситуации."
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
    if(document.querySelector('.answer-1').value == "нет" || document.querySelector('.answer-1').value == "Нет") ball++
    if(document.querySelector('.answer-2').value == "письмо-подтверждение" || document.querySelector('.answer-2').value == "Письмо-подтверждение" || document.querySelector('.answer-2').value == "письмо подтверждение" || document.querySelector('.answer-2').value == "Письмо подтверждение") ball++
    if(document.querySelector('.answer-3').value == "88400" || document.querySelector('.answer-3').value == "88400 руб" || document.querySelector('.answer-3').value == "88400 руб." || document.querySelector('.answer-3').value == "88400 рубля") ball++
    if(document.querySelector('.answer-4').value == "7200" || document.querySelector('.answer-4').value == "7200 руб" || document.querySelector('.answer-4').value == "7200 руб." || document.querySelector('.answer-4').value == "7200 рубля") ball++
    if(document.querySelector('.answer-5').value == "письмо-предложение" || document.querySelector('.answer-5').value == "Письмо-предложение" || document.querySelector('.answer-5').value == "письмо предложение" || document.querySelector('.answer-5').value == "Письмо предложение") ball++
    if(document.querySelector('.answer-6').value == "75%" || document.querySelector('.answer-6').value == "75 %") ball++
    if(document.querySelector('.answer-7').value == "письмо-отказ" || document.querySelector('.answer-7').value == "Письмо-отказ" || document.querySelector('.answer-7').value == "письмо отказ" || document.querySelector('.answer-7').value == "Письмо отказ") ball++
    if(document.querySelector('.answer-8').value == "двойное бронирование (овербукинг)" || document.querySelector('.answer-8').value == "двойное бронирование" || document.querySelector('.answer-8').value == "Двойное бронирование" || document.querySelector('.answer-8').value == "овербукинг" || document.querySelector('.answer-8').value == "Овербукинг") ball++


    document.querySelector('.result-text').innerHTML = "Количество баллов: "+ball
}