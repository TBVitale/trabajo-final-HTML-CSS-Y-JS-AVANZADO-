let video=document.querySelector('video');
let tiempoActual;
let botonInicio= document.querySelector("#play");
let botonPause= document.querySelector("#pause");
let tiempoVideo = document.querySelector(".duracion-video");

function segundosAMinutosYSegundos(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = Math.floor(segundos % 60);
    return `${minutos}:${segundosRestantes}`;
  }

botonInicio.addEventListener('click',()=>{
    video.play()
    tiempoActual=setInterval(()=>{
    const tiempoActualEnSegundos = video.currentTime;
    const tiempoActualFormateado = segundosAMinutosYSegundos(tiempoActualEnSegundos);
    tiempoVideo.textContent = `Tiempo actual: ${tiempoActualFormateado}`;
  }, 1000);
});

botonPause.addEventListener('click',()=>{
    video.pause()
    clearInterval(tiempoActual)
});