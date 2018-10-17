'use strict'

// simulando la lógica de un programa de inteligencia artificial
// process.stdout es un stream de escritura
// process.stdout y process.stdin permite interactual al usuario con la consola

var stdin = process.stdin,
	stdout = process.stdout,
	person = {
		name : null,
		age : 0
	}

function saveAge(age) {
	person.age = age

	if (person.age >= 18) {
		stdout.write(person.name + ' es mayor de edad, tiene ' + person.age + ' años\n')
	}else{
		stdout.write(person.name + ' es menor de edad, tiene ' + person.age + ' años\n')
	}

	// sale de la ejecución del programa
	// si quisiéramos hacer más preguntas, en vez de salir llamos a la función quiz
	process.exit()
}

function saveName(name) {
	person.name = name

	var question = 'Hola ' + person.name + ', ¿cuántos años tenés?'

	// ejecuta de nuevo a la funciòn quiz
	quiz(question,saveAge);
}

function quiz(question,callback) {
	// permite leer lo que el usuario escribe en la terminal de comando
	stdin.resume()
	// escribimos en la terminal de comandos
	stdout.write(question + ': ')

	// ejecuta una función sólo una vez mientras haya datos
	// esa función espera una respuesta
	// y la función es la que se le pasa por argumento
	// a la respuesta la convierte en cadena de texto y le saca las comillas
	stdin.once('data', function (res) {
		callback(res.toString().trim())
	})
}

// codificamos todo lo que entre desde la consila lo codificamos a utf8
stdin.setEncoding('utf8')

// le pasamos 
quiz('¿Cómo te llamás?',saveName)