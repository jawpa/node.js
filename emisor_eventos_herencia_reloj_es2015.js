// queremos mostrar un reloj digital en la consola
'use strict'

// requerimos el módulo events de javascript, 
// especñificamente la clase EventEmitter
var EventEmitter = require('events').EventEmitter

// requerimos al módulo util, especialmente al método inherits
const hereda = require('util').inherits

var Clock = function () {
	// guardamos el contexto this (la variable clock) haga referencia
	// al objeto internamente
	var self = this

	// se ejecuta cada vez que el emisor de eventos funcione
	setInterval(function () {
		// cada segundo el mismo objeto emite el evento
		self.emit('tictac') 
	},1000)
}

// queremos que reloj herede las caracteŕísticas de un emisor de eventos
// inherits necesita dos parámetros, la clase hijo y laclase padre
hereda(Clock,EventEmitter)

// extendemos el prototipo del objeto clock
// le agregamos un método, laHora.
Clock.prototype.darHora = function () {
	var date = new Date(),
		horas = date.getHours(),
		minutos = date.getMinutes(),
		segundos = date.getSeconds(),
		mensaje = horas + ':' + minutos + ':' + segundos

		console.log(mensaje)
}

var cucu = new Clock()

// cucu puede usar el método on porque lo hereda del emiso de enventos
// ergo, usamos un emisor de eventos para mostrar el método darHora
// inicializamos el evento tictac que ejecuta la función 
// extendida en el prototipo
cucu.on('titac', function () {
	cucu.darHora();
})




