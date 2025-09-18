import {barcelona, roma, paris, londres} from './ciudades.js'

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let precio = document.getElementById('precio')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        //remover evento active
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })
        //activar active
        this.classList.add('active');

        //traer informacion
        let contenido = obtenerInformacion(this.textContent);

        //mostrar contenido
        tituloElemento.innerHTML = contenido.titulo;
        precio.innerHTML = 'El precio en la promoción de hoy es de ' + contenido.precio +' €';
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
    });
});

//traer informacion de ciudades
function obtenerInformacion(enlace){
    let contenido ={
        'Barcelona': barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres
    };
    return contenido[enlace];
}

console.log(enlaces)