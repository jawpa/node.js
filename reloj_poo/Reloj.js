'use strict'

class Reloj{
	constructor(){
		setInterval(() => {
			this.darHora()
		},1000)

	}

 	

	darHora() {
		var date = new Date(),
			horas = date.getHours(),
			minutos = date.getMinutes(),
			segundos = date.getSeconds(),
			mensaje = horas + ':' + minutos + ':' + segundos

		console.log(mensaje)
	}

	
}


// tenemos que exportar la clase ya inicializada
// lista para utilizar
module.exports  = new Reloj()
