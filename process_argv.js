'use strict'

// process.argv es un arreglo que tiene los dos primeros valores definidos
// el primer arumento de process argv es : la ruta dónde se está ejecutando node
// el segundo es: el archivo que se está ejecutando en estos momentos
// a los otros se los puede llenar libremente:
process.argv[2] = "hola mundo"
process.argv[3] = true
process.argv[4] = null
process.argv[5] = 23

var key = 0
// mientras haya  clave en el argumento
for(key in process.argv){
	console.log(process.argv[key]);	
}
