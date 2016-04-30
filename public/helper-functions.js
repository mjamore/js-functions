var functions = [getRandomHexColor,getRandomInteger,getOrdinalIndicator,shuffleArray];
var getRandomHexColor = function() {return '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);}
var getRandomInteger = function(min,max) {return Math.floor(Math.random() * (max - min + 1)) + min;}
var getOrdinalIndicator = function(number) {var string = ""; if(number == 11 || number == 12 || number == 13) {	string = "th"; } else {	var str = number.toString(), digit = str.substr(str.length -1);	if( digit == "1" ) { string = "st";	} else if( digit == "2" ) {	string = "nd"; } else if( digit == "3" ) { string = "rd"; } else { string = "th"; }	} return string;}
var shuffleArray = function(array) {var currentIndex = array.length, temporaryValue, randomIndex;	while (0 !== currentIndex) { randomIndex = Math.floor(Math.random() * currentIndex); currentIndex -= 1;	temporaryValue = array[currentIndex]; array[currentIndex] = array[randomIndex];	array[randomIndex] = temporaryValue; } return array;}
