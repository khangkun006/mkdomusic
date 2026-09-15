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

    if(!track || dots.length === 0){
        return;
    }

    currentSlide++;

    if(currentSlide >= dots.length){
        currentSlide = 0;
    }

    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot =>
        dot.classList.remove("active")
    );

    if(dots[currentSlide]){
        dots[currentSlide].classList.add("active");
    }

}

if(track && dots.length > 0){

    setInterval(changeSlide,4000);

}
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


const journeyTrack =
    document.querySelector(".journey-track");

const desktopYear =
    document.getElementById("journey-year");

const desktopTitle =
    document.getElementById("journey-title");

const desktopDesc =
    document.getElementById("journey-desc");

const mobileYear =
    document.getElementById("journey-year-mobile");

const mobileTitle =
    document.getElementById("journey-title-mobile");

const mobileDesc =
    document.getElementById("journey-desc-mobile");

const desktopDots =
    document.querySelectorAll(
        ".journey-dots .journey-dot"
    );

const mobileDots =
    document.querySelectorAll(
        ".journey-dots-mobile .journey-dot"
    );


let currentJourney = 0;


function updateJourney(){

    if(!journeyTrack){
        return;
    }


    journeyTrack.style.transform =
        `translateX(-${currentJourney * 100}%)`;


    if(desktopYear){
        desktopYear.style.opacity = 0;
    }

    if(desktopTitle){
        desktopTitle.style.opacity = 0;
    }

    if(desktopDesc){
        desktopDesc.style.opacity = 0;
    }


    if(mobileYear){
        mobileYear.style.opacity = 0;
    }

    if(mobileTitle){
        mobileTitle.style.opacity = 0;
    }

    if(mobileDesc){
        mobileDesc.style.opacity = 0;
    }


    setTimeout(() => {

        const data =
            journeyData[currentJourney];


        if(desktopYear){

            desktopYear.textContent =
                data.year;

            desktopYear.style.opacity = 1;

        }

        if(desktopTitle){

            desktopTitle.textContent =
                data.title;

            desktopTitle.style.opacity = 1;

        }

        if(desktopDesc){

            desktopDesc.textContent =
                data.desc;

            desktopDesc.style.opacity = 1;

        }


        if(mobileYear){

            mobileYear.textContent =
                data.year;

            mobileYear.style.opacity = 1;

        }

        if(mobileTitle){

            mobileTitle.textContent =
                data.title;

            mobileTitle.style.opacity = 1;

        }

        if(mobileDesc){

            mobileDesc.textContent =
                data.desc;

            mobileDesc.style.opacity = 1;

        }

    },250);


    desktopDots.forEach(dot =>
        dot.classList.remove("active")
    );

    mobileDots.forEach(dot =>
        dot.classList.remove("active")
    );


    if(desktopDots[currentJourney]){
        desktopDots[currentJourney]
            .classList.add("active");
    }

    if(mobileDots[currentJourney]){
        mobileDots[currentJourney]
            .classList.add("active");
    }

}


if(journeyTrack){

    updateJourney();


    setInterval(() => {

        currentJourney++;

        if(
            currentJourney >=
            journeyData.length
        ){

            currentJourney = 0;

        }

        updateJourney();

    },5000);

}
// =========================================================
// PROJECT INQUIRY FORM
// =========================================================

const projectForm =
    document.querySelector("#projectForm");


