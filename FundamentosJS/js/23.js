//Manipular elementos html con JS

const heading = document.querySelector('.heading') // nos devulve un objeto


heading.textContent = 'Un nuevo heading'//re asignar valores
console.log (heading.textContent)

const inputNombre = document.querySelector('#nombre') //al login, le obligo a poner un valor por defecto en la pantalla
inputNombre.value = 'Un valor por default'
console.log(inputNombre)


const enlaces = document.querySelectorAll('.navegacion a') // con eso selecciono todos los enlaces

enlaces.forEach(enlaces => enlaces.textContent = 'Nuevo enlace')//como no se puede modificar el textContent de un enlace
//lo que hago es iterar y luego le paso a enlaces funcion arrow un nuevo textConten


