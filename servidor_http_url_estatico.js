'use strict'

var http = require('http').createServer(webServer),
	// lo requerimos para trabajar con archivos
	fs = require('fs'),
	path = require('path'), 
	// provee herramientas para trabajar con rutas 
	url = require('url'),
	// creo un arreglo con tres objetos
	urls = [
		{
			id: 1,
			route : '',
			output : 'assets/indice.html'
		},
		{
			id:2,
			route : 'acerca',
			output : 'assets/acerca.html'
		},
		{
			id:3,
			route : 'contacto',
			output : 'assets/contacto.html'
		},
		{
			id:4,
			route : 'auspiciantes',
			output : 'assets/auspiciantes.html'
		}
	]

function webServer(req,res) {
		//obtenemos el nombre del archivo de la url con la propiedad url
	var	pathUrl = path.basename(req.url),
		id = url.parse(req.url,true).query.id

		console.log(`path:${pathUrl}, id:${id}`)

		// recorremos el vector url
		// pos es cada url
		urls.forEach(function (pos) {		
			// comparamos cada posición con el nombre del archivo de la url
			// o la id es igual a una id (http://localhost:3000/?id=1)
			if (pos.route == pathUrl || pos.id == id) {
				// mandamos una respuesta 200 al servidor con formato html 
				res.writeHead(200,{'Content-Type':'text/html'})
				// requerimos leer un archivo
				// le pasamos ruta archivo y callback
				fs.readFile(pos.output,function (err,data) {
					if(err) throw err
					// si no hay error, ejecutamos la lectura del archivo
					res.end(data)	
				})
				
			}
		})

		// si no tenemos respuesta, si ponemos una url no encontrada:
		if (!res.finished) {
			// mandamos una respuesta 404 al servidor con formato html 
			res.writeHead(404,{'Content-Type':'text/html'})
			fs.readFile('assets/404.html',function (err,data) {
					if(err) throw err
					// si no hay error, ejecutamos la lectura del archivo
					res.end(data)	
				})
		}
}

http.listen(3000)

console.log("server running at http://localhost:3000/")

// los parámetros le pasamos con el formato "?id=3" en el browser