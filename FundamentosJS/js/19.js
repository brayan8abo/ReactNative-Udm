const saldo = 600;
const pagar = 700;
const tarjeta = false; // se puede poner false o true

/* 
    || almenos una debe cumplirse
    && todas deben cumplirse

*/

if (saldo > pagar || tarjeta) {
  console.log("Puedes pagarlo");
} else {
  console.error("No puedes pagarlo");
}



