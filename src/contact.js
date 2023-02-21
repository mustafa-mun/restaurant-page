import phone from "./assets/telephone.png";
import mail from "./assets/mail.png";

export default function contact() {
  const section = document.createElement("section");
  section.id = "contact-section";
  const phoneContainer = document.createElement("div");
  const mailContainer = document.createElement("div");
  phoneContainer.className = "info-container";
  mailContainer.className = "info-container";
  const phoneIcon = new Image();
  phoneIcon.src = phone;
  const mailIcon = new Image();
  mailIcon.src = mail;
  phoneIcon.className = "info-icon";
  mailIcon.className = "info-icon";
  const phoneText = document.createElement("p");
  phoneText.textContent = "0322 8292472";
  const mailText = document.createElement("p");
  mailText.textContent = "marcella@businessemail.com";
  const iFrame = document.createElement("iframe");
  iFrame.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.0729782815374!2d9.1951331!3d45.468333799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b046e886ed%3A0x30dd2847bfbfd4b4!2sVia%20Monte%20Napoleone%2C%2020121%20Milano%20MI%2C%20%C4%B0talya!5e0!3m2!1str!2str!4v1676902003729!5m2!1str!2str";
  iFrame.width = 675;
  iFrame.height = 450;
  iFrame.style.border = 0;
  iFrame.allowFullscreen = "";
  iFrame.referrerPolicy = "no-referrer-when-downgrade"
  iFrame.loading = "lazy"

  section.appendChild(phoneContainer);
  section.appendChild(mailContainer);
  section.appendChild(iFrame);
  phoneContainer.appendChild(phoneIcon);
  phoneContainer.appendChild(phoneText);
  mailContainer.appendChild(mailIcon);
  mailContainer.appendChild(mailText);
  return section;
}
