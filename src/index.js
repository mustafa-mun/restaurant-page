// Image by KamranAydinov on Freepik
import "./style.css";
import * as load from './pageload.js'
import home from "./home";
import header from "./header";
import contact  from "./contact";

function content() {
  const div = document.createElement("div");
  div.id = "content";
  div.appendChild(header());
  div.appendChild(load.container(home()));
  return div;
}

document.body.appendChild(content());

const homeNav = document.getElementById("home")
const menuNav = document.getElementById("menu");
const contactNav = document.getElementById("contact");


contactNav.addEventListener("click", () => {
  const parent = document.getElementById("container") 
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
  parent.appendChild(contact())

})





