import "./style.css";
import * as load from "./pageload.js";
import home from "./home";
import contact from "./contact";
import menu from "./menu";

document.body.appendChild(load.content()); // Load page content

const homeNav = document.getElementById("home");
const menuNav = document.getElementById("menu");
const contactNav = document.getElementById("contact");
const container = document.getElementById("container");

function loadSection(parent, section, sectionFunc) { // Load spesific section function
  if (parent.firstChild !== section) {
    load.refresh(parent);
    parent.appendChild(sectionFunc);
  } else {
    return;
  }
}

function toggleBorder(element) { // Toggle nav text border function
  element.classList.toggle("border-bottom");
}

function checkClass(firstNav, secondNav, thirdNav) { // Check if tabs has border bottom class
  if (!Array.from(firstNav.classList).includes("border-bottom")) {
    toggleBorder(firstNav);
  }
  if (Array.from(secondNav.classList).includes("border-bottom")) {
    toggleBorder(secondNav);
  }
  if (Array.from(thirdNav.classList).includes("border-bottom")) {
    toggleBorder(thirdNav);
  }
}

contactNav.addEventListener("click", () => { // Tab switch
  const contactSection = document.getElementById("contact-section");
  loadSection(container, contactSection, contact());
  checkClass(contactNav, homeNav, menuNav) // Toggle border
});

homeNav.addEventListener("click", () => { // Tab switch
  const homeSection = document.getElementById("home-section");
  loadSection(container, homeSection, home());
  checkClass(homeNav, contactNav, menuNav) // Toggle border
});

menuNav.addEventListener("click", () => { // Tab switch
  const menuSection = document.getElementById("menu-section");
  loadSection(container, menuSection, menu());
  checkClass(menuNav, contactNav, homeNav) // Toggle border
});
