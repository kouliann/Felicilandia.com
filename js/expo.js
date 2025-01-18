'user strict';
// Get all images
var imgs = document.querySelectorAll('.myImg');

// Iterate through all images
imgs.forEach(function (img) {
    img.onclick = function(){
        // Find the closest modal parent element
        var modal = this.nextElementSibling;
        var modalImg = modal.querySelector(".modal-content");
        var captionText = modal.querySelector(".caption");

        // Display the modal and update its content
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;

        // Close the modal when the user clicks on <span> (x)
        var span = modal.querySelector('.close');
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
});

/* Variables y objetos*/

const dibujos=[
    {id: 1, nombre: ' Ocaso en el fin del mundo' },
    {id: 2, nombre: ' Edward y Alphonse'},
    {id: 3, nombre: ' Emily Galaviz'},
    {id: 4, nombre: ' Roberto Carlos'},
    {id: 5, nombre: ' The Last flame'},
    {id: 6, nombre: ' Sagitario'},
    {id: 7, nombre: ' La Última Flor'},
    {id: 8, nombre: ' Koi Ascendente'},
    {id: 9, nombre: ' Eren'},
    {id: 10, nombre: ' Tontos y Minecraft'},
]

const artesanias=[
    {id: 1, nombre: ' Panal porta inciensa' },
    {id: 2, nombre: ' Nacimiento en Miniatura'},
    {id: 3, nombre: ' Piedras simulando lienzos'},
    {id: 4, nombre: ' Caracoles Servidoss'},
    {id: 5, nombre: ' Equilibrio y Estabilidad'},
    {id: 6, nombre: ' Mortero'},
    {id: 7, nombre: ' Animales de Piedra'},
    {id: 8, nombre: ' Los Morros'},
    {id: 9, nombre: ' Frutas'},
    {id: 10, nombre: ' Utensilios de Cocina'},
]

const pinturas=[
    {id: 1, nombre: ' Kois' },
    {id: 2, nombre: ' Chica y una Taza'},
    {id: 3, nombre: ' Estudio'},
    {id: 4, nombre: ' Flores de Estres'},
    {id: 5, nombre: ' Sighing reflex'},
    {id: 6, nombre: ' Wake up and Call me what you like'},
    {id: 7, nombre: ' Covid y confinamiento'},
    {id: 8, nombre: ' Baile de fantasia'},
    {id: 9, nombre: ' Carmen Miranda'},
    {id: 10, nombre: ' Pecado Manchar'},
]

const votosdibu=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const dib=dibujos.map(function(dibujos){
    return `Id: ${dibujos.id}. Nombre:${dibujos.nombre} \n`
})

const votosartu=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const artu=artesanias.map(function(artesanias){
    return `Id: ${artesanias.id}. Nombre:${artesanias.nombre} \n`;
})

const votospintu=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const pintu=pinturas.map(function(pinturas){
    return `Id: ${pinturas.id}. Nombre:${pinturas.nombre} \n`
})

/*Fin*/

function calificardibujos() {
    if (confirm("Presiona aceptar para votar por tu obra favorita!")){
       voto=parseInt(prompt(dib));
       while(voto<1 || voto>10){
        alert(`Error, vuelva a intentarlo`);
        voto=parseInt(prompt(dib));
       }
        estrellas=parseInt(prompt(`ingrese la cantidad de estrellas que le dara a la obra`));
       while(estrellas<1 || estrellas>5){
        alert(`Error, vuelva a intentarlo`);
        estrellas=parseInt(prompt(`ingrese la cantidad de estrellas que le dara a la obra`));
       }
       votosdibu[voto]= (votosdibu[voto]+estrellas)/5;
       alert(`¡Gracias por tu voto!, el autor lo agradecera muchisimo <3`);
       


    }
}

function calificarartesanias() {
    if (confirm("Presiona aceptar para votar por tu obra favorita!")){
       voto=parseInt(prompt(artu));
       while(voto<1 || voto>10){
        alert(`Error, vuelva a intentarlo`);
        voto=parseInt(prompt(artu));
       }
        estrellas=parseInt(prompt(`ingrese la cantidad de estrellas que le dara a la obra`));
       while(estrellas<1 || estrellas>5){
        alert(`Error, vuelva a intentarlo`);
        estrellas=parseInt(prompt(`ingrese la cantidad de estrellas que le dara a la obra`));
       }
       votosartu[voto]= (votosartu[voto]+estrellas)/5;
       alert(`¡Gracias por tu voto!, el autor lo agradecera muchisimo <3`);
       


    }
}

function calificarpinturas() {
    if (confirm("Presiona aceptar para votar por tu obra favorita!")){
       voto=parseInt(prompt(pintu));
       while(voto<1 || voto>10){
        alert(`Error, vuelva a intentarlo`);
        voto=parseInt(prompt(pintu));
       }
        estrellas=parseInt(prompt(`ingrese la cantidad de estrellas que le dara a la obra`));
       while(estrellas<1 || estrellas>5){
        alert(`Error, vuelva a intentarlo`);
        estrellas=parseInt(prompt(`ingrese la cantidad de estrellas que le dara a la obra`));
       }
       votospintu[voto]= (votosdibu[voto]+estrellas)/5;
       alert(`¡Gracias por tu voto!, el autor lo agradecera muchisimo <3`);
       


    }
}


