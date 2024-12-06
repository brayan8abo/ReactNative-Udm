// Eventos DOM - Summit

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //previene enviar el formulario y podemos hacer verificaciones

  const nombre = document.querySelector(".nombre").value;
  const password = document.querySelector(".password").value;

  if (nombre === "" || password === "") {
    console.warn("Todos los cambos son obligatorios");
  } else {
    console.log("Todo esta correcto, Enviando");
  }
});
