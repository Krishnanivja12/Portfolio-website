/* ----- NAVIGATION BAR TOGGLE ----- */
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- NAVBAR SHADOW ON SCROLL ----- */
window.onscroll = function () {
  headerShadow();
  scrollActive();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (window.scrollY > 50) {
    navHeader.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
  }
}

/* ----- TYPING EFFECT (Typed.js) ----- */
const typingEffect = new Typed(".typedText", {
  strings: ["AI Engineer", "ML Developer", "Data Scientist"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 2000
});

/* ----- SCROLL REVEAL ANIMATIONS ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".top-header", {});
sr.reveal(".project-box", { interval: 200 });

/* ----- LEFT/RIGHT SCROLL ANIMATION ----- */
ScrollReveal().reveal(".about-info", {
  origin: "left",
  delay: 100
});
ScrollReveal().reveal(".contact-info", {
  origin: "left",
  delay: 100
});
ScrollReveal().reveal(".skills-box", {
  origin: "right",
  delay: 100
});
ScrollReveal().reveal(".form-control", {
  origin: "right",
  delay: 100
});

/* ----- ACTIVE NAV LINK ON SCROLL ----- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const link = document.querySelector(".nav_menu_list a[href*=" + sectionId + "]");
    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    }
  });
}

/* ----- CONTACT FORM SUBMISSION ----- */
function submitForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (name.value && email.value && message.value) {
    alert(`Thank you for your message, ${name.value}!`);
    name.value = "";
    email.value = "";
    message.value = "";
  } else {
    alert("Please fill in all fields.");
  }
}

