const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaTareas = document.getElementById("lista-de-tareas");

function agregarTarea() {
  if (input.value) {
    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");

    let textoTarea = document.createElement("p");
    textoTarea.innerText = input.value;
    tareaNueva.appendChild(textoTarea);

    let contenedorIconos = document.createElement("div");
    contenedorIconos.classList.add("iconos");
    tareaNueva.appendChild(contenedorIconos);

    let iconoCompletar = document.createElement("i");
    iconoCompletar.classList.add(
      "bi",
      "bi-check-circle-fill",
      "icono-completar"
    );
    iconoCompletar.addEventListener("click", completarTarea);

    let iconoEliminar = document.createElement("i");
    iconoEliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
    iconoEliminar.addEventListener("click",eliminarTarea);

    contenedorIconos.append(iconoCompletar, iconoEliminar);
    listaTareas.appendChild(tareaNueva);
  } else {
    alert("Introduce una tarea");
  }
}

function completarTarea(evento) {
  let tarea = evento.target.parentNode.parentNode; // evento de click, accedemos a propiedad target para averiguar el elemento html donde se generó y llegamos a su nodo abuelo por la concatenación de dos .parentNode
  tarea.classList.toggle("completada"); // si el elemento tiene esa clase la va a eliminar, y si no la tiene la va a agregar
}

function eliminarTarea(evento) {
let tarea= evento.target.parentNode.parentNode;
tarea.remove();
}

boton.addEventListener("click", agregarTarea);
input.addEventListener("keydown", (evento)=>{
if(evento.key ==="Enter"){
    agregarTarea();
}
})

