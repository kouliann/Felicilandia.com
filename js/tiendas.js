'use strict'
window.addEventListener('load', function(){

var ver = document.querySelector ("#ver");
var ulIds = document.querySelector("#ids");
var ulTien = document.querySelector("#tiendas");
var titu = document.querySelector ("#titulo");
var desc = document.querySelector("#descripcion")
var ulProd = document.querySelector ("#productos");
var ulPrec = document.querySelector("#precio");
var ulStock = document.querySelector("#stock");


const contenidoTiendas =[
    {id:0,
    nombre: "Quesera y Asociados",
    producto: ["queso pequeño", "queso medianoo", "queso grande"],
    descripcion:"Tienda de peluches de diferentes tamaños y colores, ideales para regalar a esa persona especial.",
    precio: [1.5, 2.5, 3],
    stock: [10, 10, 10]},

    {id:1,
    nombre: "Pepito Fruteria & More",
    producto: ["Zanahoria", "Manzana", "Sandia"],
    descripcion:"Frutas y verduras frescas, ideales para una alimentación saludable y balanceada.",
    precio: [1.5, 2.5, 3],
    stock:[100, 100, 100,] },

    {id:2,
    nombre: "Zapaterias Calzadeo",
    producto: ["Air Force 1", "Jordan Retro4", "New Balance 550", "Converse Clasicas", "Adidas Forum", "Vans Old Skool", "Puma Suede", "Reebok Classic", "Fila Disruptor", "Nike Cortez" ],
    descripcion:"Zapatos de diferentes marcas y modelos, ideales para cualquier ocasión.",
    precio: [24, 35, 45, 55, 30, 40, 50, 60, 70, 25],
    stock: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]},

    {id:3,
    nombre: "Cosmetica Pepezasito",
    producto: ["Labial Rojo", "Labial Rosa", "Labial Morado", "Labial Naranja", "Pestañas Postizas", "Rubor", "Base", "Corrector", "Sombras", "Delineador"],
    descripcion:"Productos de belleza y cuidado personal, ideales para lucir radiante en cualquier ocasión.",
    precio: [1.5, 2.5, 3, 2, 5, 4, 6, 3, 4.5, 2.5],
    stock: [30, 30, 30, 30, 30,30, 30, 30, 30, 30]},

    {id:4,
    nombre: "Farmacia RSU (Resuelvase Usted Solo)",
    producto: ["Acetaminofen 500 mg", "Ibuprofeno 400 mg", "Omeprazol 20 mg", "Atamel 350 mg", "Advil 400 mg", "Acetaminofen 800 mg"],
    descripcion:"Medicamentos de venta libre, ideales para aliviar dolores leves y malestares comunes.",
    precio: [4, 6, 3, 4.5, 2.5, 6],
    stock: [15, 15, 15, 15, 15, 15]},
    
    {id:5,
    nombre: "Carniceria El Chuleton",
    producto: ["Costilla de Res", "Pechuga de Pollo", "Lomo de Res", "Chuleta de Cerdo", "Pescado"],
    descripcion:"Carnes frescas y de calidad, ideales para preparar deliciosos platillos en casa.",
    precio: [10, 8, 12, 6, 15],
    stock: [20, 20, 20, 20, 20]},

    {id:6,
    nombre: "Panaderia La Espiga",
    producto: ["Pan Frances", "Pan Integral", "Pan de Maiz", "Pan de Queso", "Pan de Jamon"],
    descripcion:"Pan fresco y recién horneado, ideales para acompañar tus comidas y desayunos.",
    precio: [1, 1.5, 2, 2.5, 3],
    stock: [50, 50, 50, 50, 50]},

    {id:7,
    nombre: "Ferreteria El Martillo",
    producto: ["Martillo", "Destornillador", "Taladro", "Sierra", "Clavos"],
    descripcion:"Herramientas y materiales de construcción, ideales para realizar reparaciones y mejoras en tu hogar.",
    precio: [5, 3, 10, 15, 1],
    stock: [10, 10, 10, 10, 10]},
    
    {id:8,
    nombre: "Papeleria El Lapiz",
    producto: ["Lapiz","Borrador","Cuaderno","Regla","Tijera","Pegamento","Marcadores","Plumones","Corrector","Papel"],
    descripcion:"Artículos de papelería y útiles escolares, ideales para estudiantes y oficinistas.",
    precio: [0.5, 1, 2, 1.5, 1.5, 1, 1.5, 2, 1, 1],
    stock: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20]},

    {id:9,
    nombre: "Libreria El Sabio",
    producto: ["Libro de Matematicas", "Libro de Español", "Libro de Ciencias", "Libro de Historia", "Libro de Ingles", "Constitución", "Codigo Civil", "Manual de Carreño"],
    descripcion: "Libros y manuales de diferentes temas, ideales para estudiantes y profesionales.",
    precio: [5, 3, 4, 2, 6, 1, 1, 1],
    stock: [10, 10, 10, 10, 10, 10, 10, 10]},
    
    {id:10,
    nombre: "Tienda de Ropa El Vestidor",
    producto: ["Blusa", "Pantalon", "Vestido", "Camisa", "Short", "Falda", "Traje de Baño", "Ropa Interior", "Medias", "Bufanda", "Gorras", "Lentes"],
    descripcion: "Ropa y accesorios de moda, ideales para lucir a la última tendencia en cualquier ocasión.",
    precio: [5, 10, 15, 8, 6, 7, 20, 3, 2, 4, 3, 5],
    stock: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15] },

    {id:11,
    nombre: "Tienda de Juguetes El Juguete Feliz",
    producto: ["Muñeca", "Carro", "Pelota", "Rompecabezas", "Juego de Mesa", "Peluche", "Figuras de Acción", "Pinturas", "Crayolas", "Libros para Colorear"],
    descripcion: "Juguetes y juegos para niños y niñas, ideales para regalar en cumpleaños y fechas especiales.",
    precio: [5, 10, 3, 4, 8, 7, 6, 2, 1, 1.5],
    stock: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20]},
    
    {id:12,
    nombre: "Tienda de Electrodomesticos El Electro",
    producto: ["Licuadora", "Cafetera", "Horno", "Microondas", "Refrigerador", "Lavadora", "Secadora", "Plancha", "Ventilador", "Aspiradora"],
    descripcion: "Electrodomésticos y aparatos electrónicos, ideales para equipar tu hogar y facilitar tus tareas diarias.",
    precio: [20, 15, 30, 25, 50, 40, 35, 10, 15, 20],
    stock: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]},
    
    {id:13,
    nombre: "Tienda de Mascotas El Perrito",
    producto: ["Comida para Perro", "Comida para Gato", "Juguetes para Perro", "Juguetes para Gato", "Correa", "Collar"],
    descripcion: "Alimentos y accesorios para mascotas, ideales para consentir a tu perro o gato.",
    precio: [10, 8, 5, 4, 3, 2],
    stock: [10, 10, 10, 10, 10, 10]},
        
    {id:14,
    nombre: "Chincho y maca",
    producto: ["Chinchorro tejido azul", "Hamaca tejida rojo", "Chinchorro con diseños de tigre", "Hamaca tejida con mariposas"],
    descripcion: "Chinchorros y hamacas pa parcharse.",
    precio: [15, 20, 15, 20],
    stock: [50, 50, 50, 50]},
    
    {id:15,
    nombre: "Tarot y magia",
    producto: ["Cuarzos", "Cartas del Tarot", "Incienso", "Collares protectores", "Atrapa Sueños", "Velas", "Pendulos", "Libros de magia", "Tirada pasado presente futuro", "Tirada de los 7 chakras"],
    descripcion: "Tienda de productos esotéricos y tarot.",
    precio: [6, 20, 3, 15, 20, 5, 10, 25, 10, 15],
    stock: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50]},
    
    {id:16,
    nombre: "Tasca Mañanera",
    producto: ["Ron Superior", "Sangria Mal Portada", "Vodka Bajo Cero", "Ponche crema casero", "Whisky Old Parr", "Cocuy de penca"],
    descripcion: "Tienda de licores para mirar la nebulosa.",
    precio: [7, 5, 6, 10, 7.5, 3],
    stock: [70, 70, 70, 70, 70, 70]},
      
    {id:17,
    nombre: "Bisuteria BBB",
    producto: ["Dije de los juegos del hambre", "Dije inspirado en Arcane", "Zarcillos de plata y oro", "Dijes de Harry Potter y Animales Fantásticos", "Anillos", "Collares, pulseras y tobilleras de hilo"],
    descripcion: "Tienda de bisutería de plata, oro y artesanales.",
    precio: [5.7, 5.5, 4.5, 3.5, 2.5, 1.5],
    stock: [60, 60, 60, 60, 60, 60]},

    {id:18,
    nombre: "Discos Recuperados",
    producto: ["Disco BRAT de Charli XCX", "La Noche Estrellada de Van Gogh", "Disco AM de Arctic Monkeys", "El Beso de Gustav Klimt", "Disco Cigarettes After Sex", "Disco Lover de Taylor Swift", "Impresión, sol naciente de Monet", "Disco Spiderman: Across the Spiderverse", "El Grito de Edvard Munch", "Personalizado"],
    descripcion: "Tienda de discos reutilizados y pintados a mano.",
    precio: [5, 10, 7, 10, 5, 7, 10, 8, 10, 15],
    stock: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]},

    {id:19,
    nombre: "Textos clásicos",
    producto: ["Cien años de soledad - Gabriel García Márquez", "Don Quijote de la Mancha - Miguel de Cervantes", "Comer, Rezar, Amar - Elizabeth Gilbert", "El Principito - Antoine de Saint-Exupéry", "El Alquimista - Paulo Coelho", "Orgullo y Prejuicio - Jane Austen", "El Señor de los Anillos - J.R.R. Tolkien", "Harry Potter y la Piedra Filosofal - J.K. Rowling", "Mujercitas - Louisa May Alcott", "La Biblia"],
    descripcion: "Tienda de textos clásicos y literatura universal.",
    precio: [35, 30, 20, 15, 25, 30, 35, 40, 25, 50],
    stock: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]},

    {id:20,
    nombre: "Papasalchi",
    producto: ["Combo 1 salchipapa pequeña", "Combo 1 salchipapa mediana", "Combo 1 salchipapa grande", "Combo 2 salchipapa medianas", "Combo 2 salchipapa grandes", "Combo 1 salchipapa grande y 1 refresco", "Combo 2 salchipapa grandes y 2 refrescos"],
    descripcion: "Tienda de salchipapas",
    precio: [2, 3.5, 5, 7, 10, 13, 15],
    stock: [100, 100, 100, 100, 100, 100, 100]},

    {id:21,
    nombre: "Papeleria del nunca jamas",
    producto: ["Pergamino", "Tinteros", "Pluma de Tinta", "Papel de colores y estampado de flores negras", "Pinceles", "Pintura acrilica", "Papel de arroz", "Lienzos con geso", "Arcilla", "Archiveros con kuromis"],
    descripcion: "Tienda de articulos de papeleria y arte",
    precio: [2, 3, 12, 0.60, 2, 1.6, 1.5, 10, 10, 15],
    stock: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]},

    {id:22,
    nombre: "Skin and care",
    producto: ["Pinturas de uñas", "Crema para la cara anti acne", "Protector solar facial", "Crema para el cuerpo", "Maquillaje ligero y especial para cuidar el acne"],
    descripcion: "Cuidado para la piel, maquillaje y pintura para estar linda y sana",
    precio: [2, 3, 4, 5, 4],
    stock: [100, 100, 100, 100, 100]},

    {id:23,
    nombre: "Pulsar-Z",
    producto: ["Reloj antiguo", "Cuadro de 1760", "Tuercas viejas", "Caja de musica", "Reloj de bolsillo", "Reloj de arena", "Llave antigua", "Cofre del tesoro"],
    descripcion: "Antiguedades y cosas raras como tu",
    precio: [20, 45, 10, 25, 30, 15, 5, 40],
    stock: [100, 100, 100, 100, 100, 100, 100, 100]},

    {id:24,
    nombre: "Tintes",
    producto: ["Tinte rojo fuego", "Tinte negro oscuriddad", "Decoloracion rubio miao", "Tinte negro zulado", "Tinte azul rey"],
    descripcion: "Tintes de pelo para traumados",
    precio: [2.5, 2.5, 2.5, 2.5, 2.5],
    stock: [100, 100, 100, 100, 100]},

    {id:25,
    nombre: "cachapon de un negro",
    producto: ["Cachapa con queso e mano y cochino", "Cachapa con jamon y queso rallao", "Cachapa con cochino, crne mechada y pollo esmechao", "Cachapa con queso e mano, queso rallao y full chochino y natilla", "Sopa de res", "Cachapa 4 quesos y 4 carnes"],
    descripcion: "cachapa y sopita de res",
    precio: [5, 6, 7, 7.5, 5, 9],
    stock: [100, 100, 100, 100, 100, 100]},

    {id:26,
    nombre: "Inmortaliza y vive",
    producto: ["1 foto", "5 fotos", "10 fotos", "15 fotos", "20 fotos"],
    descripcion: "Tienda de fotografias instantaneas, donde puedes inmortalizar tu momento o imprimir lo vivido",
    precio: [1.5, 6, 13, 17.5, 24],
    stock: [200, 200, 200, 200, 200]},

    {id:27,
    nombre: "Sour n' sweet",
    producto: ["Combo 1 cotufa pequeña y 1 algodon pequeño", "Combo 1 cotufa mediano y 1 algodon Mediano", "Combo 1 cotufa grande y 1 algodon grande", "Combo 1 cotufa pequeña y 1 algodon grande", "Combo 1 cotufa grande y 1 algodon pequeño"],
    descripcion: "Tienda de cotufas y algodones de azucar",
    precio: [1, 3, 5, 4, 4],
    stock: [100, 100, 100, 100, 100]},

    {id:28,
    nombre: "Tazas para los lunes",
    producto: ["Taza de gato", "Taza en forma de trebol", "Taza de Harry Potter", "Taza navideña", "Taza del sistema solar", "Taza de Carambola", "Taza en forma de arbolito de navidad", "en forma de Minion", "Taza de Stitch", "Taza en forma de bota"],
    descripcion: "Tazas de todas las formas y colores",
    precio: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    stock: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]},

    {id:29,
    nombre: "Radio Reloj, de las bocinas a tu corazon",
    producto: ["Disco de CD - Felicilandia/Alvaro Diaz", "Disco de CD - DATA/Tainy", "Disco de CD - Un verano sin ti/Bad Bunny", "Disco de CD - Cosa Nuestra/Rauw Alejandro", "Disco de vinilo - The New Sound of the Venezuelan Gozadera/Los amigos invisibles", "Disco de vinilo - Miss Mujerzuela/Caramelo de Cianuro", "Disco de vinilo - La cancion de Venezuela/Machado y Baez", "Disco de vinilo - ¿Quien trae las cornetas?/Rawayana"],
    descripcion: "Los mejores discos vinilos y CD, con sonido de alta fidelidad",
    precio: [15, 20, 15, 20, 30, 25, 30, 25],
    stock: [50, 50, 50, 50, 50, 50, 50, 50]},

    {id:30,
    nombre: "Legion Freaks",
    producto: ["Figura de accion - Batman", "Figura de accion - Superman", "Figura de accion - Spiderman", "Figura de accion - Ironman", "Figura de accion - Capitan America", "Figura de accion - Hulk", "Manga - Jojo’s Bizarre Adventure", "Manga - One Piece", "Manga - Naruto", "Manga - Dandadan", "Manga - boku no hero", "Manga - Tokyo Ghoul"],
    descripcion: "Tienda de coleccionables y manga, para los amantes de la cultura del anime",
    precio: [20, 20, 20, 20, 20, 20, 15, 15, 15, 15, 15, 15],
    stock: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]},

    {id:31,
    nombre: "Ropa el Rucio Moro",
    producto: ["Camisa negra de cuadros Manga corta", "Camisa blanca de cuadros Manga corta", "Camisa azul de cuadros Manga corta", "Camisa negra de cuadros Manga larga", "Camisa blanca de cuadros Manga larga", "Camisa azul de cuadros Manga larga", "Sombrero llanero", "Sombrero de paja", "Botas de cachicamo", "Botas de cuero de vaca", "Pantalones de mezclilla", "Pantalones de tela"],
    descripcion: "Ropa de vestir y accesorios para la exploracion en la sabana Venezolana",
    precio: [20, 15, 10, 17, 8, 13, 20, 15, 30, 20, 15, 15],
    stock: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]},

    {id:32,
    nombre: "Artesanias tradicionales doña lupe",
    producto: ["Ceramica de barro", "Gurrufio de madera", "Muñeca de trapo", "Trompos", "perinolas", "bolsa de metras"],
    descripcion: "Artesanias tradicionales de la region",
    precio: [20, 5, 10, 3, 2, 3],
    stock: [50, 50, 50, 50, 50, 50]},

    {id:33,
    nombre: "Tienda de intrumentos Antonio lauro",
    producto: ["Guitarra criolla", "Guitarra electrica", "Bajo", "Bateria", "Piano", "Violin", "Trompeta", "Saxofon", "Flauta", "Maracas", "Tambor", "Arpa"],
    descripcion: "Instrumentos musicales de alta calidad, la mejor sonoridad a los mejores precios",
    precio: [100, 150, 200, 300, 400, 200, 100, 150, 50, 20, 30, 100],
    stock: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]},

    {id:34,
    nombre: "Tienda de deportes el corredor",
    producto: ["Balon de futbol", "Balon de baloncesto", "Balon de beisbol", "Balon de voleibol", "Balon de tenis", "Balon de golf", "Balon de rugby", "Balon de americano", "Balon de futbol americano", "Balon de waterpolo", "Balon de balonmano", "Balon de futbol sala"],
    descripcion: "Balones de todos los deportes, para la practica de tu deporte favorito",
    precio: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    stock: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]},

    {id:35,
    nombre: "Tienda de mascotas el perrito feliz",
    producto: ["Comida para perros", "Comida para gatos", "Comida para aves", "Comida para peces", "Comida para hamsters", "Collares para perros", "Collares para gatos", "jaulas para aves", "peceras", "jaulas para hamsters", "correas para perros", "correas para gatos"],
    descripcion: "Todo lo que necesitas para tu mascota, al mejor precio",
    precio: [15, 20, 13, 8, 10, 15, 15, 25, 30, 20, 10, 10],
    stock: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]},
        
    {id:36,
    nombre: "Tienda de motos el muchacho loco",
    producto: ["Yamaha YZF-R1", "Kawasaki Ninja ZX-10R", "Honda Gold Wing", "BMW K1600 GTL", "Harley-Davidson Road King", "BMW R1250 GS", "Harley-Davidson Softail", "Kawasaki Vulcan", "Honda CBR", "Suzuki GSX-R", "Ducati Panigale", "Triumph Bonneville"],
    descripcion: "Las mejores motos del mercado full racing",
    precio: [10000, 15000, 20000, 30000, 40000, 20000, 10000, 15000, 5000, 2000, 3000, 10000],
    stock: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]},

    {id:37,
    nombre: "Indumentaria para caballos el jinete",
    producto: ["Silla de montar", "Espuelas", "Freno", "Estribos", "Cabezada", "Manta", "Pechera", "Cincha", "Bocado"],
    descripcion: "la equitacion jamas a sido mejor con la indumentaria de el jinete",
    precio: [100, 20, 30, 20, 15, 20, 25, 20, 10],
    stock: [50, 50, 50, 50, 50, 50, 50, 50, 50]},

    {id:38,
    nombre: "Burger Show",
    producto: ["Hamburguesa simple de carne", "Hamburguesa doble de carne", "combo de Hamburguesa simple con papas fritas y refrescos", "combo de Hamburguesa doble con papas fritas y refrescos", "Hamburguesa de pollo", "Hamburguesa de pescado", "Hamburguesa vegetariana"],
    descripcion: "Las mejores hamburguesas de la ciudad, con el mejor sabor y calidad",
    precio: [1, 3, 5, 7, 2, 4, 3],
    stock: [50, 50, 50, 50, 50, 50, 50]},

    {id:39,
    nombre: "Parrillas el braceo",
    producto: ["Combo de parrilla de res con sopa", "Combo de parrilla mixta con arepitas fritas y papelon con limon", "Combo de parrilla de Res con ensalada", "Combo de parrilla de cerdo con arroz", "Combo de parrilla de pollo con papas fritas"],
    descripcion: "Las mejores parrillas de la ciudad, con el mejor sabor y calidad",
    precio: [5, 7, 6, 5, 4],
    stock: [50, 50, 50, 50, 50]},

    {id:40,
    nombre: "Pirotecnia marca acme",
    producto: ["Cohetes", "Candelas", "Petardos", "Fuegos artificiales", "Bengalas", "Morteros", "Chispitas"],
    descripcion: "La mejor pirotecnia de la ciudad, con los mejores fuegos artificiales",
    precio: [5, 3, 2, 10, 1, 5, 1],
    stock: [50, 50, 50, 50, 50, 50]},

    {id:41,
    nombre: "Pizzeria los morros",
    producto: ["Pizza de peperoni", "Pizza de jamon", "Pizza de pollo", "Pizza de carne", "Pizza de vegetales", "Pizza de mariscos", "Pizza de cuatro quesos"],
    descripcion: "Las mejores pizzas de la ciudad, con el mejor sabor y calidad",
    precio: [5, 5.5, 6, 8, 7, 9, 10],
    stock: [50, 50, 50, 50, 50, 50, 50]},

    {id:42,
    nombre: "Juguetes",
    producto: ["Muñeca barbie", "Carro de juguete", "Pelota", "Max steal", "avion de juguete", "Cubo rubik", "Rompecabezas"],
    descripcion: "Los mejores juguetes de la ciudad, con la mejor calidad y durabilidad",
    precio: [5, 5, 2, 10, 5, 3, 4],
    stock: [50, 50, 50, 50, 50, 50, 50]},

    {id:43,
    nombre: "Postres Dulce vida",
    producto: ["Torta de chocolate", "Torta de vainilla", "Torta de fresa", "Torta de arequipe", "Torta de limon", "Torta de coco", "Torta de zanahoria"],
    descripcion: "Los mejores postres de la ciudad, con el mejor sabor y calidad",
    precio: [6, 4, 5, 4.5, 3, 5, 5],
    stock: [50, 50, 50, 50, 50, 50, 50]},

    {id:44,
    nombre: "Gorras Calle ciega",
    producto: ["Gorra New Era", "Gorra Nike", "Gorra Adidas", "Gorra Puma", "Gorra Under Armour", "Gorra Vans"],
    descripcion: "Las mejores gorras de la ciudad, con el mejor estilo y calidad",
    precio: [10, 15, 20, 10, 15, 10],
    stock: [50, 50, 50, 50, 50, 50]}

];
/*for (let i = 0; i< contenidoTiendas.length; i++){
        console.log('==============================')
        console.log('tienda: '+contenidoTiendas[i].nombre);
        console.log('producto: '+contenidoTiendas[i].producto);
        console.log('precio: '+contenidoTiendas[i].precio);
        console.log('stock: '+contenidoTiendas[i].stock);
    }*/
