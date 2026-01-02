const hamburger= document.getElementById('hamburgerBtn');
const navMenu= document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)){
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

const navLi= navMenu.querySelectorAll('a')

navLi.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    })
});