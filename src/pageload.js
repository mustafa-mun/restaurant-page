
import home from "./home";
import contact from "./contact";

export function container(section) {
  const element = document.createElement("div");
  element.id = "container";
  element.appendChild(section);
  return element;
}

