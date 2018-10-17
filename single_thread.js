'use strict'

// cada cosa que le quiera agregar al hilo único de node
// puede ejecutarlo en el método process


function singleThread(argument) {
	console.log('El Proceso de Node:')
	console.log('Id del proceso: ' + process.pid)
	console.log('Título: ' + process.title)
	console.log('Directorio del Node: ' + process.execPath)
	console.log('Directorio Actual: ' + process.cwd())
	console.log('Versión des Node: ' + process.version)
	console.log('Versiones de Dependencias: ' + process.versions)
	console.log('Plataforma (so): ' + process.platform)
	console.log('Arquitectura (so): ' + process.arch)
	console.log('Tiempo activo del Node: ' + process.uptime())
	console.log('Argumentos del Proceso: ' + process.argv)
}

singleThread()


