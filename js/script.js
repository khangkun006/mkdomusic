const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".menu-overlay");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");

    menuToggle.innerHTML =
        navLinks.classList.contains("active")
            ? "✕"
            : "☰";

});

overlay.addEventListener("click", () => {

    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.innerHTML = "☰";

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        menuToggle.innerHTML = "☰";

    });

});
// SMART LINK

const smartLink = document.querySelector(".smartlink");

document
.querySelector("#listenBtn")
.addEventListener("click",(e)=>{

    e.preventDefault();

    smartLink.classList.add("active");

});

document
.querySelector(".close-smartlink")
.addEventListener("click",()=>{

    smartLink.classList.remove("active");

});

smartLink.addEventListener("click",(e)=>{

    if(e.target===smartLink){

        smartLink.classList.remove("active");

    }

});
// ================= ABOUT SLIDER =================

const track = document.querySelector(".about-track");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function changeSlide(){

    currentSlide++;

    if(currentSlide>=4){

        currentSlide=0;

    }

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[currentSlide].classList.add("active");

}

setInterval(changeSlide,4000);