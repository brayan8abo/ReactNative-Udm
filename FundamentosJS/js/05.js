//Objetos manipulacion

const producto = {
    //pertenece al objeto lo que va dentro
    nombre: "Tablet",
    precio:  300,
    disponible: true
}

// Object.freeze(producto) //congela y no se deja reescribir, ni agregar ni eliminar, lo deja tal cual lo cree

Object.seal(producto) //deja modificar los atributos que ya existan, no deja agregar ni eliminar


//reescribir un valor
producto.nombre = "Monitor curvo"

//si no existe lo añade
producto.imagen = "imagen.jpg"

//eliminar el atributo
delete producto.disponible

delete producto.calificaciones

console.log (producto)

