
const AhorcadoImagen = document.querySelector(".hangman-box img");
const teclado = document.querySelector(".teclado");
const wordDisplay = document.querySelector(".wordDisplay");
const gameModal = document.querySelector(".gameModal");
let currentWord, wrongGuessCount, letrasCorrectas;
var playAgain = document.querySelector('.playAgain')

const maxGuesses=6;

const palabras=[
    {palabra:'arbol'},

    {palabra:'concierto'},

    {palabra:'pizarra'},

    {palabra:'computadora'},

    {palabra:'lampara'},


    {palabra:'pelicula'},


    {palabra:'ornitorrinco'},


    {palabra:'otorrinolaringologo'},


    {palabra:'marcadore'},

    {palabra:'mister'},
]

const resetearJuego = () => {
    letrasCorrectas = [];
    wrongGuessCount = 0;
    AhorcadoImagen.src = `images/hangman-0.svg`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letra"></li>`).join("");
    teclado.querySelectorAll("button").forEach(btn =>  btn.disabled = false);
    gameModal.classList.remove("show");
}

 
function palabraRandom() {
    const {palabra} = palabras[Math.floor(Math.random()*palabras.length)];
    currentWord = palabra;
    console.log(palabra);
    resetearJuego()
}

const gameOver = (Victoria) => {
    setTimeout(()=>{
        const modalText = Victoria ? `Acertaste la palabra: ` : `La palabra correcta era: `
        gameModal.querySelector('img').src = `images/${Victoria ? 'victory' : 'lost'}.gif`
        gameModal.querySelector('h4').innerText = `${Victoria ? 'Felicidades' : 'It`s over...'}`
        gameModal.querySelector('p').innerHTML = `${modalText} <b>${currentWord}</b>`
        gameModal.classList.add("show");
    }, 300)
}

const initGame = (button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)){
        [...currentWord].forEach((letra, index) => {
            if(letra === clickedLetter){
                letrasCorrectas.push(letra);
                wordDisplay.querySelectorAll('li')[index].innerText = letra;
                wordDisplay.querySelectorAll('li')[index].classList.add("adivinada");
            }
        });
    }else{
        wrongGuessCount++;
        AhorcadoImagen.src = `images/hangman-${wrongGuessCount}.svg`;

    }
   button.disabled= true

   if (wrongGuessCount === maxGuesses) return gameOver(false);
   if (letrasCorrectas.length === currentWord.length) return gameOver(true);
}

for (let i = 97; i <= 122; i++) {
    const boton = document.createElement('button');
    boton.innerText = String.fromCharCode(i)
    teclado.appendChild(boton);
    boton.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)))

}

palabraRandom();
