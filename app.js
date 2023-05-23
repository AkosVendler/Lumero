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


//parallax

const right = document.querySelectorAll(".from-right");
const show = document.querySelectorAll(".show");
const left = document.querySelectorAll(".from-left")


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -90px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);


right.forEach(slider => {
    appearOnScroll.observe(slider);
});

show.forEach(show => {
    appearOnScroll.observe(show);
});

left.forEach(left => {
    appearOnScroll.observe(left);
});

//slider 

const img = ["image 4.png", "image 5.png"];
const slider_img = document.querySelector (".section-two-img");
const text = document.getElementById("desc");
const texts = [
    "A tágas és jól felszerelt termek mellett kényelmes és stílusos bútorainkkal, valamint magas szintű technikai felszereltségünkkel garantáljuk, hogy az eseménye a lehető legmagasabb szinten valósuljon meg.",

    "igen igen termek mellett kényelmes és stílusos bútorainkkal, valamint magas szintű technikai felszereltségünkkel garantáljuk, hogy az eseménye a lehető legmagasabb szinten valósuljon meg.",

    "asdasdasd mellett kényelmes és stílusos bútorainkkal, valamint magas szintű technikai felszereltségünkkel garantáljuk, hogy az eseménye a lehető legmagasabb szinten valósuljon meg."
]
i = 0;

function prev(){
    if(i <= 0 ) i = img.length;
    i--;
    return setImg();
}

function next(){
    if (i >= img.length -1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    slider_img.classList.remove("appear");
    text.classList.remove("appear");
    setTimeout(function() {
      slider_img.setAttribute('src', 'img/' + img[i]);
      slider_img.classList.add("appear");
      text.innerHTML = texts[i];
      text.classList.add("appear");
    }, 450);

  }
  
const cursor = document.getElementById("cursor");
const cursorStyle = cursor.style; 

document.addEventListener("mousemove", e => {
    window.requestAnimationFrame(() => {
        cursorStyle.top = `${ e.clientY - cursor.offsetHeight/2 }px`;
        cursorStyle.left = `${ e.clientX - cursor.offsetWidth/2 }px`;
    });
});








