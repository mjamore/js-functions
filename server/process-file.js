// Library dependencies
var fs = require('fs'),
	path = require('path');


// Require other JS files
var functionDefinitions = require(__dirname + '/../public/function-definitions.js');


// Locally scope copies of external objects
var functions = functionDefinitions.functions;


// Export functions
module.exports = {
	writeContentsToFile: function(fileContents) {
		var filename = path.join(__dirname, '/../public/helper-functions.js');
		fs.writeFileSync(filename, fileContents);
	},
	buildString: function(body) {
		var keys = Object.keys(body),
			fileContents = "var functions = [" + keys + "];\n";

		// loop through desired functions and build string
		for (var i = 0; i < keys.length; i++) {
			fileContents += 'var ' + keys[i] + ' = function(';

			if( functions[keys[i]].numberOfParameters = 0 ) {
				fileContents += ') {';
			}
			else {
				// if there are function parameters, build out the parameter list in a string
				var parameters = '';
				for(var j = 0; j < functions[keys[i]].parameters.length; j++) {
					parameters += functions[keys[i]].parameters[j] + ',';
				}
				parameters = parameters.slice(0, -1);

				fileContents += parameters + ') {';
			}

			fileContents += functions[keys[i]].code;
			fileContents += '}\n';
		}

		return fileContents;
		console.log(fileContents);
	}
}