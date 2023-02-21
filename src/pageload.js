import home from "./home";
import header from "./header";

export function refresh(parent) { // Remove section from page function
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  return parent;
}

function container(section) { // Section container
  const element = document.createElement("div");
  element.id = "container";
  element.appendChild(section);
  return element;
}

export function content() { // Page container
  const div = document.createElement("div");
  div.id = "content";
  div.appendChild(header());
  div.appendChild(container(home()));
  return div;
}
