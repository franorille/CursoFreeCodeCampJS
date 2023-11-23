const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoAzul = document.getElementById("texto-azul");
const textoVerde = document.getElementById("texto-verde");

let valorRojo = inputRojo.value;
let valorVerde = inputVerde.value;
let valorAzul = inputAzul.value;

textoRojo.innerText = valorRojo;
textoVerde.innerText = valorVerde;
textoAzul.innerText = valorAzul;

function cambiaColor(rojo, verde, azul) {
  const colorRGB = `rgb(${valorRojo},${valorVerde},${valorAzul})`;
  document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener("change", (evento) => {
  //usando objeto evento
  valorRojo = evento.target.value;
  textoRojo.textContent = valorRojo;
  cambiaColor(valorRojo, valorVerde, valorAzul);
});

inputVerde.addEventListener("change", (evento) => {
  valorVerde = evento.target.value;
  textoVerde.textContent = valorVerde;
  cambiaColor(valorRojo, valorVerde, valorAzul);
});

inputAzul.addEventListener("change", () => {
  // sin usar objeto evento
  valorAzul = inputAzul.value;
  textoAzul.textContent = valorAzul;
  cambiaColor(textoRojo, textoVerde, textoAzul);
});

