const cartas = document.querySelectorAll(".carta");
const audio = document.getElementById("audioInvocacion");
const titulo = document.getElementById("titulo");
const decoraciones = document.getElementById("decoraciones");
const mensajeFinal = document.getElementById("mensajeFinal");

const emojis = ["❤️","💖","💜","🎉","🎂","✨"];

function crearEmojis(){

decoraciones.innerHTML="";

for(let i=0;i<30;i++){

let emoji=document.createElement("span");

emoji.classList.add("emoji");

emoji.innerText=emojis[Math.floor(Math.random()*emojis.length)];

emoji.style.left=Math.random()*100+"%";

/* tamaño aleatorio */

emoji.style.fontSize=(50+Math.random()*120)+"px";

/* duración aleatoria */

emoji.style.animationDuration=(4+Math.random()*4)+"s";

/* delay */

emoji.style.animationDelay=Math.random()*2+"s";

decoraciones.appendChild(emoji);

}

}

function invocarKuriboh(){

audio.currentTime=0;
audio.play();

/* voltear TODAS las cartas */

cartas.forEach(carta=>{
carta.classList.toggle("volteada");
});

/* verificamos la primera carta */

if(cartas[0].classList.contains("volteada")){

    efectoMaquina("🎉 Feliz Cumpleaños Mi María Teresa ❤️", titulo);
    
    setTimeout(()=>{
    efectoMaquina("08-Marzo-2026\nTe amo mi Cherby 👩🏻‍❤️‍👨🏻🧸☣️", mensajeFinal, 90);
    },2500);
    
    decoraciones.classList.add("activo");
    
    crearEmojis();
    
    }else{

        titulo.innerHTML = "Invocando a Kuriboh 👹💥(Dale click...😜)";

        mensajeFinal.innerHTML = "";
        
        decoraciones.classList.remove("activo");
        
        decoraciones.innerHTML = "";
}

}

function efectoMaquina(texto, elemento, velocidad = 80){

elemento.innerHTML = "";
let i = 0;

function escribir(){

if(i < texto.length){
elemento.innerHTML += texto.charAt(i);
i++;
setTimeout(escribir, velocidad);
}

}

escribir();

}

/* eventos para todas las cartas */

cartas.forEach(carta=>{
carta.addEventListener("click",invocarKuriboh);
carta.addEventListener("touchstart",invocarKuriboh);
});