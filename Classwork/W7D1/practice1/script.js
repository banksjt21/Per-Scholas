/*
Practice - Modules #1
Create two separate modules:

A module named "random" that has a function assigned to the module.exports and returns a random number, as an integer, between two numbers provided, inclusive, as arguments; so that we could use it in our program like this:

  const random = require('./utilities/random');
  for (let i = 0; i < 10; i++) {
  	console.log( random(100, 200) );
  }
*/




// 1) We need a module aka a JS file called random






const random = require('./utilities/random');

for (let i = 0; i < 10; i++) {
    console.log( random.getRandom(100, 200) );
}




const { getRandom2 } = require('./utilities/random');

for (let i = 0; i < 10; i++) {
    console.log( getRandom2(1, 10) );
}



