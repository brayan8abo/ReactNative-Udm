//Selectores del dom


//con esto lo que hago es referencia a un atributo del hmtl, en este caso, tengo un h2 al cual estoy accediendo
const heading = document.querySelector('.DOM h2')
/* console.log(heading)
*/
console.log(heading.textContent)
/* console.log(heading.tagName)
console.log(heading.classList)
console.log(heading.id)  */

//con este hago referencia a todos los atributos que tenga contenplados en una parte espeficifica del html, obviamente pasandole como parametro donde se encuentran
// me pasa todos los que sean enlaces 
const enlaces = document.querySelectorAll('.navegacion a')
const no_existe = document.querySelectorAll('.no-existe')//no me da error, lo unico es que me pondra que es un array vacio

 
console.log(enlaces)
console.log (no_existe) //imprime array vacio.