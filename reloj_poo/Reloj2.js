'use strict'

class Reloj2{
	constructor(){
		setInterval(() => {
			this.darHora()
		},1000)

	}

 	

	darHora() {
		let date = new Date(),
			am_pm = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours(),
			horas = this.ponerCero(am_pm),
			minutos = this.ponerCero(date.getMinutes()),
			segundos = this.ponerCero(date.getSeconds()),
			ampm = (date.getHours() < 12) ? 'am' : 'pm',
			mensaje = horas + ':' + minutos + ':' + segundos + ampm

		console.log(mensaje)
	}

	ponerCero(num) {
		return (num < 10) ? ('0' + num) : num		
	}

	
}


// tenemos que exportar la clase ya inicializada
// lista para utilizar
module.exports  = Reloj2
