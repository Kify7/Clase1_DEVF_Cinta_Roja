/* class Banda {
    constructor(nombre, web, anio, genero){
        this.nombre = nombre;
        this.web = web;
        this.anio = anio;
        this.genero =genero;
    }
// } */  //CODIGO MEJORADO ---> LEER ARCHIVO operadores_ternarios.js

class Banda {
    constructor(nombre, web, anio, genero){
        this.nombre = nombre ? nombre : 'nombre no escontrado';
        this.web = web ? web : 'website no encontrada';
        this.anio = anio ? anio : 'año de fundación no encontrado';
        this.genero =genero ? genero : 'genero no encontrado';
    }
}


module.exports = { Banda };


 