import "./style.css";
import * as load from "./pageload.js";
import home from "./home";
import contact from "./contact";

document.body.appendChild(load.content());

const homeNav = document.getElementById("home");
const menuNav = document.getElementById("menu");
const contactNav = document.getElementById("contact");
const container = document.getElementById("container");

function loadSection(parent, section, sectionFunc) {
  if (parent.firstChild !== section) {
    load.refresh(parent);
    parent.appendChild(sectionFunc);
  } else {
    return;
  }
}

contactNav.addEventListener("click", () => {
  const contactSection = document.getElementById("contact-section");
  loadSection(container, contactSection, contact());
});

homeNav.addEventListener("click", () => {
  const homeSection = document.getElementById("home-section");
  loadSection(container, homeSection, home());
});
