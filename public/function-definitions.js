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
	},
	'getOrdinalIndicator': {
		'methodSignature': 'getOrdinalIndicator(number)',
		'numberOfParameters': 1,
		'parameters': ['number'],
		'code': 'var string = ""; if(number == 11 || number == 12 || number == 13) {	string = "th"; } else {	var str = number.toString(), digit = str.substr(str.length -1);	if( digit == "1" ) { string = "st";	} else if( digit == "2" ) {	string = "nd"; } else if( digit == "3" ) { string = "rd"; } else { string = "th"; }	} return string;',
		'description': 'This function returns the ordinal indicator for any number that is passed into it. For example, if the number "1" is passed, the function returns the string "st". If the number "2" is passed, the function returns the string "nd". If "11" is passed, it returns "th". Etc.'
	},
	'shuffleArray': {
		'methodSignature': 'shuffleArray(array)',
		'numberOfParameters': 1,
		'parameters': ['array'],
		'code': 'var currentIndex = array.length, temporaryValue, randomIndex;	while (0 !== currentIndex) { randomIndex = Math.floor(Math.random() * currentIndex); currentIndex -= 1;	temporaryValue = array[currentIndex]; array[currentIndex] = array[randomIndex];	array[randomIndex] = temporaryValue; } return array;',
		'description': 'Fisher–Yates shuffle algorithm(http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array). This function takes an array and returns a copy of the original array with the elements in a random order.'
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