// Es algo que no sabemos si se cumplirá o no.
// PROMESA ESTÁ EN EL AIRE(Pending)
// 24 junio 2020
// Cumple Promesa: Cumpleaños => 📲 (Resuelta) RESOLVE
// No cumple promesa: => (Rechazada) REJECTED
// ////////////////////// Razón:
// ......................Se me olvidó
// ......................No hay en la tienda
// ......................etc..

// ESTADOS DE UNA PROMESA: PENDING/ RESOLVE /REJECTED:
// new promise recibe un callbak (función de dos parametros), dentro del constructor:
const promesaCumple = new Promise((resolve, reject) => {
    const number = Math.round(Math.random() * 100);
    setTimeout(() => {
        if(number >= 50) {
            resolve('Cumplida 📲');
        } else if(number < 10) {
            reject('no tengo dinero');  
        } else {
            reject('se me olvidó')
        }
              
    }, 5000);
}) 




//  el metodo then se ejecuta cuando la promesa se cumple
promesaCumple
.then(celular => console.log(celular)) 
.catch(razon => console.log(razon));


//  el metodo catch se ejecuta cuando la promesa se cumple
