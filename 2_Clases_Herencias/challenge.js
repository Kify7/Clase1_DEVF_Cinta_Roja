/* Haz una clase llamada Persona que siga las siguientes condiciones:
  Sus atributos son: nombre, edad, género, peso y altura.
   calcularIMC()
   esMayorDeEdad()
     El constructor pide nombre, edad, género, peso y altura
*/

class Persona{
    constructor(nombre, edad, genero, peso, altura){
        // definiendo atributos
        this.nombre = nombre;
        this.edad = edad;
        this. genero = genero;
        this.peso = peso;
        this.altura = altura;
    }
    // definiendo metodos
    calcularIMC(){
        var imc = this.peso / ((this.altura / 100) * (this.altura / 100));
        var cmi = imc.toFixed(2);
        if(cmi <=18.4){
            return `Tu Índice de Masa Corporal es: ${cmi}, se considera BAJO`;
        } if(cmi >= 18.5 && cmi <= 24.9) {
            return `Tu Índice de Masa Corporal es: ${cmi}, se considera NORMAL`;
        } if(cmi >=25 && cmi <=29.9){
            return `Tu Índice de Masa Corporal es: ${cmi}, se considera SOBREPESO`;
        } if(cmi >=25 && cmi <=29.9){
            return `Tu Índice de Masa Corporal es: ${cmi}, se considera SOBREPESO`;
        } if(cmi >=30){
            return `Tu Índice de Masa Corporal es: ${cmi} se considera OBESIDAD`;
        } else {
            `Tus parámetros no existen`
        }
    }

    evaluarEdad(){
        if(this.edad < 18){
            return`Tienes ${this.edad} años, no estás listx para la aventura`;
        } if(this.edad >=18) {
            return`Tienes ${this.edad} años, ya te la sabes...`;
        } else {
            `no es válido`
        }
    }
}

var kify = new Persona('Kify', 32, 'F', 55, 150);
console.log(kify.calcularIMC());
console.log(kify.evaluarEdad());

