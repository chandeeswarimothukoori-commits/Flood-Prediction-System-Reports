/* ==========================================
   RISING WATERS - PREDICT PAGE
   predict.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Fade In Animation
    ========================================== */

    const faders = document.querySelectorAll(".fade-in");

    const appearOnScroll = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        });

    }, {

        threshold: 0.15,

        rootMargin: "0px 0px -40px 0px"

    });

    faders.forEach(el => appearOnScroll.observe(el));



    /* ==========================================
       Ripple Effect
    ========================================== */

    document.querySelectorAll(".btn-primary-custom").forEach(btn => {

        btn.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const diameter = Math.max(this.clientWidth, this.clientHeight);

            const radius = diameter / 2;

            const rect = this.getBoundingClientRect();

            circle.style.width = circle.style.height = `${diameter}px`;

            circle.style.left = `${e.clientX - rect.left - radius}px`;

            circle.style.top = `${e.clientY - rect.top - radius}px`;

            circle.classList.add("ripple");

            this.appendChild(circle);

            setTimeout(() => {

                circle.remove();

            }, 600);

        });

    });



    /* ==========================================
       Animated Accuracy Counter
    ========================================== */

    const counters = document.querySelectorAll("[data-target]");

    function runCounter(element) {

        const target = Number(element.dataset.target);

        const suffix = element.dataset.suffix || "";

        const duration = 1600;

        const start = performance.now();

        function step(now) {

            const progress = Math.min((now - start) / duration, 1);

            element.textContent = Math.floor(progress * target) + suffix;

            if (progress < 1) {

                requestAnimationFrame(step);

            } else {

                element.textContent = target + suffix;

            }

        }

        requestAnimationFrame(step);

    }

    const counterObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                runCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });



    /* ==========================================
       Navbar Background on Scroll
    ========================================== */

    window.addEventListener("scroll", () => {

        const navbar = document.querySelector(".navbar-custom");

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(15,23,42,0.95)";

            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";

        } else {

            navbar.style.background = "rgba(15,23,42,0.85)";

            navbar.style.boxShadow = "none";

        }

    });



    /* ==========================================
       Form Validation
    ========================================== */

    const form = document.getElementById("predictForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            let valid = true;

            const inputs = form.querySelectorAll("input[required]");

            inputs.forEach(input => {

                if (input.value.trim() === "") {

                    valid = false;

                    input.style.borderColor = "#EF4444";

                } else {

                    input.style.borderColor = "";

                }

            });

            if (!valid) {

                e.preventDefault();

                alert("Please fill in all weather parameters.");

            }

        });

    }



    /* ==========================================
       Input Focus Glow
    ========================================== */

    const inputs = document.querySelectorAll(".form-floating-custom input");

    inputs.forEach(input => {

        input.addEventListener("focus", () => {

            input.style.boxShadow = "0 0 15px rgba(6,182,212,0.4)";

        });

        input.addEventListener("blur", () => {

            input.style.boxShadow = "";

        });

    });



    /* ==========================================
       Reset Button
    ========================================== */

    const resetBtn = document.querySelector(".btn-secondary-custom");

    if (resetBtn) {

        resetBtn.addEventListener("click", () => {

            document.querySelectorAll("input").forEach(input => {

                input.style.borderColor = "";

                input.style.boxShadow = "";

            });

        });

    }



    /* ==========================================
       Console Message
    ========================================== */

    console.log(

        "%c🌊 Rising Waters Loaded Successfully",

        "color:#06B6D4;font-size:18px;font-weight:bold;"

    );

    console.log("Flood Prediction System Ready!");

});