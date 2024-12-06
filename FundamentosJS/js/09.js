//Operacion en arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']


//añadir elementos al array
//ambos agregan, pero no de debe usar estos dos modos
/* tecnologias.push ('GraphQL')

tecnologias.unshift ('MySQ0') */

// const nuevoArreglo = [...tecnologias,'GraphQL'] //si ponemos ... el array y lo que deseemos lo agrega al final
// const nuevoArreglo = ['GraphQL', ...tecnologias,] // si ponemos lo que queremos agregar ... el array lo agrega al inicio

//eliminar elementos del array
// tecnologias.pop() //elimina el ultimo indice

// tecnologias.shift() // elimina el primero
// tecnologias.slice(2, 3)


/* const nuevoArray = tecnologias.filter(function(tech){//le paso un nombre donde se guardan
    // console.log (tech) //aca imprimo
    //return tech !== 'HTML' //itera el array, e imprime todos menos el que sea igual a html
    return tech !== 'React'
    //return tech !== 'Node.js'
}) */

//reemplazar del array

//tecnologias[0] = 'GraphQL' //modifica el arreglo inicial

const nuevoArray = tecnologias.map(function(tech){
    if (tech === 'HTML'){
        return 'GraphQL'
    } else {
        return tech
    }

})

console.table(tecnologias)
console.table(nuevoArray)
// console.table(nuevoArreglo)
