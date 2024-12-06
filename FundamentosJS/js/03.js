//tipos de datos

//undefined

let cliente// =20


console.log(cliente);

//con el type ofe nos ofrece de que tipo es, si le cambio let precio = 20, se pone tipo number
console.log(typeof cliente)

//boolean

const descuento = true
console.log(descuento)
console.log(typeof descuento)

//numbers
const numero1 = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)


//string cadenas de texto

const alumno = "Brayan"
let producto = 'Monitor 20 pulgadas'

const numero = "30"
const numero4 = 30

console.log(typeof numero)
console.log(typeof numero2)


//big int

const numeroGrande = BigInt(7847485455555147513232323)//lo detecta como numero pero si es big int tengo que castear

console.log(typeof numeroGrande)


const num1 = 30
const num2 = 20 

console.log(num1+num2)//no dejearia sumar el big
const num3 = "30"
const num4 = 30

console.log(num3+num4)//concatenar

console.log(typeof String(num3))
console.log(typeof num4)

//Symbol dato unico

const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)

console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())

//asi tengan el mismo valor a la hora de imprimir son simbolos diferentes

//NULL 

const descuento2 =  null
console.log(typeof descuento2)


