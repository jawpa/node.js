'use strict'



var Saludo = function () {
	
	// se ejecuta cada vez que el emisor de eventos funcione
	setInterval(function () {
		// cada segundo el mismo objeto emite el evento
		console.log('hola mundo')
	},1000)
}


var saludar = new Saludo()
