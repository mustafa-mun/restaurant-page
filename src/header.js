function nav() {
  const nav = document.createElement("nav");
  const home = document.createElement("p");
  const contact = document.createElement("p");
  const about = document.createElement("p");
  home.textContent = "Home";
  contact.textContent = "Contact";
  about.textContent = "About";
  home.className = "nav-text";
  contact.className = "nav-text";
  about.className = "nav-text";
  nav.appendChild(home);
  nav.appendChild(contact);
  nav.appendChild(about);
  console.log(nav);
  return nav;
}

export default function header() {
  const element = document.createElement("header");
  element.id = "header";
  element.appendChild(nav());
  return element;
}