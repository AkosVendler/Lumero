const menuHamburger = document.querySelector("#btn");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");
const list = document.querySelector(".nav-links a");

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
    if (navLinks.classList.contains('mobile-menu')) {
        body.style.overflowY = "hidden";
        return menuHamburger.setAttribute('src', 'img/' + 'X.svg');
    } else {
        body.style.overflowY = "scroll";
        return menuHamburger.setAttribute('src', 'img/' + 'hamburger.svg');
    }
});

list.addEventListener('click', () => {
    body.style.overflowY = "scroll";
    navLinks.classList.remove('mobile-menu');
});










