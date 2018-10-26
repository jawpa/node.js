'use strict'

var http = require('http');


function webServer (req,res) {
	res.writeHead(200,{'Content-Type':'text-html'})
	// para la ejecución del archivo 
	// genera un break point
	debugger;
	res.end('<h1>hola mundo</h1>')
}

http
	.createServer(webServer)
    .listen(3000,"127.0.0.1")

console.log("server running at http://127.0.0.1:3000/")

// en un navegador ponemos: http://127.0.0.1:3000
// y obtendremos en la pantalla:hola mundo

// si se ejecuta de manera normal, no pasa nada, la palabra se ignora
// para debuggear:
// node inspect
// nombre_archivo
