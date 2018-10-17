'use strict'

// ejecutamos el método createServer
// con un argumento
var http = require('http').createServer()


function webServer(req,res) {
	res.writeHead(200,{'Content-Type':'text/html'})
	res.end('<h1>hola mundo http://localhost:3000/</h1>')
}

// con el método on desencadenamos un evento
// que escucha a la función  webServer
// connvertimos al servidor-web en un emisor de eventos
http.on('request',webServer) 
http.listen(3000,"localhost")

console.log("server running at http://localhost:3000/")

