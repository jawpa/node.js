// verificamos si  un archivo existe, mostramos el contenido en consola
// luego lo copiamos a otro archivo
'use strict'

var fs = require('fs');


const file = '../assets/numeros.txt';

// Check if the file exists in the current directory.
fs.access(file, fs.constants.F_OK, function (err) {
	if(err){
		console.log('el archivo no existe');
	}else{
		console.log('el archivo existe');
	}
}); 

// chequeamos si es leíble
fs.access(file, fs.constants.R_OK, function (err) {
	if(err){
		console.log(`${file} no es leíble`)
	}
	// callback hell
    else{
    	fs.readFile(file,'utf8', function (err, data) {
		  if (err) throw err;
		  // como es leíble, mostramos el contenido por consola
		  console.log(data);
		  // callback hell
		  fs.writeFile('../assets/message.txt', data, 'utf8', function (err) {
			if (err) throw err;
				// copiamos el contenido a otro archivo
			  console.log('The file has been saved!');
			});
		});
    }
});