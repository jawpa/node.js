'use strict'

var http = require('http'),
	options = {
		host :  'www.google.com',
		// 80 es el puerto por defecto del protocolo http
		port : 80,
		path : '/'
	}


// res, respuestas del servidor
http
	.get(options, function (res) {
	console.log(`El sitio ${options.host} ha respondido. 
		Código de Estado: ${res.statusCode}`)
	})

// cuando lanza algún error
	.on('error', function (err) {
	console.log(`El sitio ${options.host} no ha respondido. 
		Código de Estado: ${err.code}
		Error: ${err.message}`)	
	})