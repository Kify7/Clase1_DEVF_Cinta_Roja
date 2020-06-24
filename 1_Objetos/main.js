// // Funcion para Área de Trapecio

// function trapecio(a, b, h) {
//     var areaTrapecio = (((a + b) / 2) * h);
//     return areaTrapecio
// }

// console.log(trapecio(15, 12, 6));
// console.log(trapecio(10, 22, 18));

// // METODOS Y ATRIBUTOS

// var perro = {
//     nombre: 'Pantone',
//     raza: 'maltez',
//     color: 'capuchino',
//     edad: 9,
//     alimento_croquetas: true,
//     juguetes: ['pelota', 'peluche', 'hueso', 'mordedera'],
//     familia: {
//         padre:'no tiene',
//         madre:'Nina',
//         hermano:'Julian',
//         hermana:'no tiene',
//     },
//     // las funciones dentro de los oobjetos se llaman métodos:
//     juega: function(juguete) {
//         if(juguete < 4 && juguete >= 0){
//             return this.nombre + ' está jugando con ' + this.juguetes[juguete];
//         } else {
//             return 'el perro no encontró el juguete';
//         }
//         console.log(this.nombre);
//         // La palabra reservada this nos permite acceder a la propiedad dentro del objeto, siempre que estemos dentro del mismo
       
//         // en este ejemplo usamos this para acceder a su nombre dentro d ela función que se encuentra dentro del mismo objeto
//     }
// }


// console.log(perro.nombre);
// console.log(perro.edad);
// console.log(perro.alimento_croquetas);
// console.log(typeof perro.edad);
// console.log(typeof perro.color);
// console.log(perro.juguetes[0]);
// console.log(perro.familia.madre);


// // console.log(console);
// console.log(perro.juega(1));
// console.log(perro.juega(0));
// console.log(perro.juega(3));
// console.log(perro.juega(2));
// console.log(perro.juega(4));

// ARROW FUNCTIONS

var myPenguin = {
    nombre: 'Opus',
    saludar: function() {
        return 'Hola soy un pingüino y mi nombre es ' + this.nombre
    },
    origen: 'County Bloom',
    creador: 'Berkeley Breathed',
    puede_volar: false, 
    graznar: function() {
        return 'kaww kaww!'
    }
}

console.log(myPenguin.saludar(), myPenguin.graznar());

console.log(myPenguin.creador);
