/* ==========================================================
   Rising Waters – chance.js
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
    /* ---------- Risk Meter Animation ---------- */
    const meter = document.querySelector(".risk-meter");
    if (meter) {
        const target = parseInt(meter.dataset.target || "96", 10);
        const progress = meter.querySelector(".risk-progress");
        const numberEl = meter.querySelector(".risk-number");
        const radius = 85;
        const circumference = 2 * Math.PI * radius;
        progress.style.strokeDasharray = circumference;
        progress.style.strokeDashoffset = circumference;
        const animate = () => {
            const offset = circumference - (target / 100) * circumference;
            progress.style.strokeDashoffset = offset;
            let current = 0;
            const duration = 1800;
            const start = performance.now();
            const step = (now) => {
                const elapsed = now - start;
                const t = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - t, 3);
                current = Math.round(eased * target);
                numberEl.textContent = current;
                if (t < 1) requestAnimationFrame(step);
                else numberEl.textContent = target;
            };
            requestAnimationFrame(step);
        };
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        animate();
                        io.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );
        io.observe(meter);
    }
    /* ---------- Reveal On Scroll ---------- */
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    /* ==========================================
    Download HTML as PDF
    ========================================== */

    const downloadBtn = document.getElementById("downloadReportBtn");

    if(downloadBtn){

        downloadBtn.addEventListener("click",function(){

            const report = document.getElementById("report");

            const opt = {

                margin:0.5,

                filename:"Flood_Prediction_Report.pdf",

                image:{
                    type:"jpeg",
                    quality:1
                },

                html2canvas:{
                    scale:2,
                    useCORS:true
                },

                jsPDF:{
                    unit:"in",
                    format:"a4",
                    orientation:"portrait"
                }

            };

            html2pdf().set(opt).from(report).save();

        });

    }
});