import "./style.css";

function content() {
  const div = document.createElement("div");
  div.id = "content";
  return div;
}

document.body.appendChild(content());
