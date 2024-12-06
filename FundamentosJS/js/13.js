//funciones - function expression

/* function sumar(numero = 0 ,numero2 = 0){
    console.log (numero + numero2) //suma
}
 */

const sumar = function (numero, numero2 = 0) {
    console.log(numero + numero2)
    return (numero + numero2)
}



sumar(30)
const resultado = sumar(30, 25)