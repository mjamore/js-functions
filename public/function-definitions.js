var functions = {
	'getRandomHexColor': {
		'methodSignature': 'getRandomHexColor',
		'numberOfParameters': 0,
		'parameters': [],
		'code': "return '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);",
		'description': 'This function returns a random color as a hex code value.'
	},
	'getRandomInteger': {
		'methodSignature': 'getRandomInteger(min, max)',
		'numberOfParameters': 2,
		'parameters': ['min','max'],
		'code': 'return Math.floor(Math.random() * (max - min + 1)) + min;',
		'description': 'This function takes a min and max value and returns a random integer between those two values. Return values can include the min and max value that are passed into the function.'
	}
}

// Make this file work in both the browser and in Node
// http://www.richardrodger.com/2013/09/27/how-to-make-simple-node-js-modules-work-in-the-browser/#.VwH6MxMrKEI
if(typeof exports !== 'undefined') {
	if(typeof module !== 'undefined' && module.exports) {
		exports = module.exports = functions;
	}
	exports.functions = functions;
}
else {
	functions = functions;
}