// import KBot from "./kbot";

const numero = document.querySelector("#numero");
const form = document.querySelector("#cb-form");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const kbot = new KBot("en")
  // const mensaje = kbot.saludar(nombre.value)
  if (numero.value == "7") {
    const mensaje= "Ganaste!!"
    resultado.innerHTML = mensaje;
  }
});
