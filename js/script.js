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
// ================= THE JOURNEY =================

const journeyData = [

{
    year:"2021",
    title:"The Beginning",
    desc:"Started making music with nothing but a phone and old headphones."
},

{
    year:"2022",
    title:"Learning the Basics",
    desc:"Learn basic music editing, recording, mixing."
},

{
    year:"2023",
    title:"Finding My Sound",
    desc:"Gradually there are easier songs to listen to."
},

{
    year:"2024",
    title:"Better Equipment",
    desc:"Invest in better equipment for music."
},

{
    year:"2025",
    title:"Growing Every Day",
    desc:"Connect more with music lovers."
},

{
    year:"2026",
    title:"Khang Studio",
    desc:"Still completing the home studio along with the demos."
}

];

const journeyTrack = document.querySelector(".journey-track");

const desktopYear = document.getElementById("journey-year");
const desktopTitle = document.getElementById("journey-title");
const desktopDesc = document.getElementById("journey-desc");

const mobileYear = document.getElementById("journey-year-mobile");
const mobileTitle = document.getElementById("journey-title-mobile");
const mobileDesc = document.getElementById("journey-desc-mobile");

const desktopDots = document.querySelectorAll(".journey-dots .journey-dot");
const mobileDots = document.querySelectorAll(".journey-dots-mobile .journey-dot");

let currentJourney = 0;

function updateJourney(){

    // Slide ảnh
    journeyTrack.style.transform =
        `translateX(-${currentJourney * 100}%)`;

    // Desktop
    if(desktopYear){

        desktopYear.style.opacity = 0;
        desktopTitle.style.opacity = 0;
        desktopDesc.style.opacity = 0;

    }

    // Mobile
    if(mobileYear){

        mobileYear.style.opacity = 0;
        mobileTitle.style.opacity = 0;
        mobileDesc.style.opacity = 0;

    }

    setTimeout(()=>{

        // Desktop
        if(desktopYear){

            desktopYear.textContent =
                journeyData[currentJourney].year;

            desktopTitle.textContent =
                journeyData[currentJourney].title;

            desktopDesc.textContent =
                journeyData[currentJourney].desc;

            desktopYear.style.opacity = 1;
            desktopTitle.style.opacity = 1;
            desktopDesc.style.opacity = 1;

        }

        // Mobile
        if(mobileYear){

            mobileYear.textContent =
                journeyData[currentJourney].year;

            mobileTitle.textContent =
                journeyData[currentJourney].title;

            mobileDesc.textContent =
                journeyData[currentJourney].desc;

            mobileYear.style.opacity = 1;
            mobileTitle.style.opacity = 1;
            mobileDesc.style.opacity = 1;

        }

    },250);

    desktopDots.forEach(dot=>dot.classList.remove("active"));
    mobileDots.forEach(dot=>dot.classList.remove("active"));

    if(desktopDots[currentJourney])
        desktopDots[currentJourney].classList.add("active");

    if(mobileDots[currentJourney])
        mobileDots[currentJourney].classList.add("active");

}

updateJourney();

setInterval(()=>{

    currentJourney++;

    if(currentJourney >= journeyData.length){

        currentJourney = 0;

    }

    updateJourney();

},5000);