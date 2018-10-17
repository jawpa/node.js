// provee herramientas para trabajar con rutas de archivos y directorios
'use strict'

var http = require('http').createServer(webServer),
	path = require('path'),
	// creo un arreglo con tres objetos
	urls = [
		{
			route : '',
			output : '<h2>Home</h2>'
		},
		{
			route : 'acerca',
			output : '<h2>Acerca de</h2>'
		},
		{
			route : 'contacto',
			output : '<h2>Contacto</h2>'
		}
	]

function webServer(req,res) {
	var message = '<h1>Hola Mundo</h1>',
		//obtenemos el nombre del archivo de la url con la propiedad url
		pathUrl = path.basename(req.url)

		console.log(pathUrl)

		// recorremos el vector url
		// pos es cada url
		urls.forEach(function (pos) {
			// comparamos cada posición con el nombre del archivo de la url
			if (pos.route == pathUrl) {
				// mandamos una respuesta 200 al servidor con formato html 
				res.writeHead(200,{'Content-Type':'text/html'})
				res.end(message + pos.output)
			}
		})

		// si no tenemos respuesta, si ponemos una url no encontrada:
		if (!res.finished) {
			// mandamos una respuesta 404 al servidor con formato html 
			res.writeHead(404,{'Content-Type':'text/html'})
			res.end('<h1>Error 404, página no encontrada</h1>')
		}
}

http.listen(3000)

console.log("server running at http://localhost:3000/")