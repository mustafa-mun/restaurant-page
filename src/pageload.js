import home from "./home";
import header from "./header";

export function refresh(parent) {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
  return parent;
}

export function container(section) {
  const element = document.createElement("div");
  element.id = "container";
  element.appendChild(section);
  return element;
}

export function content() {
  const div = document.createElement("div");
  div.id = "content";
  div.appendChild(header());
  div.appendChild(container(home()));
  return div;
}

