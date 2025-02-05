window.addEventListener('load', function(){
    document.getElementById("cantantes").addEventListener('click', () => descpCantantes());
    document.getElementById("actores").addEventListener('click', () => descpActores());
    document.getElementById("ficticios").addEventListener('click', () => descpFicticios());
    var descripcion = document.querySelector('#descripcion') ;
    var resultado = document.querySelector("#resultado");

        const cantantes =[
            {personaje: 'Billie Eilish',
                descripcion: "Cantante pop, caracterizada por su versatilidad en voz y letras, ha ganado varios premios Grammy y es la artista mas joven en tener 2 oscars"},
        
            {personaje: "Tyler, The Creator",
                descripcion: "Cantante de rap y productor, ha ganado un premio Grammy, conocido por su estilo unico, letras profundas, y por interpretar sentimientos como alter ego's de el mismo en sus grabaciones"},
        
            {personaje: "Sabrina Carpenter",
                descripcion: "Cantante pop, actriz y compositora, conocida principalmente por tener papeles en disney channel y sus liricas de lujuria y amor"},
        
            {personaje: "Taylor Swift",
                descripcion: "Cantante y compositora, es conocida por sus letras de amor y desamor, versatilidad en el genero musical, empezando por country, adentrandose en el pop y finalmente por el folk"},

           {personaje: 'Rauw Alejandro',
                descripcion: "Cantante Puerto Riqueño, conocido por su estilo de reggaeton y trap, ha colaborado con artistas como Anuel AA, Farruko, y J Balvin, Pertenece a la «nueva generación» de artistas y su album debut fue en 2020"},
        
            {personaje: "Alvaro Diaz",
                descripcion: "Cantante de trap y genero urbano, conocido por su estilo de letras profundas, discografia tematica, buscando crear conexiones con el oyente, sus letras, y la tematica del album. Se dice que es el puertoriqueño mas venezolano"},
        
            {personaje: "Bad Bunny",
                descripcion: "Cantante de trap y reggaeton, conocido por su estilo de letras explicitas, su estilo de vestir, y su colaboracion con artistas de la talla de J Balvin, Anuel AA, y Daddy Yankee, ha ganado varios premios Grammy, y se considera el numero uno de PR"},
        
            {personaje: "Rosalia",
                descripcion: "Cantante de flamenco y reggaeton, conocida por su estilo de fusion de generos, letras en español y catalan, y su estilo de vestir, ha colaborado con artistas como Travis Scott, Ozuna, Billie eilish, y J Balvin , ha ganado varios premios Grammy como mejor album latino alternativo"}, 

            {personaje: "Harry Styles",
                descripcion: "antantez pop, conocido por su expresion artistica, letras de amor y desamor, y su estilo de fusion de generos, ha ganado varios premios Grammy, y es conocido por ser parte de la banda One Direction"},
        
            {personaje: "Ariana Grande",
                descripcion: "Cantante pop, conocida por su alto nivel vocal y lirico, ha ganado varios premios Grammy, mas conocida por su musica, pero tambien ha tenido papeles en series de television y peliculas"}, 
        ]
        const actores = [
            {personaje: "Jacob Elordi",
            descripcion: "Actor Australiano, conocido por su papel en la serie de netflix 'The Kissing Booth', y por su papel en la serie de HBO 'Euphoria', ha ganado varios premios por su actuacion"},
        
            {personaje: "Zendaya",
            descripcion: "Actriz y cantante, conocida por su papel en la serie de disney channel 'Shake it up', y por su papel en la serie de HBO 'Euphoria', ha ganado varios premios por su actuacion, y es la actriz mas joven en ganar un premio Emmy"},
        
            {personaje: "Emma Watson",
            descripcion: "Actriz Britanica, conocida por su papel en la serie de peliculas de 'Harry Potter', y por su papel en la pelicula 'Las ventajas de ser invisible', ha ganado varios premios, y es conocida por su activismo en la igualdad de genero"},
        
            {personaje: "Rachel MacAdams",
            descripcion: "Actriz Canadiense, conocida por su papel en la pelicula 'Diario de una pasion', conocida como una mean girl, siendo nominada al oscar"},

            {personaje: "Jennifer Aniston",
            descripcion: "Actriz y productora de cine, conocida por su papel en la serie de television 'Friends', y por su papel en la serie de television 'The Morning Show', ha ganado varios premios por su actuacion"},
        
            {personaje: "Zendaya",
            descripcion: "Actriz y cantante, conocida por su papel en la serie de disney channel 'Shake it up', y por su papel en la serie de HBO 'Euphoria', ha ganado varios premios por su actuacion, y es la actriz mas joven en ganar un premio Emmy"},
        
            {personaje: "Ryan Gosling",
            descripcion: "Actor Canadiense, y por su papel en la pelicula 'Drive', nominado al oscar, conocido por su carisma y talento"},
        
            {personaje: "Adam Sandler",
            descripcion: "Actor y comediante, conocido por su papel en la pelicula 'Click', y por su papel en la pelicula 'Uncut Gems', nominado al oscar, conocido por su estilo de comedia y actuacion"},

            {personaje: "Cilian Murphy",
            descripcion: "Actor Irlandes, conocido por su papel en la serie de television 'Peaky Blinders', y por su papel en la pelicula 'El origen', nominado al oscar, conocido por su talento y versatilidad"},
        
            {personaje: "Emma Stone",
            descripcion: "Actriz y actriz de voz, por su papel en la pelicula 'Birdman', dos veces ganadora del oscar a mejor actriz, conocida por su talento y belleza"},
        
        ]
        const ficticios = [
            {personaje: "Harry Potter",
            descripcion: "Protagonista de serie de libros y peliculas de fantasia, mago, 'El niño que vivio'"},
        
            {personaje: "Kang Sae Byeok",
            descripcion: "Personaje de squids games, finalista, muerte injusta"},
        
            {personaje: "Katniss Everdeen",
            descripcion: "Protagonista de la serie de libros y peliculas, arquera, lider, historia distopica"},
        
            {personaje: "Spiderman",
            descripcion: "Superheroe, poder de insecto, inteligente, amistoso, vecino de todos"},

            {personaje: "Jake El Perro",
            descripcion: "Protagonista de una serie de Cartoon Network, perro, buen consejero"},
        
            {personaje: "Satoru Gojo ",
            descripcion: "Personaje de Anime, Maestro, hechicero mas poderoso de la tierra, ojos vendados"},
        
            {personaje: "Mal",
            descripcion: "Princesa de Disney, Rubia, curiosa, valiente, aventurera, hija del sol"},
        
            {personaje: "Rapunzel",
            descripcion: "Superheroe, poder de insecto, inteligente, amistoso, vecino de todos"},

            {personaje: "Bart Simpson",
            descripcion: "Personaje de serie de television, travieso, bromista, hijo mayor, amarillo"},
        
            {personaje: "Doki",
            descripcion: "Personaje de serie de television, perro, aventurero, explorador, curioso"},
        ]
        

    function descpCantantes(){
        var numRan = Math.floor(Math.random()*10);
            descripcion.innerHTML ="";
            var descp = document.createElement('p');
            descp.textContent = cantantes[numRan].descripcion;
            descripcion.appendChild(descp);

            var resp = document.querySelector("#resp");
        
            resp.addEventListener('submit', ()=>{

                var respuesta = document.querySelector("#respuesta").value;

                    if(respuesta.trim()==null || respuesta.trim().length==0 || !isNaN(respuesta)) {
                        document.querySelector('#error_respuesta').innerHTML="Error, intenta otra vez";
                        document.querySelector('#error_respuesta').style.color ="red";
                        return false
                    }else{
                        document.querySelector('#error_respuesta').style.display="none";
                        if(respuesta==cantantes[numRan].personaje){
                            resultado.innerHTML="";
                            var resul= document.createElement('p');
                            resul.textContent = "Felicidades, acertaste!!!";
                            resultado.appendChild(resul);
                        }else{
                            resultado.innerHTML="";
                            var resul= document.createElement('p');
                            resul.textContent = "que mala suerte...El cantante era: "+cantantes[numRan].personaje;
                            resultado.appendChild(resul);
                        }
                    } 

                    
            })
    
    }

    function descpActores(){
        var numRan = Math.floor(Math.random()*10);
            descripcion.innerHTML ="";
            var descp = document.createElement('p');
            descp.textContent = actores[numRan].descripcion;
            descripcion.appendChild(descp);

            var resp = document.querySelector("#resp");
        
            resp.addEventListener('submit', ()=>{

                var respuesta = document.querySelector("#respuesta").value;
                
                if(respuesta.trim()==null || respuesta.trim().length==0 || !isNaN(respuesta)) {
                    document.querySelector('#error_respuesta').innerHTML="Error, intenta otra vez";
                    document.querySelector('#error_respuesta').style.color ="red";
                    return false
                }else{
                    document.querySelector('#error_respuesta').style.display="none";
                    if(respuesta==actores[numRan].personaje){
                        resultado.innerHTML="";
                        var resul= document.createElement('p');
                        resul.textContent = "Felicidades, acertaste!!!";
                        resultado.appendChild(resul);
                    }else{
                        resultado.innerHTML="";
                        var resul= document.createElement('p');
                        resul.textContent = "que mala suerte...El actor o la actriz era: "+actores[numRan].personaje;
                        resultado.appendChild(resul);
                    }
                }
            })
    
    }

    function descpFicticios(){
        var numRan = Math.floor(Math.random()*10);
            descripcion.innerHTML ="";
            var descp = document.createElement('p');
            descp.textContent = ficticios[numRan].descripcion;
            descripcion.appendChild(descp);

            var resp = document.querySelector("#resp");
        
            resp.addEventListener('submit', ()=>{

                var respuesta = document.querySelector("#respuesta").value;

                    if(respuesta.trim()==null || respuesta.trim().length==0 || !isNaN(respuesta)) {
                        document.querySelector('#error_respuesta').innerHTML="Error, intenta otra vez";
                        document.querySelector('#error_respuesta').style.color ="red";
                        return false
                    }else{
                        document.querySelector('#error_respuesta').style.display="none";
                    } 

                    if(respuesta==ficticios[numRan].personaje){
                        resultado.innerHTML="";
                        var resul= document.createElement('p');
                        resul.textContent = "Felicidades, acertaste!!!";
                        resultado.appendChild(resul);
                    }
                    if (respuesta!==ficticios[numRan].personaje){
                        resultado.innerHTML="";
                        var resul= document.createElement('p');
                        resul.textContent = "que mala suerte...El personaje era: "+ficticios[numRan].personaje;
                        resultado.appendChild(resul);
                    }
            })
    
    }
})        
