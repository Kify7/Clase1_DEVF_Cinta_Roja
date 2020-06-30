//PROGRAMACION FUNCIONAL
//Programacion declarativa vs Programación  Imperativa

// La programacion funcional se refiere al uso de funciones puras, es decir, que no tienen efectos secundarios.

//Programacion Funcional vs Programacion orientada a objetos


const array = [ 10, 22, 55, 23, 7, 6, 89];

 //Iterar arreglo
 console.log(array[0]);
for (let i = 0; i <= array.length; i++) {
    console.log(array[i]);
    
}  // este ciclo for nos muetsra en consola el arreglo completo más un valor undifined:
// ......0....; 0 <= 6.......✅....; 1
// ......0....; 1 <= 6.......✅....; 2
// ......0....; 2 <= 6.......✅....; 3
// ......0....; 3 <= 6.......✅....; 4
// ......0....; 4 <= 6.......✅....; 5
// ......0....; 5 <= 6.......✅....; 6
// ......0....; 6 <= 6.......❗️....; 7 => undefined: no se cumple la condicion de for en la iteracion


//AHORA BIEN: 
const arreglo = [10, 23, 54, 22, 7, 6, 89];
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
} /// este cilco no arroja el undefined por que se cumple todas las iteraciones.


//DECLARATIVA:

const eachArray = arreglo.forEach((value) => console.log(value));

// AHORA HAREMOS UN NUEVO ARREGLO QUE CONCATENE LOS VALORES CON SU ÍNDICE:
// FORMA IMPERATIVA

const nuevoArreglo = [];
for (let i = 0; i < arreglo.length; i++) {
    nuevoArreglo[i] = `${i} - ${arreglo[i]}`;
}

console.log(nuevoArreglo);

// FORMA DECLARATIVA
const newArray = array.forEach((value) => value); // Esto no va a devolver nada, por que  forEach es una funcion que devuelve vacio.
console.log(newArray);

const newArray2 = array.map((value, index, array) => `${value} ${index} ${array}`);
console.log(newArray2);

const arregloIgual = arreglo.map((value, index) => `${index} - ${value}`);
console.log(arregloIgual);



//PROBLEMA:
// DE FORMA IMPERATVA Y DECLARATIVA IMPRIMIR SOLO LOS PAISES CON 6 O MENOS CARACTERES
const paises= ['Mexico', 'Colombia', 'Costa Rica', 'Peru', 'República Dominicana', 'Venezuela' ];


// IMPERATIVA:
// const nuevoPaises = [];
// let e = 0;
// for(let i = 0; i < paises.length; i++){
//     if (paises[i].length <= 6); {
//         nuevoPaises[e] = paises[i];
//     }
// }
//  console.log(nuevoPaises);

//  DECLARATIVA:

const nuevoPaises = paises.filter((value) => value.length <= 6);
console.log(nuevoPaises);
