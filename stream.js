// un stream es un chorro de información
// se transmiten en pedazos, chunck
// ejemplo: cargar un pdf
// hay de tres tipos: lectura, escritura, duplex
// es un event emitter
// acceso asíncrono
// es raro crear streams directamente
// muchos recursos no ofrecen este interfaz
// está detrás de muchos mecanismos de node.js
// stdin/stout
// request de http
// sockets
// manipulación de ficheros/imágenes

'use strict'

// requerimos el módulo file-system de node.js
var fs = require('fs')

// guardamos en un variable un chorro de informacion
var readStream = fs.createReadStream('assets/numeros.txt')

// escribimos el chorro de información
var writeStream = fs.createWriteStream('assets/copiaNumeros.txt')

// método pipe
// nos abre el proceso de lectura-escritura de archivos
readStream.pipe(writeStream)
// realiza la copia del archivo

// le asignamos dos eventos al readStream
// usamos el método on para asignar estos eventos
// mientras haya datos ejecutamos la función
// que imprime los pedazos en la consonla
readStream.on('data',function (chunck) {
	console.log('caracteres leídos: ' ,chunck.length)
})

// cuando terminó de leer el archivo, escribimos el mensaje
readStream.on('end',function () {
	console.log("archivo leído")
})