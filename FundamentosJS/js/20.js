//if ternario

const autenticado = true;

//Lo inicializo en true, pero si le pongo el signo de exclamacion lo revierte y lo pone a false
/* ! */ autenticado
  ? console.log("Usuario autenticado")
  : console.error("No autenticado, dirigir al login");

// Doble ternario

const saldo = 600;
const pagar = 500;
const tarjeta = false;

saldo > pagar
  ? console.log("Puedes pagar con saldo")
  : tarjeta
  ? console.log("Puedes pagar con la tarjeta")
  : console.error("No, no puedes pagar");

/* 
    primero pregunta si el salgo es mayor a lo que debo pagar, ? luego la respuesta : para otra pregunta ? respuesta
  */

    