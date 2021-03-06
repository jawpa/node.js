'use strict'

// ejecutamos el método createServer
// con un argumento, la función webServer
// servidor http como lectura de archivo estático
var http = require('http').createServer(webServer),
	fs = require('fs')
	

function webServer(req,res) {
	// definimos la callback a usar como argumento
	function readFile(err,data) {
		// si hay un error que lo lance
		if (err) throw err
		// si no hay error, que termine con la transmisión de datos al cliente	
		res.end(data)

	}
	// mandamos una respuesta 200 al servidor con formato html 
	res.writeHead(200,{'Content-Type':'text/html'})
	// el método tiene dos argumentos, él archivo estático y la callback
	fs.readFile('assets/servidor_http.html', readFile)
	
}


http.listen(3000)

console.log("server running at http://localhost:3000/")

// en un navegador ponemos: http://127.0.0.1:3000
