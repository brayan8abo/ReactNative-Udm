//Scope

const precio = 300; //esta esta declara a nivel global

function unaFuncion() {
  const precio = 600; // esta esta declara dentro de la funcion y solo puede ser usada aca, si imprimo me sale 600, si quito sale 300

  console.log(precio);
}

if (true) {
  console.log(precio);
}
console.log(precio);
unaFuncion();
