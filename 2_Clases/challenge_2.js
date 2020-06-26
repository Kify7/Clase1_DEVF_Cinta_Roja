/*
Crear una clase Cuenta que tenga los siguientes atributos y metodos:
   -Titular y cantidad
   -ingresar(cantidad)
   -retirar(cantidad)
   Hacer las validaciones previas
   Como regla de negocio no debe de tener más de $900 y menos de $10
*/

class Cuenta {
    constructor(titular, saldo, usuario, contraseña) {
        this.titular = titular;
        this.saldo = saldo;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

    // METODOS
    ingresar(cantidad) {
        this.cantidad = cantidad + this.saldo;
        if (this.cantidad >= 900) {
            return `La cantidad a ingresar supera el límite de cuenta`;
        } else {
            return `Tu saldo actual es: $ ${this.cantidad}`
        }
    }

    retirar(cantidad) {
        this.cantidad = this.saldo - cantidad;
        if(this.cantidad <=10){
            return`No puedes hacer un retiro por esa cantidad, SALDO INSUFICIENTE`
        } else {
            return`Tu saldo actual es: $ ${this.cantidad}`
        }
    }

}

var bbva = new Cuenta('Charlie Flowers', 700, 'bilboa', 'xxxxxxx');
// console.log(bbva.ingresar(400));
console.log(bbva.retirar(557));

