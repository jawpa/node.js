'use strict'

var http = require('http').createServer(webServer),
	fs = require('fs')
	

function webServer(req,res) {
	
	function readFile(err,data) {
		if (err) throw err
		res.end(data)

	}
	
	res.writeHead(200,{'Content-Type':'text/plain'})
	
	fs.readFile('../assets/servidor_http.html', readFile)
	
}


http.listen(3000)

console.log("server running at http://localhost:3000/")

// en un navegador ponemos: http://127.0.0.1:3000

// el módulo supervisor prende y apaga el servidor de manera automática 
// al modificar el código:
// Starting child process with 'node monitor.js'
// server running at http://localhost:3000/
// crashing child
// Starting child process with 'node monitor.js'
// server running at http://localhost:3000/
// crashing child
// Starting child process with 'node monitor.js'
// server running at http://localhost:3000/

// para usar el módulo supervisor ponemos:
// supervisor monitor.js



// con forever el proceso de la aplicación se produce en forma continua
// forever start pirulo.js
// hasta que le indiquemos que se detenga
// para monitorear el proceso ponemos:
// forever list
// si modificamos el código, no se verifica, ya que el proceso iniciado es anterior
// inicia el script como un demonio
// podemos usarlo desde cualquier directorio en la consola con forever adelante
// si lo matamos con el nombre tenemos que estar en la carpeta, sino con el pid
// forever stop 3763
// para que se vean los cambios:
// forever restart monitor.js
