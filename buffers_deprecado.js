// buffers:
// una tira de bytes (datos binarios)
// comportamiento muy similar a un array de enteros
// se puede enviar cualquier tipo de información 
// tamaño fijo

// se usan para:
// manipular (transmitir) datos (objetos) directamente, como: 
//sockets (permite comunicación bidireccional, para construirt apps en real time), 
// streams (permiten enviar información, la manera en como se lee-escribe-modifica 
// un archivo en el disco dura es a través de streams), 
// implementar protocolos complejos (http, ftp, pop,etc), 
// manipulación de ficheros/imágenes, 
// criptografía

'use strict'

// declaramos un beffer de 100 posiciones 
var buffer = new Buffer(100);

// declaramos un beffer de 36 posiciones 
var buffer2 = new Buffer(36);

// declaramos una cadena de texto con caracteres especiales
var cadena = '\u00bd + \u00bc = \u00be';


// el método write necesita como parámetros:
// una cadena de texto
// un offset, un número, 0 por default
// length, número de posiciones que tendrá el buffer
// el tipo de codificación
buffer.write('abcd',0,4,'ascii');

console.log(buffer);

// obtenemos un buffer con datos binarios:
//<Buffer 61 62 63 64 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
// 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
//  00 00 00 00 00 00 00 ... >


// lo queremos ver en cadena de texto
// y en código ascii
console.log(buffer.toString(), buffer.toString('ascii'));
// obtenemos:
// abcd abcd

console.log(cadena);
// obtenemos:
//½ + ¼ = ¾


// calculamos el largo de la cadena cadena:
console.log(cadena.length)
// obtenemos: 9

console.log(Buffer.byteLength(cadena,'utf8'))
// obtenemos: 12, porque ocupa doce bytes


var i = 0
// mientras i mantenga el valor del largo del buffer 
for (var i = 0; i < buffer2.length; i++) {
	// i en código ascii es el caracter a
	buffer2[i] = i + 97;
}

// lo mostramos en ascii
console.log(buffer2.toString('ascii'));
// obtenemos:
// abcdefghijklmnopqrstuvwxyz{|}~
