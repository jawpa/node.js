// el método get envía la información a través de la barra de direcciones
// post envía la info a través e las cabeceras

'use strict'

// vamos a desplegar en web, necesitamos el módulo http
var http = require('http').createServer(webServer),
	
	// vamos a leer un archivo estático, requerimos el módulo fs
	// lo leemos en módo síncrono
	form = require('fs').readFileSync('assets/formulario.html'),

	// requerimos el módulo querystring para pasar los objetosd que devuelve la url
	// a cadenas de textos a leíbles
	querystring = require('querystring'),

	// queremos heredar las características del emisor de eventos
	util = require('util'),

	// para almacenar lo que el formulario envíe
	dataForm = ''



function webServer(req,res) {
	// los método get y post son una propiedad del objeto de la 
	// petición en el webserver
	// aunque el formulario está en post,para que el archivo html cargue
	// necesito previamente cargar la url (http://localhost:3000)
	// esto es, cargar el archivo por el método get
	if (req.method == 'GET') {
		// mandamos cabecera con código y formato
		res.writeHead(200,{'Content-Type':'text/html'})	
		// renderizamos la lecturaa asíncrona del archivo estática
		res.end(form)
	}

	// imprimimos en pantalla los datos
	if (req.method == "POST") {
		// almacenamos datos mediante el método data
		req
			.on('data', function (data) {
				// mientras haya datos, los almacenamos
				dataForm += data
			})
			// cuando termine, mostramos los datos del formulario
			.on('end', function (data) {
				// pasamos los datos al formato objeto-literal
				var objeto = querystring.parse(dataForm),
					formatoObjeto = util.inspect(objeto),
					json = JSON.stringify(objeto)﻿
				let mensaje = `Los datos enviados: ${dataForm}\n
				En formato objeto-literal: ${formatoObjeto}\n
				En Formato Json: ${json}`
				console.log(mensaje)
				res.end(mensaje)
			})
	}
}

http.listen(3000)

console.log('sevidor corriendo en http://localhost:3000/')

