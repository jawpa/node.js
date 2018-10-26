'use strict'

var http = require('http').createServer(serverUpload),
	// módulo para parsear -analizar- los datos del formulario especialmente las subidas
	formidable = require('formidable'),
	util = require('util'),
	fsextra = require('fs-extra')

function serverUpload(req, res) {
	if (req.method.toLowerCase() == 'get' && req.url == '/') {
		let form = `<h1>Subir un archivo a upload</h1>	
					<form action="/upload" enctype="multipart/form-data" method="post">
						<div><input type="file" name="upload"></div>
						<div><input type="submit" name="subir servidor"></div>
				    </form> `
		res.writeHead(200,{'Content-Type' : 'text-html'})
		res.end(form)
	}

	if (req.method.toLowerCase() == 'post' && req.url == '/upload'){
		// parse va a ser el método que me va a permitir ejecutar la petición
		// procesar el formulario que envía el usuario
		// usamos el método inspect para pasar la lista de los campos del formulario
		// inspect representa a una cadena de texto como objeto
		let form = new formidable.IncomingForm()
		form
			// analizamos los datos
			.parse(req,function (err,fields,files) {
				res.writeHead(200,{'Content-Type' : 'text-html'})
				res.write('<h1>Archivos Recibidos</h1><a href="/">Regresar Inicio</a><br>' 
							+ util.inspect({files:files}))
				res.end()
			})
			.on('progress',function(bytesReceived,bytesExpected){
				let percentCompleted = (bytesReceived / bytesExpected) * 100
				console.log(percentCompleted)
			})
			.on('error',function(err){
				console.log(err)
			})
			.on('end',function(fields,files){
				// this es el que ejecuta el método end, que es el form
				// ubicación temporal del archivo que se sube
				let temPath = this.openedFiles[0].path,
					// extraemos el nombre
					filename = this.openedFiles[0].name,
					// nueva ubicación, raíz del proyecto y directorio upload
					newLocation = './upload/' + filename

				// copiamos al archivo de la dirección temporal en la carpeta fija 	
				fsextra.copy(temPath,newLocation, function (err) {
					return(err) ? console.log(err) : console.log("el archivo se subió correctamente") 
				})
			})

		return
	}
	
}

http.listen(3000)

console.log("servidor corriendo en el puerto 3000")