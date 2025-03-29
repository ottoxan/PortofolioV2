
//logo

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const back = document.getElementById("sss");

btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    back.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// Menu button
const clicked = document.getElementById("menubtn");
const list = document.getElementById("list");

if (clicked) {
    clicked.addEventListener("click", function () {
        list.classList.toggle("closed");
    });
}

// Menu button

// Circle

var svg = document.getElementById("svg");

document.addEventListener("scroll", (e) => {
    var roll = window.scrollY;
    svg.style.transform = "rotate(" + roll / 5 + "deg)";
});

// Circle

// Home
const leftText = document.getElementById("left");
const name = document.getElementById("name");
const fam = document.getElementById("fam");
const month = document.getElementById("month");
const day = document.getElementById("day");

document.addEventListener("scroll", (e) => {
    var roll = window.scrollY;
    name.style.top = 10 - +roll / 20 + "%";
    fam.style.top = 23 - +roll / 20 + "%";
    month.style.right = 0 - +roll / 20 + "%";
    day.style.left = 0 - +roll / 20 + "%";
});

// Home

//


gsap.registerPlugin(ScrollTrigger);

gsap.to(".aboutText p", {
    backgroundPositionX: "0%",
    stagger: 1,
    ease: "none",
    scrollTrigger: {
        trigger: ".aboutText",
        markers: false,
        scrub: 1,
        start: "top 50%",
        end: "bottom 70%",
    }
});

gsap.to(".insp", {
    x: -3000,
    ease: "none",
    scrollTrigger: {
        trigger: ".insp",
        start: "top 80%",
        end: "bottom 10%",
        scrub: 1,
    },
});


