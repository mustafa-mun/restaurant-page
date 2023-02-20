import Icon from "./assets/pizza-logo.png";

export default function loadHome() {
  const section = document.createElement("section");
  section.id = "home-section";
  const logoText = document.createElement("em");
  logoText.textContent = "Marcella";
  logoText.id = "logo-text";
  const logo = new Image();
  logo.src = Icon;
  logo.id = "logo";
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const pThree = document.createElement("p");
  pOne.className = "caption";
  pTwo.className = "caption";
  pThree.className = "caption";
  pOne.innerText =
    "Welcome to Marcella, the home of authentic Italian pizza! Our restaurant is named after our grandmother, who taught us the secret to making perfect pizza dough from scratch. At Marcella, we believe that pizza is more than just a food - it's a way of life. That's why we use only the freshest, high-quality ingredients in every pizza we make, from the tangy San Marzano tomatoes to the creamy mozzarella cheese.";
  pTwo.innerText = 
    "Whether you're in the mood for a classic Margherita or something a little more adventurous, our menu has something for everyone. And if pizza isn't your thing, we also offer a range of delicious salads, pastas, and desserts, all made with the same care and attention to detail as our pizzas."
  pThree.innerText =
    "At Marcella, we're passionate about creating an authentic Italian dining experience that's both welcoming and delicious. So why not come and see us today, and let us share a slice of our heritage with you?"
  section.appendChild(logoText);
  section.appendChild(logo);
  section.appendChild(pOne)
  section.appendChild(pTwo)
  section.appendChild(pThree)
  return section;
}