function construirMenu(){

    ulTien.innerHTML = "";
    var nomTiend = document.createElement('p');
    nomTiend.textContent = "Nombre de las Tiendas";
    ulTien.appendChild(nomTiend);

    for ( let i = 0; i< contenidoTiendas.length; i++){
        var li = document.createElement('li');
        li.textContent = contenidoTiendas[i].id+". "+contenidoTiendas[i].nombre;
        ulTien.appendChild(li);
    }
}

construirMenu();

ver.addEventListener('submit', function(){

var desicion = document.querySelector("#idT").value;

 if (desicion==null || desicion<0 || desicion>44 ||  isNaN(desicion)){
        document.querySelector('#error_idT').innerHTML="Error prueba otra vez";
        document.querySelector('#error_idT').style.color ="red";
        return false;
    }else{
        document.querySelector('#error_idT').style.display="none";
}   

    titu.innerHTML="";
    var titulo = document.createElement('h1');
    titulo.textContent = contenidoTiendas[desicion].nombre;
    titu.appendChild(titulo);

    desc.innerHTML="";
    var descri = document.createElement('h4');
    descri.textContent = contenidoTiendas[desicion].descripcion;
    desc.appendChild(descri);

    ulProd.innerHTML="";
    var prou = document.createElement('p');
    prou.textContent = "Productos Disponibles, Precio, Stock";
    ulProd.appendChild(prou);
    for ( let i = 0; i< contenidoTiendas[desicion].producto.length; i++){
        var lProductos = document.createElement('li');
        lProductos.textContent = i +".  "+ contenidoTiendas[desicion].producto[i]+ ", "+ contenidoTiendas[desicion].precio[i]+", "+ contenidoTiendas[desicion].stock[i] ;
        ulProd.appendChild(lProductos);
    }
    
})
})