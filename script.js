
let arreglo = ["", "", ""]
let video = document.querySelector('video');
let tiempoActual;
let botonInicio = document.querySelector("#play");
let botonPause = document.querySelector("#pause");
let tiempoVideo = document.querySelector(".duracion-video");

function segundosAMinutosYSegundos(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = Math.floor(segundos % 60);
  return `${minutos}:${segundosRestantes}`;
}

botonInicio.addEventListener('click', () => {
  video.play()
  tiempoActual = setInterval(() => {
    const tiempoActualEnSegundos = video.currentTime;
    const tiempoActualFormateado = segundosAMinutosYSegundos(tiempoActualEnSegundos);
    tiempoVideo.textContent = `Tiempo actual: ${tiempoActualFormateado}`;
  }, 1000);
});


botonPause.addEventListener('click', () => {
  video.pause()
  clearInterval(tiempoActual)
});

/*PUZZLE*/

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  if (arreglo[parseInt(ev.target.id)] == "") {
    var data = ev.dataTransfer.getData("text");
    arreglo[parseInt(ev.target.id)] = data;
    ev.target.appendChild(document.getElementById(data))

    const cuadro = ev.target;
    const hiddenP = cuadro.querySelector(".arrastre")
    if (hiddenP) {
      hiddenP.style.display = "none";
    }
    checkPuzzleCompletion()
  }




  function checkPuzzleCompletion() {
    if (arreglo[0] != "" && arreglo[1] != "" && arreglo[2] != "") {
      if (arreglo[0] == "pieza3" && arreglo[1] == "pieza2" && arreglo[2] == "pieza1") {
        document.querySelector("h3").innerHTML = "Lo realizaste correctamente!!"
      } else {
        document.querySelector("h3").innerHTML = "Lo realizaste incorrectamente,intente nuevamente!!"
      }
    } 
}
}

function buttonReload() {
  window.location.reload()
}