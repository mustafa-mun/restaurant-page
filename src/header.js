function nav() {
  const nav = document.createElement("nav");
  const home = document.createElement("p");
  const menu = document.createElement("p");
  const contact = document.createElement("p");
  home.id = "home"
  home.textContent = "Home";
  menu.textContent = "Menu";
  menu.id = "menu"
  contact.textContent = "Contact";
  contact.id = "contact"
  home.className = "nav-text border-bottom";
  contact.className = "nav-text";
  menu.className = "nav-text";
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  return nav;
}

export default function header() {
  const element = document.createElement("header");
  element.id = "header";
  element.appendChild(nav());
  return element;
}