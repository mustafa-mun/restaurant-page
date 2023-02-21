export default function menu() {
  const section = document.createElement("section");
  const pizzaNames = ["MARGHERITA", "QUATRO STAOGINI", "DIAVOLA", "PARMIGIANA", "FRUTTI DI MARE"]
  section.id = "menu-section"
  const headerText = document.createElement("em")
  headerText.className = "header-text"
  headerText.textContent = "Menu"
  section.appendChild(headerText)
  for(let i = 0; i < pizzaNames.length; i+=1) {
    const p = document.createElement("p");
    const container = document.createElement("div");
    container.className = "menu-text-container"
    p.className = "menu-text"
    p.textContent = `${pizzaNames[i]}`
    container.appendChild(p)
    section.appendChild(container)
  }
  return section
}