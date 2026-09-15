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
// ================= SMART LINK =================

const smartLink = document.querySelector(".smartlink");
const listenBtn = document.querySelector("#listenBtn");
const closeSmartLink = document.querySelector(".close-smartlink");

if (smartLink && listenBtn) {

    listenBtn.addEventListener("click", (e) => {

        e.preventDefault();

        smartLink.classList.add("active");

    });

}

if (smartLink && closeSmartLink) {

    closeSmartLink.addEventListener("click", () => {

        smartLink.classList.remove("active");

    });

}

if (smartLink) {

    smartLink.addEventListener("click", (e) => {

        if (e.target === smartLink) {

            smartLink.classList.remove("active");

        }

    });

}
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
// =========================================================
// PROJECT INQUIRY FORM
// =========================================================

const projectForm = document.querySelector("#projectForm");

if (projectForm) {

    const serviceInputs =
        document.querySelectorAll('input[name="service"]');

    const bpmField =
        document.querySelector("#bpmField");

    const keyField =
        document.querySelector("#keyField");

    const driveField =
        document.querySelector("#driveField");

    const bpmInput =
        document.querySelector("#bpm");

    const keyInput =
        document.querySelector("#key");

    const driveInput =
        document.querySelector("#driveLink");

    const serviceError =
        document.querySelector("#serviceError");

    const formStatus =
        document.querySelector("#formStatus");

    const submitBtn =
        document.querySelector(".submit-btn");


    // ================= SERVICE LOGIC =================

    function updateServiceFields() {

        const selected =
            document.querySelector(
                'input[name="service"]:checked'
            );

        // Ẩn tất cả trước
        if (bpmField)
            bpmField.classList.add("hidden");

        if (keyField)
            keyField.classList.add("hidden");

        if (driveField)
            driveField.classList.add("hidden");


        if (!selected)
            return;


        const service = selected.value;


        // ================= BPM + KEY =================
        // Custom Beat
        // Tham khảo kho Beat

        if (
            service === "Custom Beat" ||
            service === "Tham khảo kho Beat"
        ) {

            if (bpmField)
                bpmField.classList.remove("hidden");

            if (keyField)
                keyField.classList.remove("hidden");

        }


        // ================= GOOGLE DRIVE =================
        // Các dịch vụ cần file/project

        const driveServices = [

            "Thu âm Vocal",
            "Mix & Master",
            "Vocal Editing",
            "Combo Thu âm + Mixing + Mastering"

        ];

        if (driveServices.includes(service)) {

            if (driveField)
                driveField.classList.remove("hidden");

        }

    }


    // ================= SERVICE CHANGE =================

    serviceInputs.forEach(input => {

        input.addEventListener("change", () => {

            updateServiceFields();

            if (serviceError) {

                serviceError.classList.remove("active");

            }

        });

    });


    // Chạy một lần khi load trang
    updateServiceFields();


    // =====================================================
    // FORM VALIDATION
    // =====================================================

    projectForm.addEventListener("submit", async (event) => {

        event.preventDefault();


        // Reset status

        if (formStatus) {

            formStatus.className = "form-status";

            formStatus.textContent = "";

        }


        // ================= GET DATA =================

        const name =
            document.querySelector("#name")?.value.trim();

        const email =
            document.querySelector("#email")?.value.trim();

        const service =
            document.querySelector(
                'input[name="service"]:checked'
            );


        // ================= VALIDATE NAME =================

        if (!name) {

            showFormError(
                "Vui lòng nhập Họ tên / Nghệ danh."
            );

            document.querySelector("#name")?.focus();

            return;

        }


        // ================= VALIDATE EMAIL =================

        if (!email) {

            showFormError(
                "Vui lòng nhập Email."
            );

            document.querySelector("#email")?.focus();

            return;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            showFormError(
                "Email không hợp lệ. Vui lòng kiểm tra lại."
            );

            document.querySelector("#email")?.focus();

            return;

        }


        // ================= VALIDATE SERVICE =================

        if (!service) {

            if (serviceError) {

                serviceError.textContent =
                    "Vui lòng chọn ít nhất một dịch vụ.";

                serviceError.classList.add("active");

            }

            return;

        }


        // ================= SUBMIT =================

        if (submitBtn) {

            submitBtn.classList.add("loading");

            submitBtn.disabled = true;

        }


       const FORM_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbxGWy5KklfbpGhDhmP1mdKPKuYhZ7GaUKQ8ZwOwcrXiPwCg4y8NP8GLlXmogjMqi50I/exec";


const formData = {

    name:
        document.querySelector("#name")?.value.trim() || "",

    email:
        document.querySelector("#email")?.value.trim() || "",

    phone:
        document.querySelector("#phone")?.value.trim() || "",

    facebook:
        document.querySelector("#facebook")?.value.trim() || "",

    zalo:
        document.querySelector("#zalo")?.value.trim() || "",

    service:
        service.value || "",

    genre:
        document.querySelector("#genre")?.value.trim() || "",

    bpm:
        bpmInput?.value.trim() || "",

    key:
        keyInput?.value.trim() || "",

    budget:
        document.querySelector("#budget")?.value || "",

    deadline:
        document.querySelector("#deadline")?.value || "",

    reference:
        document.querySelector("#reference")?.value.trim() || "",

    referenceLink:
        document.querySelector("#referenceLink")?.value.trim() || "",

    driveLink:
        driveInput?.value.trim() || "",

    description:
        document.querySelector("#description")?.value.trim() || "",

    page:
        window.location.href,

    submittedAt:
        new Date().toLocaleString("vi-VN")

};


try {

    await fetch(
        FORM_ENDPOINT,
        {

            method:"POST",

            mode:"no-cors",

            headers:{
                "Content-Type":
                    "text/plain;charset=utf-8"
            },

            body:
                JSON.stringify(formData)

        }
    );


    if (formStatus) {

        formStatus.className =
            "form-status success";

        formStatus.textContent =
            "Yêu cầu của bạn đã được gửi thành công. MKDo sẽ liên hệ lại sớm nhất.";

    }


    projectForm.reset();

    updateServiceFields();


} catch(error) {

    console.error(error);


    if (formStatus) {

        formStatus.className =
            "form-status error";

        formStatus.textContent =
            "Không thể gửi yêu cầu lúc này. Vui lòng thử lại hoặc liên hệ trực tiếp với MKDo.";

    }

}


if (submitBtn) {

    submitBtn.classList.remove("loading");

    submitBtn.disabled = false;

}


        setTimeout(() => {

            if (submitBtn) {

                submitBtn.classList.remove("loading");

                submitBtn.disabled = false;

            }


            if (formStatus) {

                formStatus.className =
                    "form-status success";

                formStatus.textContent =
                    "Form đã được kiểm tra thành công. Bước tiếp theo sẽ kết nối form này với hệ thống nhận yêu cầu của MKDo.";

            }

        }, 700);

    });


    // =====================================================
    // ERROR MESSAGE
    // =====================================================

    function showFormError(message) {

        if (!formStatus)
            return;

        formStatus.className =
            "form-status error";

        formStatus.textContent =
            message;

    }

}