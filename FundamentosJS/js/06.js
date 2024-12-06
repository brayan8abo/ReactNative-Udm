//Objetos, destructurar con 2 o mas objetos

const producto = {
    //pertenece al objeto lo que va dentro
    nombre: "Tablet",
    precio:  300,
    disponible: true
}

const cliente = {
    nombre: "Brayan",
    premiun: true
}

// no puedo tener dos nombres iguales en un archivo
const { nombre,precio,disponible } = producto
const { nombre: nombreCliente,premiun} = cliente //con nombre: creo un alias temporal para que no se repita y luego en el console.log hago el llamado al alias


console.log (nombre,precio,disponible)
console.log (nombreCliente,premiun) //llamo al alias