if(projectForm){

    const projectDetails =
        document.querySelector("#projectDetails");


    const serviceInputs =
        document.querySelectorAll(
            'input[name="service"]'
        );


    const bpmField =
        document.querySelector(".field-bpm");


    const keyField =
        document.querySelector(".field-key");


    const driveField =
        document.querySelector(".field-drive");


    const bpmInput =
        document.querySelector("#bpm");


    const keyInput =
        document.querySelector("#key");


    const driveInput =
        document.querySelector("#driveLink");


    const serviceError =
        document.querySelector(".service-error");


    const formStatus =
        document.querySelector("#formStatus");


    const submitBtn =
        document.querySelector("#submitProject");
const deadlineSelect =
document.querySelector("#deadline");
const specificDealine =
document.querySelector("#specificDeadline");

if(deadlineSelect && specificDealine){
    deadlineSelect.addEventListener("change", () => {
        if(deadlineSelect.value === "Ngày cụ thể"){
            specificDealine.style.display = "block";
        } else {
            specificDealine.style.display = "none";
            specificDealine.value = "";
        }
    });
}
    // =====================================================
    // UPDATE SERVICE FIELDS
    // =====================================================

    function updateServiceFields(){

        const selected =
            document.querySelector(
                'input[name="service"]:checked'
            );


        // Chưa chọn dịch vụ
        if(!selected){

            if(projectDetails){
                projectDetails.classList.add("hidden");
            }

            if(bpmField){
                bpmField.classList.add("hidden");
            }

            if(keyField){
                keyField.classList.add("hidden");
            }

            if(driveField){
                driveField.classList.add("hidden");
            }

            return;

        }


        const service =
            selected.value;


        // Có dịch vụ → hiện PROJECT DETAILS

        if(projectDetails){

            projectDetails.classList.remove("hidden");

        }


        // Mặc định ẩn BPM / KEY / DRIVE

        if(bpmField){
            bpmField.classList.add("hidden");
        }

        if(keyField){
            keyField.classList.add("hidden");
        }

        if(driveField){
            driveField.classList.add("hidden");
        }


        // =================================================
        // CUSTOM BEAT / KHO BEAT
        // =================================================

        if(
            service === "Custom Beat" ||
            service === "Tham khảo kho Beat"
        ){

            if(bpmField){
                bpmField.classList.remove("hidden");
            }

            if(keyField){
                keyField.classList.remove("hidden");
            }

        }


        // =================================================
        // GOOGLE DRIVE
        // =================================================

        const driveServices = [

            "Thu âm Vocal",

            "Mix & Master",

            "Vocal Editing",

            "Combo Thu âm + Mixing + Mastering"

        ];


        if(
            driveServices.includes(service)
        ){

            if(driveField){
                driveField.classList.remove("hidden");
            }

        }

    }


    // =====================================================
    // SERVICE CHANGE
    // =====================================================

    serviceInputs.forEach(input => {

        input.addEventListener(
            "change",
            () => {

                updateServiceFields();


                if(serviceError){

                    serviceError
                        .classList
                        .remove("active");

                }

            }
        );

    });


    // =====================================================
    // FORM SUBMIT
    // =====================================================

    projectForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            if(formStatus){

                formStatus.className =
                    "form-status";

                formStatus.textContent =
                    "";

            }


            const name =
                document
                    .querySelector("#name")
                    ?.value
                    .trim();


            const email =
                document
                    .querySelector("#email")
                    ?.value
                    .trim();


            const service =
                document.querySelector(
                    'input[name="service"]:checked'
                );


            // =================================================
            // NAME
            // =================================================

            if(!name){

                showProjectStatus(
                    "error",
                    "Vui lòng nhập Họ tên / Nghệ danh."
                );

                document
                    .querySelector("#name")
                    ?.focus();

                return;

            }


            // =================================================
            // EMAIL
            // =================================================

            if(!email){

                showProjectStatus(
                    "error",
                    "Vui lòng nhập Email."
                );

                document
                    .querySelector("#email")
                    ?.focus();

                return;

            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if(
                !emailPattern.test(email)
            ){

                showProjectStatus(
                    "error",
                    "Email không hợp lệ. Vui lòng kiểm tra lại."
                );

                document
                    .querySelector("#email")
                    ?.focus();

                return;

            }


            // =================================================
            // SERVICE
            // =================================================

            if(!service){

                if(serviceError){

                    serviceError.textContent =
                        "Vui lòng chọn ít nhất một dịch vụ.";

                    serviceError
                        .classList
                        .add("active");

                }

                return;

            }


            // =================================================
            // LOADING
            // =================================================

            if(submitBtn){

                submitBtn
                    .classList
                    .add("loading");

                submitBtn.disabled = true;

            }


            // =================================================
            // GOOGLE APPS SCRIPT
            // =================================================

            const FORM_ENDPOINT =
                "https://script.google.com/macros/s/AKfycbxGWy5KklfbpGhDhmP1mdKPKuYhZ7GaUKQ8ZwOwcrXiPwCg4y8NP8GLlXmogjMqi50I/exec";


            const formData = {

                name:
                    document
                        .querySelector("#name")
                        ?.value
                        .trim() || "",


                email:
                    document
                        .querySelector("#email")
                        ?.value
                        .trim() || "",


                phone:
                    document
                        .querySelector("#phone")
                        ?.value
                        .trim() || "",


                facebook:
                    document
                        .querySelector("#facebook")
                        ?.value
                        .trim() || "",


                zalo:
                    document
                        .querySelector("#zalo")
                        ?.value
                        .trim() || "",


                service:
                    service.value || "",


                genre:
                    document
                        .querySelector("#genre")
                        ?.value
                        .trim() || "",


                bpm:
                    bpmInput?.value.trim() || "",


                key:
                    keyInput?.value.trim() || "",


                budget:
                    document
                        .querySelector("#budget")
                        ?.value || "",


                deadline:
                    document
                        .querySelector("#deadline")?.value === "Ngày cụ thể"
                        ? document.querySelector("#specificDeadline")?.value
                        : document
                            .querySelector("#deadline")
                            ?.value || "",


                reference:
                    document
                        .querySelector("#reference")
                        ?.value
                        .trim() || "",


                referenceLink:
                    document
                        .querySelector("#referenceLink")
                        ?.value
                        .trim() || "",


                driveLink:
                    driveInput?.value.trim() || "",


                description:
                    document
                        .querySelector("#description")
                        ?.value
                        .trim() || "",


                page:
                    window.location.href,


                submittedAt:
                    new Date()
                        .toLocaleString("vi-VN")

            };


            // =================================================
            // SEND
            // =================================================

            try{

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


                showProjectStatus(

                    "success",

                    "Yêu cầu của bạn đã được gửi thành công. MKDo sẽ liên hệ lại sớm nhất."

                );


                projectForm.reset();


                updateServiceFields();


            }

            catch(error){

                console.error(error);


                showProjectStatus(

                    "error",

                    "Không thể gửi yêu cầu lúc này. Vui lòng thử lại hoặc liên hệ trực tiếp với MKDo."

                );

            }


            if(submitBtn){

                submitBtn
                    .classList
                    .remove("loading");

                submitBtn.disabled = false;

            }

        }
    );


    // =====================================================
    // STATUS
    // =====================================================

    function showProjectStatus(
        type,
        message
    ){

        if(!formStatus){
            return;
        }


        formStatus.className =
            `form-status ${type}`;


        formStatus.textContent =
            message;

    }


    // =====================================================
    // INITIAL STATE
    // =====================================================

    updateServiceFields();

}