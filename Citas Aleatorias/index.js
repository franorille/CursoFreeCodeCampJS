let boton = document.getElementById("boton-cambiar-cita");

let cita = document.getElementById("cita");
let autor = document.getElementById("autor");

let indiceAleatorio = generarAleatorio();

function generarAleatorio() {
  // Math.floor(Math.random()*(max-min) + min);
  return Math.floor(Math.random() * citas.length);
}

cita.innerText = `"${citas[indiceAleatorio].texto}"`;
  autor.innerText = `"${citas[indiceAleatorio].autor}"`;

boton.addEventListener("click", function cambiarCita() {
  let indiceAleatorioCita = generarAleatorio();

  cita.innerText = `"${citas[indiceAleatorioCita].texto}"`;
  autor.innerText = `"${citas[indiceAleatorioCita].autor}"`;
});
