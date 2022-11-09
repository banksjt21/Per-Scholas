

/*

Practice - Modules #2
A module named "circle" that exports two functions:

area: Computes the area of a circle (radius squared X Pi), with the radius provided as an argument.
circumference: Computes the circumference of a circle (radius X 2 X Pi), with the radius provided as an argument.
Hint: This is JS, so Math.PIis available.

  const circle = require('./utilities/circle');
  console.log( circle.area(50) );  // 7853.98...
  console.log( circle.circumference(75) );  // 471.23...

*/


const circle = require('./utilities/circle');
console.log( circle.area(50) );  // 7853.98...
console.log( circle.circumference(75) );  // 471.23...