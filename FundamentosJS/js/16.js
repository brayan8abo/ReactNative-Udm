//TODO LOS METODOS Y ACCESOS QUE TENEMOS ACA NO MUTAN EL ARRAY, SINO QUE CREA UNO NUEVO

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const nuevoArray2 = tecnologias.filter(
  (tech) => tech !== "React" //le paso un nombre donde se guardan
  // console.log (tech) //aca imprimo
  //return tech !== 'HTML' //itera el array, e imprime todos menos el que sea igual a html

  //return tech !== 'Node.js'
);
//Esta linea de aca es lo mismo que tengo en el array2, simplemente que excluyendo a node.js es para ver la simplicidad de un arrow
const arrowFunction = tecnologias.filter((tech2) => tech2 !== "Node.js");

const numeros = [10, 20, 30];

let nuevoArray3;

const resultado = tecnologias.includes("React"); //devulve true o false

console.log(resultado);

// const resultadoNum = numeros.some (numero => numero > 100) //le pasamos numero, si arrow numero mayor a un numero 100 DEVUELVE FALSE
const resultadoNum = numeros.some((numero) => numero > 15); //le pasamos numero, si arrow numero mayor a un numero 15 DEVULVE TRUE

console.log(resultadoNum);

console.log(nuevoArray2);
console.log(arrowFunction);

//devuelve el que cumpla la condicion que mas se acerque a la condicion
const resultadoNumero = numeros.find((numero) => numero > 15); //primero que cumpla la condicion

console.log(resultadoNumero); // en este caso imprime el 20, ya que es el q mas se acerca al numero ingresado


//Every retorna true o false si todos cumplen la condicion


const resultados = numeros.every (numero => numero > 15) //le preguntamos si todos son mayores que 15

console.log (resultados) // al imprimir nos da false ya que en el const de numeros tenemos 10,20,30, entonces no se cumplen todas las condiciones

//reduce

const resultadoReduce = numeros.reduce((total,numero) => numero + total,0) //le pasamos un total, y los numeros que estan en el const
//y la posicion desde la que deseemos que empiece, en este caso sumando lo que se tiene en const da 60

//Filter crea un array en base a una condicion

// const resultadoTech = tecnologias.filter (tech => tech === 'Node.js') //me saca en un nuevo array, lo que le pido que es node
const resultadoTech = tecnologias.filter (tech => tech !== 'Node.js') // y aca me saca todo en un nuevo array, excluyendo node

// const resultadonum2 = numeros.filter(numero => numero > 15) // me saca en un array,todos los numeros que sea mayor a 15
const resultadonum2 = numeros.filter(numero => numero < 15) // me saca en un array,todos los numeros que sea menores a 15

console.log (resultadoReduce)
console.log (resultadoTech)
console.log(resultadonum2)

console.log() 


tecnologias.forEach( (tech,index) => console.log(index)) // si le pongo index, me enumera

console.log() 



const arrayMap = tecnologias.map( tech => tech

)

console.log (arrayMap)