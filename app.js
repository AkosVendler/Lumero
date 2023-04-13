const menuHamburger = document.querySelector("#btn")
const navLinks = document.querySelector(".nav-links")


menuHamburger.addEventListener('click',() => {
    navLinks.classList.toggle('mobile-menu')
})






