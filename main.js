class Mascota { //=> SUPERCLASE
    constructor(nombre, patas){
        this.nombre = nombre;
        this.patas = patas;
        this.cerebro = true;
    }
    alimentarse(){
        return`${this.nombre} se está alimentando`
    }
};

class Perro extends Mascota{ //=>SUBCLASE DE MASCOTA
    constructor(nombre, patas, cola, raza){
        super(nombre, patas);
        this.ladra = true;
        this.cola = cola;
        this.raza = raza;
    }
    truco(){
        return`${this.nombre} está dando la pata`;
    }
}

class Serpiente extends Mascota{ //=>SUBCLASE DE MASCOTA
    constructor(nombre, color){
        super(nombre, 0);
        this.color = color;
        this.veneno = false;
    }
    mudarPiel(){
        return `${this.nombre} ha mudado de escamas`;
    }
}

class Ave extends Mascota{ //=>SUBCLASE DE MASCOTA
    constructor(nombre, patas, plumas){
        super(nombre, patas);
        this.alas = true;
        this.plumas = plumas;
    }
}

var perro1 = new Perro('Pantone', 4, 'mediana');
console.log(perro1);
console.log(perro1.alimentarse());
console.log(perro1.truco());

var perico = new Ave('Lolo', 2, 'cortas');
var python = new Serpiente('Kaa', 'gris');

console.log(perico);
console.log(python);
console.log(python.mudarPiel(), python.alimentarse());


