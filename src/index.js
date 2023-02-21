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

contactNav.addEventListener("click", () => { // Tab switch
  const contactSection = document.getElementById("contact-section");
  loadSection(container, contactSection, contact());
  if (!Array.from(contactNav.classList).includes("border-bottom")) {
    toggleBorder(contactNav);
  }
  if (Array.from(homeNav.classList).includes("border-bottom")) {
    toggleBorder(homeNav);
  }
  if (Array.from(menuNav.classList).includes("border-bottom")) {
    toggleBorder(menuNav);
  }
});

homeNav.addEventListener("click", () => { // Tab switch
  const homeSection = document.getElementById("home-section");
  loadSection(container, homeSection, home());
  if (!Array.from(homeNav.classList).includes("border-bottom")) {
    toggleBorder(homeNav);
  }
  if (Array.from(contactNav.classList).includes("border-bottom")) {
    toggleBorder(contactNav);
  }
  if (Array.from(menuNav.classList).includes("border-bottom")) {
    toggleBorder(menuNav);
  }
});

menuNav.addEventListener("click", () => { // Tab switch
  const menuSection = document.getElementById("menu-section");
  loadSection(container, menuSection, menu());
  if (!Array.from(menuNav.classList).includes("border-bottom")) {
    toggleBorder(menuNav);
  }
  if (Array.from(contactNav.classList).includes("border-bottom")) {
    toggleBorder(contactNav);
  }
  if (Array.from(homeNav.classList).includes("border-bottom")) {
    toggleBorder(homeNav);
  }
});
