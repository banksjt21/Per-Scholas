/*
EXERCISE 1: Write a Function Declaration
Write a function named computeAreausing the function declaration approach.
It will have two parameters: width& height.
It will compute the area of a rectangle (width X height) and return a string in the following form:
The area of a rectangle with a width of _ and a height of _ is ___ square units.
Invoke the function to test it.




EXERCISE 2: Write a Function Expression
Write a function named planetHasWaterusing the function expression syntax.
It will have one parameter: planet.
Return trueif the planetargument is either "Earth" or "Mars", otherwise return false.
Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).
Invoke the function a couple of times to test it!




FUNCTION REVIEW QUESTIONS
❓ How many different ways are there to define a function?
Answer = 2
❓ What's the only practical difference between a function definition and a function expression?
Answer = function definition hoists by default, function expression will not be hoisted
*/




// Exercise 1: Write a Function Declaration
function computeArea (width, height) {
    let area = width * height;
    return "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + area + " square units.";
}
console.log(computeArea(20,15));


// Exercise 2: Write a Function Expression
let planetHasWater = (planet) => {
    planet = planet.toLowerCase();
    if(planet === "earth" || planet === "mars"){
        console.log(planet);
        return true;
    } else {
        return false;
    }
}
console.log(planetHasWater("EaRth"));