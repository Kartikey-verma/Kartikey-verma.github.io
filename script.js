// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

const texts = [
  " Manufacturer ",
  " Consultant ",
  " Customization ",
  " Spares "
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("textDisplay");

function typeEffect() {
  const currentText = texts[index];

  if (isDeleting) {
    textElement.textContent = "Drone" + currentText.substring(0, charIndex--);
  } else {
    textElement.textContent = "Drone" + currentText.substring(0, charIndex++);
  }

  let typingSpeed = isDeleting ? 50 : 100; // Typing & deleting speed

  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 1500; // Pause before deleting
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length; // Move to next text
    typingSpeed = 500; // Pause before typing new text
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect(); // Start animation
