const request = require('request');

request(process.argv[2], (error, response, body) => {
	if (!error) {
		console.log(body);
	}
	else {
		console.log(error);
	}
})