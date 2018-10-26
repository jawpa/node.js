'use strict'

var http = require('http').createServer(prueba)
	

function prueba(req, res) {
	res.writeHead(200,{'Content-Type' : 'text-plain'})
	res.end('<h1>Hola Paquete Json</h1>')
}

http.listen(3000)

console.log("servidor corriendo en el puerto 3000")


// con npm start encendemos el supervisor de esta "app"