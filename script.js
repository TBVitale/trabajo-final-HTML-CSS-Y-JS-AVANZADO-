let video=document.querySelector('video');
let tiempoActual;

let botonInicio= document.querySelector("#play");
let botonPause= document.querySelector("#pause");

botonInicio.addEventListener('click',()=>{
    video.play()
    tiempoActual=setInterval(()=>{
        console.log(video.currentTime);

    },1000);
});

botonPause.addEventListener('click',()=>{
    video.pause()
    clearInterval(tiempoActual)
});