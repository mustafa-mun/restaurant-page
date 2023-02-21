export default function menu() {
  const section = document.createElement("section");
  const pizzaNames = [
    "MARGHERITA",
    "QUATRO STAOGINI",
    "DIAVOLA",
    "PARMIGIANA",
    "FRUTTI DI MARE",
  ];

  const pizzaIngredients = [
    "Tomato sauce, mozzarella, and oregano",
    "Tomato sauce, mozarella, mushrooms, ham, artichokes, olives and oregano",
    "Tomato sauce, mozarella, spicy salami and chilli pepper",
    "Tomato sauce, mozarella, eggplants and parmesan flakes",
    "Tomato sauce and seafood",
  ];

  const pizzaPrices = [8, 10, 9, 9, 10];

  section.id = "menu-section";
  const headerText = document.createElement("em");
  headerText.className = "header-text";
  headerText.textContent = "Menu";
  section.appendChild(headerText);

  for (let i = 0; i < pizzaNames.length; i += 1) {
    const name = document.createElement("p");
    const container = document.createElement("div");
    const wrapper = document.createElement("div");
    const ingredient = document.createElement("p");
    const price = document.createElement("p");

    price.className = "menu-price-text";
    container.className = "menu-text-ontainer";
    wrapper.classList = "menu-text-wrapper";
    name.className = "menu-text";
    ingredient.className = "menu-ingredient-text";

    name.textContent = `${pizzaNames[i]}`;
    ingredient.textContent = `${pizzaIngredients[i]}`;
    price.textContent = `€${pizzaPrices[i]}`;

    wrapper.appendChild(container);
    wrapper.appendChild(price);
    container.appendChild(name);
    container.appendChild(ingredient);
    section.appendChild(wrapper);
  }
  return section;
}
