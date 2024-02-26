const burgerBtn = document.querySelector('.burger-btn');
const burgerBtnClose = document.querySelector('.burger-btn-close');
const rightSideMenu = document.querySelector('.right-side-menu');


burgerBtn.addEventListener('click', () => {
    shadow.classList.add('shadow-active');
    rightSideMenu.classList.add('right-side-menu_active');
});

burgerBtnClose.addEventListener('click', () => {
    shadow.classList.remove('shadow-active');
    rightSideMenu.classList.remove('right-side-menu_active');
});