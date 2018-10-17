
'use strict'

var http = require('http');

function webServer(req,res) {
	res.writeHead(200,{'Content-Type':'text/html'})
	res.end('<h1>hola mundo</h1>')
}

 
http.createServer(webServer).listen(3000,"localhost")

console.log("server running at http://localhost:3000/")
