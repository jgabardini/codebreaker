import CodeBreaker from "./codebreaker";

const numero = document.querySelector("#numero");
const form = document.querySelector("#cb-form");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const codebreaker = new CodeBreaker("7")
  codebreaker.adivinar(numero.value)
  if ( codebreaker.ganoElJuego()) {
    const mensaje= "Ganaste!!"
    resultado.innerHTML = mensaje;
  }
});
