/*
====================================================================================
I DELETED the following so I wouldn't have to upload it to github.
-----
node_modules (directory)
package.json
package-lock.json


Run these commands to in the terminal:
-----
npm init -y
npm install request

====================================================================================
*/



// const fs = require('fs');
// console.log(typeof fs);

// fs.writeFile('./hello.txt', 'Hello!', function() {
//   console.log('done creating file');
// });




// const daysOfWeek = require('./days-of-week');
// console.log(daysOfWeek);





// Don't specify path when module is in node_modules
const request = require('request');

// console.log(request)

request(
	'http://jsonplaceholder.typicode.com/users',
	function(err, res, body) {
		console.log(body);
	}
);

