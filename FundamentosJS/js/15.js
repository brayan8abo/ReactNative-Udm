
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

/* const nuevoArray = tecnologias.map( tech => {
    if (tech === 'HTML'){
        return 'GraphQL' //reescribir
    } else {
        return tech
    }

}) */

const nuevoArray2 = tecnologias.filter(tech => tech !== 'React' //le paso un nombre donde se guardan
    // console.log (tech) //aca imprimo
    //return tech !== 'HTML' //itera el array, e imprime todos menos el que sea igual a html

    //return tech !== 'Node.js'
)

const arrowFunction = tecnologias.filter (tech2 => tech2 !== 'Node.js')

/* console.log (nuevoArray) */
console.log(nuevoArray2)
console.log(arrowFunction)