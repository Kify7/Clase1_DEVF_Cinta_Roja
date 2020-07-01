// OPERADORES TERNARIOS PARA ENTENDER COMO MEJORAR EL CODIGO EN BANDA.JS
const edad = 24;
console.log();

 if (edad > 18){
     console.log('Eres mayor de edad');
 } else {
     console.log('no tienes la edad suficiente');    
 }

 console.log(edad > 18); // => Regresa un booleano

//  ahora lo mismo en una solo línea con ES6:

edad >= 18 ? console.log('Ya estas grande') : console.log('Eres pequeño');

 // Ahora guardando en una variable el resultado

const resultado = edad >= 18 ? 'Ya estas grande' : 'Eres pequeño';
console.log(resultado);

// Entendemos ocn esto, que hacemos una comparación con null (donde null será siempre el valor falso):
const resultado2 = null ? 'Ya estas grande' : 'Eres pequeño';
console.log(resultado2);

// Esto nos lleva a mejorar el código de banda que estamos exportando