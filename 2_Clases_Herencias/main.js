console.log('hola');

// CLASES
// El constructor es el primer elemento (es un metodo) que se ejecuta en una nueva instancia.
// Su funciónn es inicializar el nuevo objeto.
// Recibe como parámetros...

class Auto {
    constructor(color, matricula, motor) {
        // DEFINIENDO ATRUBITOS DE LA CLASE
        this.llantas = 5;
        this.color = color;
        this.matricula = matricula;
        this.motor = motor;
        this.volante = true;
        this.encendido = false;
        // this.color es el atributo del objeto,  color es el valor en donde se guardará.
    }

    // DEFINIENDO METODOS DE LA CLASE
    // METODOS SETTERS
    encender() {
        if (!this.encendido) {
            this.encendido = true;
            return `El auto ${this.color} ha sido encendido y tiene un motor ${this.motor}.`;
        } else {
            return 'Debes apagar primero el auto';
        }
    }

    apagar() {
        if (this.encendido) {
            this.encendido = false;
            return `El auto ${this.color} ha sido apagado`;
        } else {
            return 'Querido usuario, el auto ya está apagado.';
        }
    }
    // METODO QUE PINTE EL AUTO
    pintar(newColor) {
        this.color = newColor;
        return `El auto ha sido apagado ${this.color}`;
    }
    // METODO QUE CAMBIE EL MOTOR
    cambiarMotor(newMotor) {
        this.motor = newMotor;
        return `El auto tine un nuevo motor: ${this.motor}`;
    }

    // METODOS GETTERS
    obtenerMatricula() {
        return this.matricula;
    }

    obtenerResumen() {
        if (this.motor === 'Eléctrico') {
            return `El atuto es de color ${this.color}, tiene ${this.llantas} llantas, su matricula es ${this.matricula}, y no necesita gasolina`;           
        } else {
            return `El motor no es eléctrico, es de color ${this.color}, tiene ${this.llantas} llantas, su matricula es ${this.matricula}, y no necesita gasolina`;            
        }
    }
}


// CREANDO INSTANCIA DE CLASES
var miAuto = new Auto();
var suAuto = new Auto();
// console.log(miAuto);
// console.log(suAuto); 

var tuAuto = new Auto('azul', 'ABDH567', 'V4');


// console.log(tuAuto.encender());
// console.log(tuAuto);
console.log(tuAuto.obtenerMatricula());




//ENCENDER, APAGAR, APAGAR, ENCENDER, IMPRIMIR:OBJETO: 
var nuevoAuto = new Auto('rojo', 'NFX072', 'V6');

console.log(nuevoAuto.encender());
console.log(nuevoAuto.apagar());
console.log(nuevoAuto.apagar());
console.log(nuevoAuto.encender());
console.log(nuevoAuto);



console.log(nuevoAuto.pintar('blanco'));
console.log(nuevoAuto.cambiarMotor('Eléctrico'));
console.log(nuevoAuto.obtenerResumen());