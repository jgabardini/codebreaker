import KBot from "./kbot";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#kbot-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const kbot = new KBot("en")
  const mensaje = kbot.saludar(nombre.value)

  div.innerHTML = "<p>" + mensaje + "</p>";
});
