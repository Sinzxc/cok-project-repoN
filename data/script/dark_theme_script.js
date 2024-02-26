const dark = document.querySelector('.dark2');

const cardsIcons = document.getElementsByClassName('card-topic-img'); 
const cardsIconsForDark = document.getElementsByClassName('card-topic-img-dark'); 

const burger = document.querySelector('.burger-img');
const burgerDark = document.querySelector('.burger-dark-img');

let isDark = false;
dark.addEventListener('click', () => {
    if(!isDark) {
        isDark = true;
        document.querySelector('body').classList.add('dark-mode');

        for(let i = 0; i < cardsIcons.length; i++) {
            cardsIcons[i].classList.add('hide');
            cardsIconsForDark[i].classList.remove('hide');
        }

        burger.classList.add('hide');
        burgerDark.classList.remove('hide');
    }
    else {
        isDark = false;document.querySelector('body').classList.remove('dark-mode');
        for(let i = 0; i < cardsIcons.length; i++) {
            
            cardsIcons[i].classList.remove('hide');
            cardsIconsForDark[i].classList.add('hide');
        }

        burger.classList.remove('hide');
        burgerDark.classList.add('hide');
    }
});

