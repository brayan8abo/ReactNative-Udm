//Comparacion y operador estrico

const numero1 = 20;
const numero2 = "20";

/* 
== (comparacion pero no es estricto)

=== comparacion estrica, este revisa que el tipo de dato sea igual al que se compara
 */
/* console.log (typeof numero1)
console.log (typeof numero2) */

if (/* String */(numero1) === /* Number */(numero2)) { //casteo a number y/o strign
  console.log("Sí, son iguales");
} else {
  console.error("No, no son iguales");
}

const autenticado = true

if(autenticado){
    console.log ('Si esta registrado')
}
