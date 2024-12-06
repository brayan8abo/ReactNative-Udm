// Eventos DOM - Inputs

const inputNombre = document.querySelector(".nombre");
inputNombre.addEventListener("input", function (e) {
  console.log(e.target.value);
});

const inputPassword = document.querySelector(".password");
inputPassword.addEventListener("input", funcionPassword);

function funcionPassword() {
  inputPassword.type = 'text' //con este vemos todo el texto
  setTimeout(() => {
    inputPassword.type = 'password' // para poder tener una minivizualicación 
  }, 100);
}
