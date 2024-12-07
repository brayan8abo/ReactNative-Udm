// template string

const producto = 'Tablet de 12 pulgadas'
const precio = 400
const marca = 'LG'

console.log (producto + " " + precio + " " + marca) // esta mal vista esta concatenacion


function textoDeFuncion(){
    return "Este texto proviene de la función"
}

console.log (`${producto} $${precio} dolares, Marca: ${marca}, ${textoDeFuncion()}`)