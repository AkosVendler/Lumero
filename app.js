const menuHamburger = document.querySelector("#btn");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");
const links = document.querySelectorAll(".nav-links a");

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

links.forEach(link => {
    link.addEventListener('click', () => {
        body.style.overflowY = "scroll";
        navLinks.classList.remove('mobile-menu');
        return menuHamburger.setAttribute('src', 'img/' + 'hamburger.svg');
    });
});

function scrollToElement() {
  var elem = document.getElementById("calendar");
  elem.scrollIntoView({ behavior: 'smooth' });
}

//parallax

const right = document.querySelectorAll(".from-right");
const show = document.querySelectorAll(".show");
const show1 = document.querySelectorAll(".show1");
const show2 = document.querySelectorAll(".show2");
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

show1.forEach(show1 => {
    appearOnScroll.observe(show1);
});

show2.forEach(show2 => {
    appearOnScroll.observe(show2);
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


//naptar
var monthNames = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    var currentDay = currentDate.getDate();
    function generateCalendar() {
      var calendarBody = document.getElementById("calendarBody");
      var currentMonthText = document.getElementById("currentMonth");
      var currentDayText = document.getElementById("currentDay");

      currentMonthText.innerHTML = monthNames[currentMonth] + " ";
      currentDayText.innerHTML =  currentDay; 
      // Clear existing calendar days
      calendarBody.innerHTML = "";

      
      var firstDay = new Date(currentYear, currentMonth, 1);
      var lastDay = new Date(currentYear, currentMonth + 1, 0);
    
      var startDate = new Date(firstDay);
      startDate.setDate(startDate.getDate() - (startDate.getDay() + 6) % 7); // Helyesítés itt
    
      var endDate = new Date(lastDay);
      endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
    
      var currentDate = new Date(startDate);
      var today = new Date();  
      // Generate calendar days
      while (currentDate <= endDate) {
        var row = document.createElement("tr");
    
        for (var i = 0; i < 7; i++) {
          var cell = document.createElement("td");
          cell.classList.add("day")
    
          if (currentDate.getMonth() === currentMonth) {
            cell.innerHTML = currentDate.getDate();
    
            if (
              currentDate.getDate() === today.getDate() && // Compare day
              currentDate.getMonth() === today.getMonth() && // Compare month
              currentDate.getFullYear() === today.getFullYear() // Compare year
            ) {
              //cell.classList.add("red-day"); // Apply the "red" class
              cell.style.position = "relative";
              cell.style.display = "flex";
              cell.style.justifyContent = "center";
              cell.innerHTML = `<div class="current-day">${currentDate.getDate()}</div>`;
            }
          }
          
          cell.addEventListener("click", function() {
            this.style.position = "relative";
            this.style.display = "flex";
            this.style.justifyContent = "center";
            this.style.flexDirection = "row";
            this.innerHTML = `<div class="reserved">${this.innerHTML}</div>`;
          });
          
          // Add event listener to change background color on hover
      cell.addEventListener("mouseover", function() {
        if (!this.classList.contains("current-day")) {
          this.style.backgroundColor = "#0A0A0A";
          this.style.borderRadius = "50%";
        }
      });
      
      // Add event listener to revert background color on mouse leave
      cell.addEventListener("mouseout", function() {
        if (!this.classList.contains("current-day")) {
          this.style.backgroundColor = "";
        }
      });

          row.appendChild(cell);
          currentDate.setDate(currentDate.getDate() + 1);
        }
    
        calendarBody.appendChild(row);
      }
    }

    function prevMonth() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      generateCalendar();
    }

    function nextMonth() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      generateCalendar();
    }

    // Generate the initial calendar
    generateCalendar();





