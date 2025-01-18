/*Ruleta*/
//https://bennettfeely.com/clippy/

const ruleta = document.getElementById("ruleta");

document.getElementById("sortear").addEventListener("click", () => sortear())
let resultado="";
const si={
    nombre: 'ganar',
    probabilidad: 12.5
}
const no={
    nombre: 'perder',
    probabilidad: 12.5
}

const colores=[
    "#22577A", "#57CC99","#22577A", "#57CC99","#22577A", "#57CC99","#22577A", "#57CC99"
]

let conceptos = [si, no, si, no,si, no, si, no];

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
    nSorteo = Math.random();
    let pAcumulada=0;
    conceptos.forEach(concepto =>{
       if(nSorteo*100 > pAcumulada && nSorteo*100 < pAcumulada+concepto.probabilidad){
            resultado = concepto.nombre
            console.log("jugador", nSorteo*100, concepto.nombre, "porque esta entre", pAcumulada, "y", pAcumulada+concepto.probabilidad)
       }
       pAcumulada += concepto.probabilidad;
    })
}


ajustarRuleta();

/*Fin Ruleta*/