var EventEmitter = require('events'),
		inherits = require('util').inherits

//constructor
var Clock = function ()
{
	setInterval(()=>{
		console.log('hola')
		this.emit('tictac')
	}, 1000)	
}

inherits(Clock, EventEmitter)

Clock.prototype.theTime = function ()
{
	var date = new Date(),
		hrs = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds(),
		msg = `${hrs} : ${min} : ${sec}`

	//console.log(msg)
	return 'chau'
}

// Clock.prototype.theTime = function() {
  
//     console.log('Hi, I am ');
  
// };

var cucu = new Clock()


cucu.on('titac', function () {
	cucu.theTime();
})


