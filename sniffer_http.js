// sniffer, husmea en otro sitio
'use strict'

var http = require('http'),
	options = {
		host :  'www.google.com',
		// 80 es el puerto por defecto del protocolo http
		port : 80,
		path : '/'
	},
	htmlCode = ''

function httpClient(res) {
	console.log(`El sitio ${options.host} ha respondido. 
	Código de Estado: ${res.statusCode}`)
	// a la respuesta le asignamos el evento data
	// accedemos al código html que trabaja el servidor (buffers)
	// mientras haya datos se ejecuta la función anónima
	res.on('data', function (data) {
		htmlCode += data
		// procesamos los datos binarios a texto
		// vemos el código html que forma al sitio web
		console.log(data, data.toString())
	})
}

function httpError (err) {
	console.log(`El sitio ${options.host} no ha respondido. 
		Código de Estado: ${err.code}
		Error: ${err.message}`)	
	}

function webServer(req,res) {
	// cuando la respuesta del servidor sea 200 voy a pasar contenido en formato html
	res.writeHead(200,{'Content-Type':'text/html'})	
	res.end(htmlCode)
}

// instancia cliente http
http
	.get(options,httpClient)
	.on('error',httpError)

// instancia servidor http
http	
	.createServer(webServer)
	.listen(3000)

console.log('sevidor corriendo en http://localhost:3000/')