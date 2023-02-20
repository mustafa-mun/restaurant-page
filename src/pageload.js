import  header from "./header";
import home from "./home";

function container() {
  const element = document.createElement("div");
  element.id = "container";
  element.appendChild(home());
  return element;
}

export function content() {
  const div = document.createElement("div");
  div.id = "content";
  div.appendChild(header());
  div.appendChild(container());
  return div;
}
