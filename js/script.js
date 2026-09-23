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
        document.querySelector('input[name="service"]:checked');

        const toggleGroups = [
        ".field-genre",
        ".field-bpm",
        ".field-key",
        ".field-record-people",
        ".field-record-songs",
        ".field-mix-songs",
        ".field-stems",
        ".field-reference",
        ".field-reference-link",
        ".field-beat-reference-link",
        ".field-beat-demo-link",
        ".field-drive",
        ".field-schedule",
        ".field-deadline",
        ".field-description"
    ];

    function hideAll(){
        toggleGroups.forEach(sel => {
            document.querySelectorAll(sel)
                .forEach(el => el.classList.add("hidden"));
        });
    }

    function show(...selectors){
        selectors.forEach(sel => {
            document.querySelectorAll(sel)
                .forEach(el => el.classList.remove("hidden"));
        });
    }

    if(!selected){
        if(projectDetails){
            projectDetails.classList.add("hidden");
        }
        hideAll();
        return;
    }

    const service = selected.value;

    if(projectDetails){
        projectDetails.classList.remove("hidden");
    }

    hideAll();

    const defaultServices = [
        "Custom Beat",
        "Tham khảo kho Beat",
        "Songwriting"
    ];

    // ================= MẶC ĐỊNH =================
       // ================= SONGWRITING =================
    if(service === "Songwriting"){

        show(
            ".field-genre",
            ".field-reference",
            ".field-reference-link",
            ".field-deadline",
            ".field-description"
        );

    }

    // ================= CUSTOM BEAT / KHO BEAT =================
    if(
        service === "Custom Beat" ||
        service === "Tham khảo kho Beat"
    ){

        show(
            ".field-genre",
            ".field-bpm",
            ".field-key",
            ".field-beat-reference-link",
            ".field-beat-demo-link",
            ".field-deadline",
            ".field-description"
        );

    }

    // ================= THU ÂM VOCAL =================
    if(service === "Thu âm Vocal"){

        show(
            ".field-record-people",
            ".field-record-songs",
            ".field-schedule"
        );

    }

    // ================= MIX & MASTER =================
    if(service === "Mix & Master"){

        show(
            ".field-mix-songs",
            ".field-stems",
            ".field-deadline",
            ".field-reference",
            ".field-reference-link",
            ".field-drive",
            ".field-description"
        );

    }

    // ================= COMBO =================
    if(service === "Combo Thu âm + Mixing + Mastering"){

        show(
            ".field-record-people",
            ".field-record-songs",
            ".field-mix-songs",
            ".field-stems",
            ".field-deadline",
            ".field-reference",
            ".field-reference-link",
            ".field-drive",
            ".field-schedule",
            ".field-description"
        );

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
            // DEADLINE NGÀY CỤ THỂ
            // =================================================

            const deadlineGroup =
                document
                    .querySelector("#deadline")
                    ?.closest(".form-group");

            if(
                deadlineGroup &&
                !deadlineGroup.classList.contains("hidden") &&
                deadlineSelect.value === "Ngày cụ thể" &&
                !specificDealine.value
            ){

                showProjectStatus(
                    "error",
                    "Vui lòng chọn ngày hoàn thành cụ thể."
                );

                specificDealine.focus();

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
                "https://script.google.com/macros/s/AKfycbzE52dClK4T_g5sFhEnagn0i37glPzzG4AxwLLRxdyZ5W-sfEJ8hQbqb_0vC-lGU3A/exec";


            // Chỉ lấy giá trị của ô ĐANG HIỂN THỊ theo dịch vụ đã chọn.
            // Ô bị ẩn (do đổi dịch vụ) sẽ không bị gửi kèm dữ liệu cũ.
            function getValue(selector){

                const el =
                    document.querySelector(selector);

                if(!el){
                    return "";
                }

                const group =
                    el.closest(".form-group");

                if(
                    group &&
                    group.classList.contains("hidden")
                ){
                    return "";
                }

                return (el.value || "").trim();

            }


            // Deadline: nếu chọn "Ngày cụ thể" thì gửi ngày dạng dd/mm/yyyy
            let deadlineValue =
                getValue("#deadline");

            if(deadlineValue === "Ngày cụ thể"){

                const picked =
                    getValue("#specificDeadline");

                deadlineValue =
                    picked
                        ? "Ngày " + picked.split("-").reverse().join("/")
                        : "";

            }


            const formData = {

                // ---------- Thông tin liên hệ ----------
                name:      getValue("#name"),
                email:     getValue("#email"),
                phone:     getValue("#phone"),
                facebook:  getValue("#facebook"),
                zalo:      getValue("#zalo"),

                // ---------- Dịch vụ ----------
                service:   service.value || "",

                // ---------- Beat / Songwriting ----------
                genre:     getValue("#genre"),
                bpm:       getValue("#bpm"),
                key:       getValue("#key"),

                // ---------- Thu âm ----------
                recordPeople:   getValue("#recordPeople"),
                recordSongs:    getValue("#recordSongs"),
                recordSchedule: getValue("#recordSchedule"),

                // ---------- Mix / Combo ----------
                mixSongs:  getValue("#mixSongs"),
                stems:     getValue("#stems"),
                driveLink: getValue("#driveLink"),

                // ---------- Chung ----------
                budget:    getValue("#budget"),
                deadline:  deadlineValue,

                // Link Reference: Mix/Combo/Songwriting dùng #referenceLink,
                // Beat dùng #beatReferenceLink → gộp chung 1 cột "Link Reference"
                referenceLink:
                    getValue("#referenceLink") ||
                    getValue("#beatReferenceLink"),

                beatDemoLink: getValue("#beatDemoLink"),

                description:  getValue("#description"),

                // ---------- Hệ thống ----------
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