import CodeBreaker from "./codebreaker";

describe("codebreaker", () => {
  it("Ingreso el nro correcto, gano", () => {
    const cb = new CodeBreaker("7")
    cb.adivinar("7")
    expect(cb.ganoElJuego()).toEqual(true)
  }) 
  it("Ingreso el nro incorrecto, NO gano", () => {
    const cb = new CodeBreaker("7")
    cb.adivinar("3")
    expect(cb.ganoElJuego()).toEqual(false)
  }) 
})
