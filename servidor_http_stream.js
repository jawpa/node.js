'use strict'

// ejecutamos el método createServer
// con un argumento, la función webServer
// para trabajar el servidor http como stream requerimos el módulo file-system
// creamos una variable para el archivo html
var http = require('http').createServer(webServer),
	fs = require('fs'),
	// creamos un chorro de información leíble 
	servidor_http = fs.createReadStream('assets/servidor_http.html')


function webServer(req,res) {
	res.writeHead(200,{'Content-Type':'text/html'})
	// con el método pipe transmitimos la información
	servidor_http.pipe(res)
}


http.listen(3000)

console.log("server running at http://localhost:3000/")

