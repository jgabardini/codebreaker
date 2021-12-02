import fs from "fs";

describe("codebreaker", () => {

    beforeAll(() => {
        // acceder a la index
        document.body.innerHTML = fs.readFileSync("index.html", "utf8");
        require("../codebreaker/presenter");
    })
    afterEach(() => {
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML= ""
    })

    it("Titulo Bienvenida", () => {  
        // validar que tiene la bienvenida
        const titulo= document.querySelector("title").innerHTML
        expect(titulo).toEqual("Codebreaker")
    })
    it("Cartel visble de lejos", () => {  
        const titulo= document.querySelector("h1").innerHTML
        expect(titulo).toEqual("¡Ganate un bono!")
    })
    it("Mensaje vacio al inicio",() => {

        const resultado=document.querySelector("#resultado").innerHTML

        expect(resultado).toEqual("");
    })
    it("Ingreso un numero correcto y gané",() => {

        document.querySelector("#numero").value = "7";
        document.querySelector("input[type=submit]").click();

        const resultado=document.querySelector("#resultado").innerHTML

        expect(resultado).toEqual("Ganaste!!");
    })
    it("Ingreso un numero incorrecto no hace nada",() => {

        document.querySelector("#numero").value = "6";
        document.querySelector("input[type=submit]").click();

        const resultado=document.querySelector("#resultado").innerHTML

        expect(resultado).toEqual("");
    })

})