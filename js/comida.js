'use strict'
document.getElementById("submit").addEventListener("click", () => mostrarPlatillo(plato, aderezo));
let fotoPlatillo = document.getElementById('foto')
    
    const opcion2 =["Marinara Rica", "Crema de Setas", "Strope de Cereza", "Ajo picante", "Salsa incodamente caliente"];
    const comidas =["N/A", "Mousse Terrestre", "Pastel de Frijoles dulce", "Cacerola de caverna calavera", "Tacos Picantes", "Chili de Montaña", "N/A", "Pastel de Cristal", "Kebab de cueva", "Tronco caliente", "Enslada Agria", "Pastel Supercomida", "N/A", "Smoothie guerrero", "Piel de fruta arrugada", "Pizza Calico", "Setas rellenas", "Quesadilla de elfo", "N/A", "Nachos del desierto", "Cloppino", "Gamba del bosque", "Donut de Gamba", "Olor del mar", "Gumbo del Desierto"]

    const imagen=['/images/nada.jpg','/images/mousse.png', '/images/frijoles dulce.jpg', '/images/cacerola.png', '/images/taco.png', '/images/chili.avif', '/images/nada.jpg', '/images/cristal.png', '/images/kebab.png','/images/tronco.png', '/images/ensalada.png','/images/supercomida.png','/images/nada.jpg','/images/batido.png','/images/papa.png','/images/pizza.png','/images/setas.png','/images/quesadilla.png','/images/nada.jpg','/images/nachos.png','/images/Cioppino.png','/images/gamba.png','/images/dona.png','/images/mar.png','/images/gumbo.png']
    var plato
    var aderezo

    document.getElementById("plato1").addEventListener("click", function(){
        plato=0;
   })

    document.getElementById("plato2").addEventListener("click", function(){
        plato=1;

   })

   document.getElementById("plato3").addEventListener("click", function(){
        plato=2;
    })

    document.getElementById("plato4").addEventListener("click", function(){
        plato=3;

    })
    document.getElementById("plato5").addEventListener("click", function(){
        plato=4;

    })



    document.getElementById("ade1").addEventListener("click", function(){
        aderezo=0;
   })

    document.getElementById("ade2").addEventListener("click", function(){
        aderezo=1;
   })

   document.getElementById("ade3").addEventListener("click", function(){
        aderezo=2;
    })

    document.getElementById("ade4").addEventListener("click", function(){
        aderezo=3;
    })

    document.getElementById("ade5").addEventListener("click", function(){
        aderezo=4;
    })

// Función para mostrar el platillo
    function mostrarPlatillo(plato, aderezo) {
    const indiceComida = plato * opcion2.length + aderezo;
    if(comidas[indiceComida]!=="N/A"){
        document.getElementById("platillo").textContent = comidas[indiceComida];
    }else{
        document.getElementById("platillo").textContent = "Que malos gustos.... desaparezca de mi vista...."
    }

    if(fotoPlatillo){
        fotoPlatillo.innerHTML="";
        let img = document.createElement('img');
        img.setAttribute('class','foto');
        img.setAttribute('src', imagen[indiceComida]);
        fotoPlatillo.appendChild(img);
    }
}
   


    