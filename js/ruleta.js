'use strict'

/*Ruleta*/
document.getElementById("sortear").addEventListener("click", () => sortear())
const ruleta = document.getElementById("ruleta");
let resultado="";
const root=document.documentElement;
let sorteando = false;
const resultadoTexto = document.getElementById("resultadoTexto");
const resApuesta = document.getElementById("resultado");

var cantidadDoblada;

const si={
    nombre: 'GANASTEEEE!!!¡!¡!',
    probabilidad: 12.5
}
const no={
    nombre: 'perdiste ;(',
    probabilidad: 12.5
}

const colores=[
    "#8E1616","#1D1616","#8E1616","#1D1616","#8E1616","#1D1616","#8E1616","#1D1616",
]

let conceptos = [si, no, si, no,si, no, si, no];

window.addEventListener('load',function(){
    var apuesta = document.querySelector("#apuesta");

    apuesta.addEventListener('submit',function(){

    var cantidad = document.querySelector('#cantidad').value;
    

    if (cantidad==null || cantidad<=0 || isNaN(cantidad)){
        document.querySelector('#error_cantidad').innerHTML="La cantidad es incorrecta"
        document.querySelector('#error_cantidad').style.color ="red";
        return false;
    }else{
        document.querySelector('#error_cantidad').style.display="none";
         cantidadDoblada = cantidad*2;
    }
    
})
})

function ajustarRuleta(){
   const opcionesContainer = document.createElement("div");
   opcionesContainer.id = "opcionesContainer"
   ruleta.appendChild(opcionesContainer);
   let probabilidadAcumulada = 0;
   conceptos.forEach((concepto, i) =>{
    //crear los colores
    const opcionElement = document.createElement("div");
    opcionElement.classList.add("opcion");
    opcionesContainer.appendChild(opcionElement);
    opcionElement.style=`
    background-color: ${colores[i]};
    transform:rotate(${probabilidadGrados(probabilidadAcumulada)}deg);
    ${getPosicionProbabilidad(concepto.probabilidad)}
`
    probabilidadAcumulada += concepto.probabilidad;

    const separador = document.createElement("div");
    separador.classList.add("separador")
    ruleta.appendChild(separador);
    separador.style=`
    transform:rotate(${probabilidadGrados(probabilidadAcumulada)}deg);`
   })
}



function getPosicionProbabilidad(probabilidad){
    if(probabilidad>=12.5){
        
    const y3 = (0.5 - (0.5/ Math.tan(probabilidadARadianes(probabilidad))))*100;
	return `clip-path: polygon(50% 0, 100% 0, 100% ${y3}%, 50% 50%)`
} 

}

function sortear(){
    if (sorteando) return;
    sorteando=true;
   var nSorteo = Math.random();
    let pAcumulada=0;
    ruleta.classList.toggle("girar",true);
    conceptos.forEach(concepto =>{
       if(nSorteo*100 > pAcumulada && nSorteo*100 < pAcumulada+concepto.probabilidad){
            resultado = concepto.nombre
            //console.log("jugador", nSorteo*100, concepto.nombre, "porque esta entre", pAcumulada, "y", pAcumulada+concepto.probabilidad)
       }
       pAcumulada += concepto.probabilidad;
    })
    const giroRuleta = 10*360 + (1-nSorteo)*360;
    root.style.setProperty("--giroRuleta",giroRuleta+"deg");

}

ruleta.addEventListener("animationend", ()=>{

    ruleta.style.transform = "rotate("+getCurrentRotation(ruleta)+"deg)";
    sorteando=false;
    ruleta.classList.toggle("girar", false);
    resultadoTexto.textContent = resultado;
    if(resultado=='GANASTEEEE!!!¡!¡!'){
        resApuesta.textContent = cantidadDoblada;
    }else{
        resApuesta.textContent = 0;
    }

    console.log(resApuesta)
})

ajustarRuleta();

/*Fin Ruleta*/
