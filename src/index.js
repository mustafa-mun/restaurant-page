import "./style.css";
import * as load from './pageload.js'
import home from "./home";
import contact  from "./contact";

document.body.appendChild(load.content());

const homeNav = document.getElementById("home")
const menuNav = document.getElementById("menu");
const contactNav = document.getElementById("contact");
const parent = document.getElementById("container")

contactNav.addEventListener("click", () => {
  load.refresh(parent)
  parent.appendChild(contact())
})

homeNav.addEventListener("click", () => {
  load.refresh(parent)
  parent.appendChild(home())
})




