
//ESTO ES ES6 

//VARIABLE GLOBAL
var kify = 'persona';

//VARIABLE LOCAL(utlizar menos)
let kify2 = 'mujer de 32';


//CONSTANTE
const kify3 = 'mujer';

//ARROW FUNCTION

function suma(a, b){
    return a+ b;
}
console.log(suma(17, 20));

const add = (c, d) => {
    return c + d;
}
console.log(add(17, 20));

const plus = (f, e) => f + e; 
console.log(plus(17, 20));

const saludo = name => `Hello ${name}`
console.log(saludo('Charlie'));

//FUNCION ANONIMA
() => 'HOLA';

//STRING TEMPLATE
infoMascota = (nombre, raza, juguete) => `Mi mascota se llama ${nombre}, es un ${raza} y su juguete favorito es: ${juguete}`;
console.log(infoMascota('Pantone', 'maltez', 'hueso'));





