//OPERACIONES ASÍNCRONAS (QUE SUCEDEN AL MISMO TIEMPO)

console.log(1);
setTimeout(() => {
    console.log(2); 
}, 5000)

setTimeout(() => {
    console.log(3); 
}, 3000)

console.log(4);

setTimeout(() => {
    console.log(5); 
}, 1000)

//LAS OPERACIONES MAS COSTOSAS PARA UN SISTEMA OPERATIVO
//SON LOS LOOPS


// EJEMPLO DE CUELLO DE BOTELLA
console.log(1);
//cuello de botella
for(let i = 0; i <= 999999; i ++);
console.log(2);

setTimeout(() => {
    console.log(3); 
}, 5000);

setTimeout(() => {
    console.log(4); 
}, 3000);

setTimeout(() => {
    console.log(5); 
}, 1000);
