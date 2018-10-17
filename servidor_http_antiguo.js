// creamos una variable del módulo que requerimos
var http = require('http');

// el objeto http tiene dos métodos:
// creatrServer
// petición al servidor: req
// respuesta del servidor: res
// y el método listen, que tiene dos parámetros:
// el puerto: 1337
// y la dirección ip del broadcast, la de loop, la que se reconoce a sí 
http.createServer(function (req,res) {
	// si tiene éxito el pedido, escribimos texto plano
	res.writeHead(200,{'Content-Type':'text-plain'})
	// este es el contenido
	res.end('hola mundo')
}).listen(1337,"127.0.0.1")

console.log("server running at http://127.0.0.1:1337/")

// en un navegador ponemos: http://127.0.0.1:1337
// y obtendremos en la pantalla:hola mundo