/* ==========================================
   RISING WATERS - FLOOD PREDICTION
   script.js
========================================== */

/* ===============================
   Fade In Animation
=============================== */

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold:0.2

});

fadeElements.forEach(el => observer.observe(el));

/* ===============================
   Animated Statistics Counter
=============================== */

const counters = document.querySelectorAll(".stat-number");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

},

{

threshold:0.5

});

counters.forEach(counter=>counterObserver.observe(counter));

function animateCounter(counter){

const target=parseInt(counter.getAttribute("data-target"));

const duration=2000;

const increment=target/(duration/20);

let current=0;

const update=()=>{

current+=increment;

if(current<target){

counter.innerText=Math.floor(current);

setTimeout(update,20);

}

else{

counter.innerText=target;

}

}

update();

}

/* ===============================
   Navbar Background
=============================== */

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar-custom");

if(window.scrollY>80){

navbar.style.background="rgba(15,23,42,.95)";

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}

else{

navbar.style.background="rgba(15,23,42,.85)";

navbar.style.boxShadow="none";

}

});

/* ===============================
   Smooth Scroll
=============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ===============================
   Feature Card Hover Animation
=============================== */

const cards=document.querySelectorAll(".glass-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/* ===============================
   Button Ripple Effect
=============================== */

const buttons=document.querySelectorAll(".btn-primary-custom,.btn-secondary-custom");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

ripple.style.width=ripple.style.height=`${diameter}px`;

ripple.style.left=`${e.clientX-this.getBoundingClientRect().left-radius}px`;

ripple.style.top=`${e.clientY-this.getBoundingClientRect().top-radius}px`;

ripple.classList.add("ripple");

const existing=this.querySelector(".ripple");

if(existing){

existing.remove();

}

this.appendChild(ripple);

});

});

/* ===============================
   Typing Effect
=============================== */

const subtitle=document.querySelector(".subtitle");

if(subtitle){

const text=subtitle.innerText;

subtitle.innerText="";

let i=0;

function typing(){

if(i<text.length){

subtitle.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

}

/* ===============================
   Floating Animation
=============================== */

const icons=document.querySelectorAll(".feature-icon");

icons.forEach((icon,index)=>{

icon.animate(

[

{

transform:"translateY(0px)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0px)"

}

],

{

duration:2500+(index*300),

iterations:Infinity

}

);

});

/* ===============================
   Scroll Progress Bar
=============================== */

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progressWidth=(scrollTop/scrollHeight)*100;

progress.style.width=progressWidth+"%";

});

/* ===============================
   Loading Screen
=============================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});

/* ===============================
   Hero Button Animation
=============================== */

const heroButtons=document.querySelectorAll(".btn-primary-custom,.btn-secondary-custom");

heroButtons.forEach(btn=>{

btn.addEventListener("mouseover",()=>{

btn.style.transform="translateY(-5px) scale(1.02)";

});

btn.addEventListener("mouseout",()=>{

btn.style.transform="translateY(0px) scale(1)";

});

});

/* ===============================
   Console Message
=============================== */

console.log("%c🌊 Rising Waters Loaded Successfully",
"color:#06B6D4;font-size:18px;font-weight:bold;");

console.log("Flood Prediction System Ready...");