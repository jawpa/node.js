'use strict'

var fs = require('fs'),
	Q = require('q');

const file = '../assets/numeros444.txt',
	  newFile =  '../assets/message3.txt';	


// las funciones tendrán como argumentos la ruta
function archivo_existe() {
	// creamos el diferido de la promesa
	let defer = Q.defer()
	// consultamos si el archivo existe
	fs.access(file,fs.F_OK,function (err) {
		// si existe el error rechaza el diferido
		return (err) ? defer.reject(new Error('El archivo no existe')) : 
					   // si no existe error, resuelve la promesa
					   defer.resolve(true)
	})

	// internamente la propiedad promise tiene el reject o el resolve
	return defer.promise
}

function leer_archivo(file) {
	let defer = Q.defer();
	// leemos al archivo
	fs.readFile(file,'utf8',function (err,data) {
		return (err) ? defer.reject(new Error('El archivo no se puede leer')) : 
					   // si no existe error, resuelve la promesa
					   // le pasamos el contenido del archivo
					   defer.resolve(data)
	})

	return defer.promise
}

// argumento, ruta y datos para escribir el nuevo archivo
function escribir_archivo(newFile, dato) {
	let defer = Q.defer();
	
	console.log('el archivo existe');

	fs.writeFile(newFile, dato, 'utf8',function (err) {
		return (err) ? defer.reject(new Error('El archivo no se pudo escribir')) : 
					   // si no existe error, resuelve la promesa
					   defer.resolve('el archivo se ha copiado con éxito')
	})

	return defer.promise

}




// luego se ejecutarán las otras
archivo_existe(file)
		// agarra la propiedad promise de la función archivo_existe()
		// si da true, retorna el llamado a la segunda
		.then(function () { return leer_archivo(file)})
		// el defer.promise trae el parámetro data del método resolve
		.then(function (dataPromesa) { return escribir_archivo(newFile, dataPromesa)})
		// concluimos con la secuencia de promesas, mostrando el contenido copiado
		.then(function (dataPromesa) { console.log(dataPromesa)})
		// método para procesar los errores
		.fail(function (err) {return console.log(err.message)})