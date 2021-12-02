// import KBot from "./kbot";

const numeronombre = document.querySelector("#numero");
const form = document.querySelector("#cb-form");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const kbot = new KBot("en")
  // const mensaje = kbot.saludar(nombre.value)
  const mensaje= "Ganaste!!"
  resultado.innerHTML = mensaje;
});
