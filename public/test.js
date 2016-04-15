// (function() {
	console.log(functions);
	for(var i = 0; i < functions.length; i++) {
		for(var j = 0; j < 10; j++) {
			var color = functions[j]();
			console.log(functions[j] + ': ' + color);
		}

		for(var j = 0; j < 10; j++) {
			var int = functions[j](1, 10);
			console.log(functions[j] + ': ' + int);
		}
	}
// })();