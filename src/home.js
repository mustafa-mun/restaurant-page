import Icon from "./assets/pizza-logo.png";
export default function home() {
  const section = document.createElement("section");
  section.id = "home-section";
  const logoText = document.createElement("em");
  logoText.textContent = "Marcella";
  logoText.id = "logo-text";
  const logo = new Image();
  logo.src = Icon;
  logo.id = "logo";
  const caption = document.createElement("p");
  caption.id = "caption";
  caption.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus. Quis viverra nibh cras pulvinar mattis. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. In cursus turpis massa tincidunt dui ut. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Id semper risus in hendrerit gravida rutrum quisque non. Ultrices eros in cursus turpis massa tincidunt dui ut. At tellus at urna condimentum mattis pellentesque id nibh. Libero enim sed faucibus turpis in eu.";
  

  section.appendChild(logoText);
  section.appendChild(logo);
  section.appendChild(caption)
  return section;
}