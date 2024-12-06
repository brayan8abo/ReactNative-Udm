//eventos en el DOM - clisck

const heading = document.querySelector(".heading");
/* heading.addEventListener('click' ,function (){
    console.log('Diste click en el heading')
}) */

//lo que hace es que le paso el sitio o la caracteristisca y escucha cuando le de click al heading y luego lo vemos por pantalla
heading.addEventListener("click", () => {
  console.log("Diste click en el heading");
});

//lo puedo hacer pasandole una funcion declarada
heading.addEventListener("click", clickHeading);

//funcion
function clickHeading() {
  console.log("Diste click en el heading");
}
//esto lo que hace es que escucha el click, y luego pasa el textContext nuevo
heading.addEventListener("click", () => {
  heading.textContent = "Nuevo click en el heading";
});

//un addlistener no puede escuchar varios objetos, entonces hacemos la recuperacion de los elementos con el selectorALl

const enlaces = document.querySelectorAll(".navegacion a");
//y hacemos un forEach para que cuando se toque cada uno haga el console.log
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    console.log("Has hecho click en un enlace");
  });
});
