//Objetos

/* const nombre = "Tablet"
const precio = 300
const disponible = true */


//objeto producto
const producto = {
    //pertenece al objeto lo que va dentro
    nombre: "Tablet",
    precio:  300,
    disponible: true
}

console.log(producto)
//saca una tabla
console.table(producto)

console.log (producto.nombre) //. para acceder al atributo del objeto
console.log (producto.precio)
console.log (producto.disponible)

console.log("-----------------------")
//destructuracion objetos 

//de producto saco lo que desee sin necesidad de llamar producto.nombre
const {nombre,precio,disponible} = producto

console.log(nombre)
console.log(precio)
console.log(disponible)


//Objeto literal

const autenticado = true
const usuario = "Brayan"


const nuevoObjeto = {
    autenticado /* autenticado */,
    usuario /* usuario */
}
//puedo borrar el autenticado y el usuario si los dos puntos seguido es igual


console.table(nuevoObjeto)