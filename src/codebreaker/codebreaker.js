class CodeBreaker{
    constructor(nro_secreto){
        this.nro_secreto= nro_secreto
    }
    adivinar(numero){
        this.resultado = (numero == this.nro_secreto)
    }
    ganoElJuego() {
        return this.resultado
    }
}

export default CodeBreaker