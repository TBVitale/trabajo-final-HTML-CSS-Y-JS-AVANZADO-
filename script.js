
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
    }
  }

  function buttonReload() {
    window.location.reload()
  }