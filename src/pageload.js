import home from "./home";
import header from "./header";
import menu from "./menu"; // Delete this

export function refresh(parent) {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
  return parent;
}

function container(section) {
  const element = document.createElement("div");
  element.id = "container";
  element.appendChild(section);
  return element;
}

export function content() {
  const div = document.createElement("div");
  div.id = "content";
  div.appendChild(header());
  div.appendChild(container(menu()));// Change this to home
  return div;
}

