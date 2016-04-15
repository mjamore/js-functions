(function() {
	$(document).ready(function() {
		var markup = '',
			selectors = {
				tbody: $('tbody')
			};

		for(key in functions) {
			// Build up markup
			markup += '<tr class="row"><td><div class="checkbox"><input id="' + key + '" name="' + key + '" type="checkbox" value="' + key + '"><label for="' + key + '">' + functions[key].methodSignature + '</label></div></td><br><td><div class="description">' + functions[key].description + '</div></td></tr>';
		}

		// Place markup in the DOM
		selectors.tbody.append(markup);

		// When user clicks 'download' button, write functions to .js file
		// var checked = $(':checked');
		
		// $('form').on('submit', function(e) {
		// 	e.preventDefault();
		// 	console.log('form submitted');
		// 	$.ajax({
		// 		url: 'http://localhost:5005/',
		// 		method: 'POST',
		// 		dataType: 'text',
		// 		type: 'POST',
		// 		data: data,
		// 		processData: false,
		// 		contentType: 'application/x-www-form-urlencoded'

		// 	}).done(function(data) {
		// 		console.log(data);
		// 	});
		// });

		// Download newly created file in the browser
	});
})();