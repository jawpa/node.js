// varios de los objetos de las clases de módulos
// son una instancia de los emisores de eventos
// cómo ejecutar un emisor de eventos
// la emisión de eventos node trabaja con el patrón de diseño de software observador:
// tenemos dos objetos: el que emite(publica) -sujeto- y el que escucha -observador-  
'use strict'

// requerimos el módulo events de javascript, 
// especñificamente la clase EventEmitter
var EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter()


// con on asignp funciones a evento
pub.on('mievento',function (mensaje) {
	console.log(mensaje);
})    


// con once asignp funciones a evento
pub.once('mievento',function (mensaje) {
	console.log('se emite la primera vez');
})    

// emitimos el evento
pub.emit('mievento',"soy un emisor de eventos")
// obtenemos:
// soy un emisor de eventos
// se emite la primera vez


pub.emit('mievento',"soy un emisor de eventos de nuevo")
// obtenemos:
// soy un emisor de eventos de nuevo

pub.removeAllListeners('mievento')
pub.emit('mievento',"soy un emisor de eventos de nuevo de nuevo")
// no obtenemos nada 