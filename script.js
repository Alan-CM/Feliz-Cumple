const cartas = document.querySelectorAll(".carta");
const audio = document.getElementById("audioInvocacion");
const titulo = document.getElementById("titulo");
const decoraciones = document.getElementById("decoraciones");
const mensajeFinal = document.getElementById("mensajeFinal");

const emojis = ["❤️","💖","💜","🎉","🎂","✨"];
let clickActivo = false; // evita doble disparo touch+click

function crearEmojis(){
    decoraciones.innerHTML="";
    for(let i=0;i<30;i++){
        let emoji=document.createElement("span");
        emoji.classList.add("emoji");
        emoji.innerText=emojis[Math.floor(Math.random()*emojis.length)];
        emoji.style.left=Math.random()*100+"%";
        emoji.style.fontSize=(50+Math.random()*120)+"px";
        emoji.style.animationDuration=(4+Math.random()*4)+"s";
        emoji.style.animationDelay=Math.random()*2+"s";
        decoraciones.appendChild(emoji);
    }
}

function efectoMaquina(texto, elemento, velocidad = 80, callback = null){
    elemento.innerHTML = "";
    let i = 0;
    function escribir(){
        if(i < texto.length){
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        } else if(callback){
            callback();
        }
    }
    escribir();
}

function invocarKuriboh(e){
    if(clickActivo) return;
    clickActivo = true;

    audio.currentTime = 0;
    audio.play();

    cartas.forEach(carta => carta.classList.toggle("volteada"));

    if(cartas[0].classList.contains("volteada")){
        efectoMaquina("🎉 Feliz Cumpleaños Mi María Teresa ❤️", titulo);

        setTimeout(()=>{
            efectoMaquina(
                "08-Marzo-2026\nTe amo mi Cherby 👩🏻‍❤️‍👨🏻🧸☣️", 
                mensajeFinal, 
                90,
                () => {
                    // efecto de brillo y temblor
                    cartas[0].classList.add("brillo","temblar");
                    clickActivo = false; // desbloquea click
                }
            );
        }, 2500);

        decoraciones.classList.add("activo");
        crearEmojis();

    } else {
        titulo.innerHTML = "Invocando a Kuriboh 👹💥(Dale click...😜)";
        mensajeFinal.innerHTML = "";
        decoraciones.classList.remove("activo");
        decoraciones.innerHTML = "";
        cartas.forEach(c=>c.classList.remove("brillo","temblar"));
        clickActivo = false;
    }
}

cartas.forEach(carta=>{
    carta.addEventListener("click", invocarKuriboh);
    carta.addEventListener("touchstart", invocarKuriboh);
});