import "./style.css";
import test2Function from "./test2";

function content() {
  const div = document.createElement("div");
  div.className = "testClass";
  div.innerText = "Test";
  return div;
}
test2Function();
document.body.appendChild(content());
