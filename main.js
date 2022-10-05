//Creamos un ARRAY
// let y1 = ["X", "X", "O"];
// let y2 = ["X", "O", "X"];
// let y3 = ["O", "X", "O"];


// let matriz = [y1, y2, y3];

// for (let i = 0; i < matriz.length; i++) {

// }


// console.log(matriz[i]);

// if (matriz[2][1] === "") {
//     console.log("Aquí se podria marcar una casilla...");
// };


// console.log(matriz[2][1]);


////////////////////////////////////////////////////////////////////////////////////

//LENGHT

// let frutas = ["manzana", "platano", "pera", "fresa", "melocoton"];
// let bebidas = ["agua", "fanta", "cerveza", "vino", "ron", "cazalla"];


// // let bebidasFrutas = frutas.concat(bebidas);

// // console.log(bebidasFrutas);


// // console.log(frutas.length);


// let juntos = frutas.concat(bebidas).join(" - ");

// console.log(juntos);


// let videojuegos = ["lost ark", "gta", "lol", "Dragon ball", "wow", "metal slug"];

// let posibles = videojuegos.filter(juego => juego != "lol");

// console.log(posibles);



/////////////////////////////////////////////////////////////////////////////////////////////////

// comrpobar si el numero y letra de DNI  son correctos


// let dni = parseInt(prompt("Introduza su numero de DNI"));

// let letra = prompt("Introduzca la letra de su DNI")

// let array = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

// letra = letra.toUpperCase();

// let letraDni = dni % 23;

// if (letra == array[letraDni]) {
//     console.log("Es correcto")
// } else {
//     console.log("No es correcto")
// };
///////////////////////////////////////////////////////////////////////////////////////////////
//que letra de dni me sale dando solo el numero


// let dni = parseInt(prompt("Introduza su numero de DNI"));

// let array = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

// let letraDni = dni % 23;

// console.log((array[letraDni]))


/////////////////////////////////////////////////////////////////////////////////////////
//Array vs Objeto


// let carlos = ["carlos", "27", "valencia", "videojuegos"];

// let alumnoCarlos = {
//     nombre: "carlos",
//     edad: "27",
//     ciudad: "Valencia",
//     hobbie: ["videojuegos", "peliculas", "leer", "musica"],
//     amigos: {

//         amigo1: "jose",
//         amigo2: "marta",
//         amigo3: "mara"
//     }

// };
// console.log(alumnoCarlos.ciudad)
// console.log(alumnoCarlos.amigos.amigo1)

/////////////////////////////////////////////////////////////////////////////////////////

//KATA ENTRADA DE CINE  


let edad = parseInt(prompt("Introduzca su edad"));
let pelicula = prompt("Que pelicula quiere ver").toLocaleLowerCase();

let objetoPeliculas = {
    pelicula1: {
        titulo: "el rey leon",
        edad: 3
    },
    pelicula2: {
        titulo: "soy leyenda",
        edad: 13
    },
    pelicula3: {
        titulo: "la marca del demonio",
        edad: 18
    },
    pelicula4: {
        titulo: "a todo gas",
        edad: 8
    }
}

switch (pelicula) {
    case "el rey leon":
        if (edad >= objetoPeliculas.pelicula1.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    case "soy leyenda":
        if (edad >= objetoPeliculas.pelicula2.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    case "la marca del demonio":
        if (edad >= objetoPeliculas.pelicula3.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    case "a todo gas":
        if (edad >= objetoPeliculas.pelicula4.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    default:
        console.log("Esa película no está disponible");
}

// let entrada = pelis.filter(pelicula == titulo);
// if (edadEntrada >= edad) {
//     console.log("Podras ver la pelicula")
// } else {
//     console.log("No puedes ver la pelicula")
// };

// // if ((edad >= pelis.edad) && pelicula == pelis.titulo) {

// //     console.log("Puede ver la pelicula")
// // } else {
// //     console.log("No puede ver la pelicula")

// // }