'use strict'
document.getElementById("submit").addEventListener("click", () => platillo(plato, aderezo))
    
    const opcion1 =[ "Frijoles Corazon", "Pan de cueva", "Fruta extraña", "Cheddar extremadamente afilado", "Gamba"];
    const opcion2 =["Marinara Rica", "Crema de Setas", "Strope de Cereza", "Ajo picante", "Salsa incodamente caliente"];
    const comidas =["N/A", "Mousse Terrestre", "Pastel de Frijoles dulce", "Cacerola de caverna calavera", "Tacos Picantes", "Chili de Montaña", "N/A", "Pastel de Cristal", "Kebab de cueva", "Tronco caliente", "Enslada Agria", "Pastel Supercomida", "N/A", "Smoothie guerrero", "Piel de fruta arrugada", "Pizza Calico", "Setas rellenas", "Quesadilla de elfo", "N/A", "Nachos del desierto", "Cloppino", "Gamba del bosque", "Donut de Gamba", "Olor del mar", "Gumbo del Desierto"];

    var plato
    var aderezo

   var Frijoles = document.getElementById("plato1");
   Frijoles.addEventListener("click", function(){
        plato=0;
        console.log(plato);
   })

   var Pan = document.getElementById("plato2");
   Pan.addEventListener("click", function(){
        plato=1;
        console.log(plato);
   })

   var Marinara = document.getElementById("ade1");
   Marinara.addEventListener("click", function(){
        aderezo=0;
        console.log(aderezo);
   })

   var Crema = document.getElementById("ade2");
   Crema.addEventListener("click", function(){
        aderezo=1;
        console.log(aderezo);
   })

   

   function platillo(plato, aderezo){
    var C=0;
    console.log(plato, aderezo)
    for(let i = 0; opcion1.length; i++){
        for(let j = 0; opcion2.length; j++){
            if(plato==i && aderezo==j){
                console.log(comidas[C]);
            }else{
                C++;
            }
        }  
    }
    C=0;
   }
   


    