const botonInicioPausa = document.getElementById("boton-inicio-pausa");
const botonReiniciar = document.getElementById("boton-reiniciar");
const cronometro = document.getElementById("cronometro");

let [horas, minutos, segundos] = [0, 0, 0];
let intervaloTiempo;

let estadoCrono;

function asignarFormato(unidadTiempo) {
  return unidadTiempo < 10 ? "0" + unidadTiempo : unidadTiempo;
}

function actualizarCrono() {
  segundos++;

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  const segundosFormato = asignarFormato(segundos);
  const minutosFormato = asignarFormato(minutos);
  const horasFormato = asignarFormato(horas);

  cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`;
}

botonInicioPausa.addEventListener("click", function () {
  if (estadoCrono === "pausado") {
    intervaloTiempo = window.setInterval(actualizarCrono, 1000); //llama a esta función cada 1000 milisegundos
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
    botonInicioPausa.classList.replace("iniciar", "pausar");
    estadoCrono = "iniciado";
  } else {
    window.clearInterval(intervaloTiempo); // elimina el intervalo de tiempo para el estado activo
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.replace("pausar", "iniciar");
    estadoCrono = "pausado";
  }
});

botonReiniciar.addEventListener("click", function () {
  window.clearInterval(intervaloTiempo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  cronometro.innerText = "00:00:00";
  botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
  botonInicioPausa.classList.replace("pausar", "iniciar");
  estadoCrono = "pausado";
});
