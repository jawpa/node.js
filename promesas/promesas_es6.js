'use strict'

var fs = require('fs');

const file = '../assets/numeros.txt',
	  newFile =  '../assets/message4.txt';	

	  			// dentro de las parántesis del promise siempre existe una función	
var promise = new Promise( (resolve,reject) => {
		fs.access(file,fs.F_OK, (err) => { 
			return (err) ? reject(new Error('El archivo no existe')) : resolve(true);
		});
});


promise
		// internamente todo los den tienen una function (resolve, rejects)
		.then( (resolve, reject) => {
			console.log('el archivo existe');

			return new Promise(function (resolve,reject) {
				fs.readFile(file,'utf8', (err, data) => {
					return (err) ? reject(new Error('El archivo no se pudo leer')) : 
								   resolve(data);
				})
			});

		})
		
		// el resultado de una proomesa se convierte en la entrada de la otra
		// resolve guarda el valor de la promesa anterior
		.then( (resolve, reject) => {
			console.log('el archivo se ha leído exitosamente');

			return new Promise(function (resolve,reject) {
				// los datos del parámetro resolve provienen de la promesa anterior
				fs.writeFile(newFile, resolve, 'utf8', (err) => {
					return (err) ? reject(new Error('El archivo no se pudo escribir')) : 
								   resolve('el archivo se ha copiado con éxito');
				})
			});
			
		})
		.then( (resolve, reject) => {
			console.log(resolve);
		} )
		.catch( (err) => { err.message });