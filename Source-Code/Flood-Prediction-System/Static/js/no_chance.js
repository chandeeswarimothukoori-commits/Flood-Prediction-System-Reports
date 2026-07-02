// Fade-in animation after page load

window.addEventListener("load", function () {

    document.querySelector(".card-box").style.opacity = "1";

});


// Button hover effect

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});


// Auto scroll to top

window.onload = function () {

    window.scrollTo(0, 0);

};


// Console message

console.log("No Flood Risk page loaded successfully.");