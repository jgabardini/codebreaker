import fs from "fs";

describe("codebreaker", () => {

    beforeAll(() => {
        // acceder a la index
        document.body.innerHTML = fs.readFileSync("index.html", "utf8");
        // require("../codebreaker/presenter");
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
})