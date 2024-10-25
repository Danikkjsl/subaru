const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.list');
const header = document.querySelector('header');
let lastScrollTop = 0;
navList.classList.toggle('active');


burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if(currentScroll > lastScrollTop){
        header.classList.add('hidden');
        
    }
    else{
        header.classList.remove('hidden')
    }
    lastScrollTop = currentScroll;
})

