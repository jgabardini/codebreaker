class KBot {
    constructor(idioma) {
        if (idioma == "en") {
            this.idioma= idioma
        }
        else {
            this.idioma= "es"
        }
    }
    saludar(nombre) {
        if (this.idioma == "es") {
            return "Hola, " + nombre
        }
        else {
            return "Hello, " + nombre
        }
    }
}

export default KBot