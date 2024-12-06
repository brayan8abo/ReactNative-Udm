//unir 2 objetos

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

/* producto.cliente = cliente

console.log(producto) */ //ESTO NO SE PUEDE USAR, ESTA MAL VISTO


/* const nuevoObjeto = Object.assign(producto,cliente) //no */
//asi se haria de la manera correcta, a objeto producto le paso producto y a cliente cliente
const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}
console.log (nuevoObjeto2)
console.log (cliente)
console.log (producto)



