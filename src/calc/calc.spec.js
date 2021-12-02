import calculadora from "./calc";

// Ejemplos: “5”=5 “1+2”=3 “4+2”=6 “3+8+7”=18

describe("Calculadora", () => {
  it("Un string vacío suma 0", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("'5' => 5", () => {
    expect(calculadora("5")).toEqual(5);
  });
  it("'1+2' => 3", () => {
    expect(calculadora("1+2")).toEqual(3);
  });
  it("'1-2' => -1", () => {
    expect(calculadora("1-2")).toEqual(-1);
  });
  it("'1+2-3' => 0", () => {
    expect(calculadora("1+2-3")).toEqual(0);
  });
});
