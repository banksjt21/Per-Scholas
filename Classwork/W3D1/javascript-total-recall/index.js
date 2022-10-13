//  W3D1 - Javascript Total Recall

/*  ===========================================================================
    I.  VARIABLES & DATATYPES
===============================================================================
To answer these questions, you can add them in a multiline comment section 
inside of script.js like this:

1.  How do we assign a value to a variable? A. With the assignment operator
2.  How do we change the value of a...
...
===========================================================================  */
console.log("===============================================================================");
console.log("I.  VARIABLES & DATATYPES");
console.log("===============================================================================");




/*  =======================================================
    A) Q + A
===========================================================
=======================================================  */
console.log("=====================================================");
console.log("A) Q + A");
console.log("=====================================================");
console.log("See questions and answers in the file.")
/*
1.  How do we assign a value to a variable?
    //  The assignment operator (=)
    //  let variable = value;

2.  How do we change the value of a variable?
    //  We can change the value of a variable with the different operators such as arithmetic (+, -, *, /)

3.  How do we assign an existing variable to a new variable?
    //  The value of a variable can be assignment with the assignment operator (=)

4.  Remind me, what are declare, assign, and define?
    //  Variables can be declared with the var, let, and const keywords without a value
    //  Variables can be assigned with the assignment operator (=)
    //  Variables can be defined with the var, let, and const keywords with a value

5.  What is pseudocoding and why should you do it?
    //  Writing code in human readable form without a specific syntax.
    //  Pseudocode can be used to write detailed steps for creating an application with code.
    //  Pseudocode can also be presented to non-developers to explain how the app is made and will work.

6.  What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    //  50%
*/
console.log("=====================================================\n\n");





/*  =======================================================
    B) Strings
===========================================================
For all other questions that involve writing code, 
you can solve them via the following instructions.
=======================================================  */
console.log("=====================================================");
console.log("B) STRINGS");
console.log("=====================================================");

//  1.  Create a variable called firstVariable
let firstVariable;

//  2.  Assign it the value of the string "Hello World"
firstVariable = "Hello World";

//  3.  Change the value of this variable to some number
firstVariable = 6;

//  4.  Store the value of firstVariable in a new variable called secondVariable
secondVariable = firstVariable;

//  5.  Change the value of secondVariable to any string.
secondVariable = "Any string"

//  6.  What is the value of firstVariable?
6

//  7.  Create a variable called yourName and set it equal to your name as a string. 
//      Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
//      ex: Hello, my name is Jean Valjean
const yourName = "Jermaine";
console.log(`Hello, my name is ${yourName}.`);

console.log("=====================================================\n\n");




/*  =======================================================
    C) Booleans
===========================================================
- Using the provided variable definitions, replace the blanks 
so that all log statements print true in the console. 
- Answers should be all be valid JS syntax and not weird things 
that don't make sense but happen to print true to the console
=======================================================  */
console.log("=====================================================");
console.log("C) Booleans");
console.log("=====================================================");

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');

// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false);
// console.log(e === 'Kevin');
// console.log(a != b - c);    // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a < a + d);     // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

console.log("=====================================================\n\n");




/*  =======================================================
    D) The Farm
===========================================================
Declare a variable animal. Set it to be either "cow" or something else.
Write code that will print out "mooooo" if the it is equal to cow.
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow." Commit
=======================================================  */
console.log("=====================================================");
console.log("D) The Farm");
console.log("=====================================================");

// let cow = "cow";
// if(cow === "cow") {
//     console.log("mooooo");
// } else {
//     console.log("Hey! You're not a cow.")
// }

console.log("=====================================================\n\n");



/*  =======================================================
    E) Driver's Ed
===========================================================
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, 
or, if the age is younger than 16, a message should print "Sorry, you're too young."
=======================================================  */
console.log("=====================================================");
console.log("E) Driver's Ed");
console.log("=====================================================");

// let age = 17;
// if(age >= 16) {
//     console.log("Here are the keys!");
// } else {
//     console.log("Sorry, you're too young.");
// }

console.log("=====================================================\n\n\n\n\n\n");





/*  ===========================================================================
    II. Loops
===============================================================================
- Remember: USE let when you initialize your for loops!
- This is GOOD: for(let i = 0; i < 100; i++)
- This is NO GOOD: for(i = 0; i < 100; i++)
===========================================================================  */
console.log("===============================================================================");
console.log("II.  LOOPS");
console.log("===============================================================================");

/*  =======================================================
    A) The Basics
===========================================================
- Write a loop that will print out all the numbers from 0 to 10, inclusive
- Write a loop that will print out all the numbers from 10 up to and including 400
- Write a loop that will print out every third number starting with 12 and going no higher than 4000
=======================================================  */
console.log("=====================================================");
console.log("A) The Basics");
console.log("=====================================================");

// Write a loop that will print out all the numbers from 0 to 10, inclusive
// for(let a = 0; a <= 10; a++) {
//     console.log(a);
// }

// Write a loop that will print out all the numbers from 10 up to and including 400
// for(let b = 10; b <= 400; b++) {
//     console.log(b);
// }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for(let d = 12; d <= 4000; d += 3) {
//     console.log(d);
// }

console.log("=====================================================\n\n");




/*  =======================================================
    B) Get Even
===========================================================
- Print out the numbers that are within the range of 1 - 100
- Adjust your code to add a message next to even numbers only 
that says: "<-- is an even number"
=======================================================  */
console.log("=====================================================");
console.log("B) Get Even");
console.log("=====================================================");
// for(let e = 1; e <= 100; e++) {
//     if(e % 2 === 0) {
//         console.log(`${e} <-- is an even number`);
//     } else {
//         console.log(e);
//     }
// }
console.log("=====================================================\n\n");




/*  =======================================================
    C) Give Me Five
===========================================================
For the numbers 0 - 100, print out "I found a number. High five!" 
if the number is a multiple of five

    Example Output:
        I found a 5. High five!
        I found a 10. High five!


Add to the code from above to print out "I found a number. Three is a crowd" 
if the number is a multiple of three
    
    Example Output:
        I found a 3. Three is a crowd
        I found a 5. High five!
        I found a 6. Three is a crowd
        I found a 9. Three is a crowd
        I found a 10. High five!

For numbers divisible by both three and five, be sure your code prints both messages
=======================================================  */
console.log("=====================================================");
console.log("C) Give Me Five");
console.log("=====================================================");
// for(let f = 0; f <= 100; f++) {
//     if(f === 0) {
//         continue;
//     }
//     if(f % 3 === 0) {
//         console.log(`I found a ${f}. Three is a crowd.`);
//     }
//     if(f % 5 === 0) {
//         console.log(`I found a ${f}. High five!`);
//     }
// }
console.log("=====================================================\n\n");




/*  =======================================================
    D) Savings Account
===========================================================
- Write code that will save the sum of all the numbers 
between 1 - 10 to a variable called bank_account.
- Check your work! Your bank_account should have $55 in it.
=======================================================  */
console.log("=====================================================");
console.log("D) Savings Account");
console.log("=====================================================");
// let bank_account = 0;
// let g = 1;
// while (g <= 10) {
//     bank_account += g;
//     g++;
// }
// console.log(bank_account);


/*  =======================================================
- You got a bonus! Your pay is now doubled each week. 
- Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
- Check your work! Your bank_account should have $10,100 in it.
=======================================================  */
// let new_bank_account = 0;
// let h = 1;
// while(h <= 100) {
//     new_bank_account += (h * 2);
//     h++;
// }
// console.log(new_bank_account);
console.log("=====================================================\n\n");




/*  ===========================================================================
    III. ARRAYS & CONTROL FLOW
===========================================================================  */
console.log("===============================================================================");
console.log("III.  ARRAYS & CONTROL FLOW");
console.log("===============================================================================");

/*  =======================================================
    A) Talk About It:
=======================================================  */
console.log("=====================================================");
console.log("A) Talk About It");
console.log("=====================================================");
console.log("See questions and answers in the file.")
/*
1.  What are the things in an array called?
    //  Elements
2.  Do Arrays guarantee those things will be in order?
    //  Yes
3.  What real-life thing could you model with an array?
    //  Students in class. Classes in a school.
*/
console.log("=====================================================\n\n");




/*  =======================================================
    B) Easy Does It
===========================================================
- Create an array that contains three quotes and store 
  it in a variable called quotes
=======================================================  */
console.log("=====================================================");
console.log("B) Easy Does It");
console.log("=====================================================");
// const quotes = [];

// quotes.push("Study hard.");
// quotes.push("Work hard.");
// quotes.push("Party harder!");

// console.log(quotes);
console.log("=====================================================\n\n");




/*  =======================================================
    C) Accessing Elements
===========================================================
- Given the following array:
- const randomThings = [1, 10, "Hello", true]
=======================================================  */
console.log("=====================================================");
console.log("C) Accessing Elements");
console.log("=====================================================");
// //  1. How do you access the 1st element in the array?
// randomThings[0];

// //  2. Change the value of "Hello"to "World"
// randomThings[2] = "World";

// //  3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings);
console.log("=====================================================\n\n");




/*  =======================================================
    D) Change Values
===========================================================
- Given the following array:
- const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
=======================================================  */
console.log("=====================================================");
console.log("D) Change Values");
console.log("=====================================================");

// //  1. What would you write to access the 3rd element of the array?
// ourClass[2];

// //  2. Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";

// //  3. Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City");
// console.log(ourClass);
console.log("=====================================================\n\n");



/*  =======================================================
    E) Mix It Up
===========================================================
- Note: You don't really need .splice()for these. 
- You could use it, but there are simpler array methods that are more appropriate.
- Given the following array: 
- const myArray = [5, 10, 500, 20]
=======================================================  */
console.log("=====================================================");
console.log("E) Mix It Up");
console.log("=====================================================");
// //  1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("Aegon", "Testing");

// //  2. Remove the 5 from the beginning of the array.
// myArray.shift();

// //  3. Add the string "Bob Marley" to the beginning of the array.
// myArray.unshift("Bob Marley");

// //  4. Remove the string of your choice from the end of the array.
// myArray.pop();

// //  5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
// myArray.reverse();
// console.log(myArray);
// // The array is mutated b/c the order of the elements are reversed. A reference to the same array is returned.
console.log("=====================================================\n\n");




/*  =======================================================
    F) Biggie Smalls
===========================================================
- Create a variable that contains an integer.
- Write an if ... elsestatement that:
  1. console.log()s "little number" if the number is entered is less than 100
  2. console.log()s "big number" if the number is greater than or equal to 100.
=======================================================  */
console.log("=====================================================");
console.log("F) Biggie Smalls");
console.log("=====================================================");
// let numA = 100;

// if(numA < 100) {
//     console.log(`little number`);
// } else {
//     console.log(`big number`);
// }
console.log("=====================================================\n\n");




/*  =======================================================
    G) Monkey in the Middle
===========================================================
- Write an if ... else if ... elsestatement
  1. console.log() little number if the number entered is less than 5.
  2. If the number entered is more than 10, log big number.
  3. Otherwise, log "monkey".
=======================================================  */
console.log("=====================================================");
console.log("G) Monkey In The Middle");
console.log("=====================================================");
// let numB = 7;
// if (numB < 5) {
//     console.log("little number");
// } else if (numB > 10) {
//     console.log("big number");
// } else {
//     console.log("monkey");
// }
console.log("=====================================================\n\n");




/*  =======================================================
    H) What's in Your Closet?
===========================================================
- Below, we've given you examples of Kristyn and Thom's 
  closets modeled as data in JavaScript
=======================================================  */
console.log("=====================================================");
console.log("H) What's in Your Closet?");
console.log("=====================================================");

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];


// //  1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
// //     log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log(`Kristyn is rocking that ${kristynsCloset[2]}!`);

// //  2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset);

// //  3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset[5] = "stained " + kristynsCloset[5];
// console.log(kristynsCloset[5]);

// //  4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// console.log(thomsCloset[0][0]);

// //  5. In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][0]);

// //  6. Access one item from Thom's accessories array.
// console.log(thomsCloset[2][1]);

// //  7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`);

console.log("=====================================================\n\n");



/*  ===========================================================================
    IV. FUNCTIONS
===========================================================================  */
console.log("===============================================================================");
console.log("IV. FUNCTIONS");
console.log("===============================================================================");

/*  =======================================================
    A. printGreeting
===========================================================
- Do you think you could write a function called printGreeting with a parameter name 
  that returns a greeting with the argument interpolated into the greeting? Like so?

- console.log(printGreeting("Slimer"));
  => Hello there, Slimer!

- You think you could? I think so too. Feel free to skip this problem, because you've already done it. 
- If you've done the problem twice, read entire problems carefully before doing them from now on.
=======================================================  */
console.log("=====================================================");
console.log("A) printGreeting");
console.log("=====================================================");

// function printGreeting(name) {
//     return `Hello there, ${name}!`;
// }
// console.log(printGreeting("Slimer"));

console.log("=====================================================\n\n");




/*  =======================================================
    B. printCool
===========================================================
- Write a function printCool that accepts one parameter, nameas an argument. 
- The function should print the name and a message saying that that person is cool.

- console.log(printCool("Captain Reynolds"));
  => "Captain Reynolds is cool";
=======================================================  */
console.log("=====================================================");
console.log("B) printCool");
console.log("=====================================================");

function printCool(name) {
    return `${name} is cool`;
}
console.log(printCool("Captain Reynolds"));

console.log("=====================================================\n\n");




/*  =======================================================
    C) calculateCube
===========================================================
- Write a function calculateCube that takes a single number 
  and prints the volume of a cube made from that number.

- console.log(calculateCube(5));
  => 125
=======================================================  */
console.log("=====================================================");
console.log("C) calculateCube");
console.log("=====================================================");

// function calculateCube(num) {
//     return Math.pow(num, 3);
// }
// console.log(calculateCube(5));

console.log("=====================================================\n\n");




/*  =======================================================
    D) isVowel
===========================================================
- Write a function isVowelthat takes a character (i.e. a string of length 1) 
  and returns true if it is a vowel, false otherwise. 
- The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. 
- In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

- console.log(isVowel("a"));
  => true
=======================================================  */
console.log("=====================================================");
console.log("D) isVowel");
console.log("=====================================================");

// function isVowel(char) {
//     let vowels = "aeiou";

//     for(let x = 0; x < vowels.length; x++) {
//         if (vowels[x] === char.toLowerCase()) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log(isVowel("O"));

console.log("=====================================================\n\n");




/*  =======================================================
    E) getTwoLengths
===========================================================
- Write a function getTwoLengths that accepts two parameters (strings). 
- The function should return an array of numbers where each number is the length of the corresponding string.

- console.log(getTwoLengths("Hank", "Hippopopalous"));
  => [4, 13]
=======================================================  */
console.log("=====================================================");
console.log("E) getTwoLengths");
console.log("=====================================================");

// function getTwoLengths(str1, str2) {
//     let strLengths = [];
//     strLengths.push(str1.length);
//     strLengths.push(str2.length);
//     return strLengths;
// }
// console.log(getTwoLengths("Kobe", "Bryant"));

console.log("=====================================================\n\n");




/*  =======================================================
    F) getMultipleLengths
===========================================================
- Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
- The function should return an array of numbers where each number is the length of the corresponding string.

- console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
  => [5, 4, 2, 2, 4]
=======================================================  */
console.log("=====================================================");
console.log("F) getMultipleLengths");
console.log("=====================================================");

// function getMultipleLengths(arrOfStrings) {
//     let newArray = [];

//     for(let r = 0; r < arrOfStrings.length; r++) {
//         newArray.push(arrOfStrings[r].length);
//     }
//     return newArray;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

console.log("=====================================================\n\n");




/*  =======================================================
    G) maxOfThree
===========================================================
- Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
- If all numbers are the same, it doesn't matter which one is returned. 
- If the two largest numbers are the same, one of them should be returned.
- Be sure to test it with larger values in each of the three locations.

- console.log(maxOfThree(6, 9, 1));
  => 9

- Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! 
- However, for this particular question, we need you to submit a solution that does not use Math.max().
=======================================================  */
console.log("=====================================================");
console.log("G) maxOfThree");
console.log("=====================================================");

// function maxOfThree(numA, numB, numC) {
//     let longest;

//     if(numA >= numB) {
//         longest = numA;
//     } else if (numB >= numC) {
//         longest = numB;
//     } else {
//         longest = numC;
//     }

//     return longest;
// }
// console.log(maxOfThree(5, 12, 3));

console.log("=====================================================\n\n");




/*  =======================================================
    H) printLongestWord
===========================================================
//  Write a function printLongestWord that accepts a single argument, an array of strings. 
//  The method should return the longest word in the array. 
//  In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
=======================================================  */
console.log("=====================================================");
console.log("H) printLongestWord");
console.log("=====================================================");

// function printLongestWord(arrayOfStrings) {
//     let longestWord = "";

//     arrayOfStrings.forEach(function(str) {
//         if(str.length >= longestWord.length) {
//             longestWord = str;
//         }
//     });

//     return longestWord;
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

console.log("=====================================================\n\n");



/*  ===========================================================================
    V. OBJECTS
===============================================================================
- Let's set up an object data structure. 
- Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. 
- The object data structure is a good way to organize the data from our user.
===========================================================================  */
console.log("===============================================================================");
console.log("V. OBJECTS");
console.log("===============================================================================");


/*  =======================================================
    A) Make a User Object
===========================================================
- 1. Create an object called user.
- 2. Write in to the object the key-value pairs for name, email, age, and purchased. 
     - Set the value of purchased to an empty array []. 
     - Set the other values to whatever you would like.
=======================================================  */
console.log("=====================================================");
console.log("A) Make a User Object");
console.log("=====================================================");

// const user = {
//     name      : "Tom",
//     age       : 26,
//     email     : "tom@gmail.com",
//     purchased : []
// }

// console.log(user);

console.log("=====================================================\n\n");


/*  =======================================================
    B) Update the User
===========================================================
- 1. Our user has changed his or her email address. 
     Without changing the original userobject, update the emailvalue to a new email address.
- 2. Our user has had a birthday! Without changing the original userobject, 
     increment the agevalue using the postfix operator. Hint: age++
=======================================================  */
console.log("=====================================================");
console.log("B) Update the User");
console.log("=====================================================");

// user.email = "newTom@gmail.com";
// console.log(user.email);

// user.age++;
// console.log(user.age);

console.log("=====================================================\n\n");




/*  =======================================================
    C) Adding Keys and Values
===========================================================
- You have decided to add your user's location to the data that you want to collect.
- 1. Without changing the original user object, add a new key location to the object, 
     and give it a value or some-or-other location (a string).
=======================================================  */
console.log("=====================================================");
console.log("C) Adding Keys and Values");
console.log("=====================================================");

// user.location = "New Zealand";
// console.log(user.location);

console.log("=====================================================\n\n");




/*  =======================================================
    D) Shopaholic!
===========================================================
- 1. Our user has purchased an item! They have purchased some "carbohydrates". 
     Using .push(), add the string "carbohydrates" to the purchasedarray.
- 2. Our user has purchased an item! They have purchased some "peace of mind". 
     Using .push(), add the string "peace of mind" to the purchasedarray.
- 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". 
     Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
- 4. Console.log just the "Merino jodhpurs" from the purchasedarray.
=======================================================  */
console.log("=====================================================");
console.log("D) Shopaholic!");
console.log("=====================================================");

// user.purchased.push("carbohydrates");
// user.purchased.push("peace of mind");
// user.purchased.push("Merino jodhpurs");
// console.log(user.purchased[2]);

console.log("=====================================================\n\n");




/*  =======================================================
    E) Object-Within-Object
===========================================================
- Remember that you can add an object to an existing object in the same 
  way that you can add any new property/value pair.
- If we want to give our user a friend with a name and age, we could write:

    user.friend = {
        name: "Grace Hopper",
        age: 85
    }

- When we console.log user, we would see the friendobject added to our user object.
- 1. Write a friend object into your userobject and give the friend a name, age, location, and purchased array (empty for now)
- 2. Console.log just the friend's name
- 3. Console.log just the friend's location
- 4. CHANGE the friend's age to 55
- 5. The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
- 6. The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
- 7. Console.log just "A latte" from the friend's purchasedarray.
=======================================================  */
console.log("=====================================================");
console.log("E) Object-Within-Object");
console.log("=====================================================");

// // 1
// user.friend = {
//     name      : "Jerry",
//     age       : 6,
//     location  : "Japan",
//     purchased : []
// }

// // 2
// console.log(user.friend.name);

// // 3
// console.log(user.friend.location);

// // 4
// user.friend.age = 55;
// console.log(user.friend.age);

// // 5
// user.friend.purchased.push("The One Ring");

// // 6
// user.friend.purchased.push("A latte");

// // 7
// console.log(user.friend.purchased[1]);

console.log("=====================================================\n\n");




/*  =======================================================
    F) Loops
===========================================================
- 1. Write a for loop that iterates over the User's purchasedarray 
     (NOT the friend's purchased array), and prints each element to the console.
- 2. Write a for loop that iterates over the Friend's purchasedarray, 
     and prints each element to the console.
=======================================================  */
console.log("=====================================================");
console.log("F) Loops");
console.log("=====================================================");

// // 1
// for(let j = 0; j < user.purchased.length; j++) {
//     console.log(user.purchased[j]);
// }

// // 2
// for(let k = 0; k < user.friend.purchased.length; k++) {
//     console.log(user.friend.purchased[k]);
// }

console.log("=====================================================\n\n");




/*  =======================================================
    G) Functions Can Operate On Objects
===========================================================
- 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
- 2. it should increment the user's age by 1
- 3. make the user's name uppercase

- 4. The function does not need a return statement, it will merely modify the user object.
     - Write a function oldAndLoud that performs the exact same tasks as updateUser, 
       but instead of hard-coding it to only work on our userobject, 
       make it take a parameter person, and have it modify the object 
       that is passed in as an argument when the function is called. 
     - Call your oldAndLoudfunction with user as the argument.
=======================================================  */
console.log("=====================================================");
console.log("G) Functions Can Operate On Objects");
console.log("=====================================================");

// // 1 - 3
// function updateUser() {
//     user.age++;
//     user.name = user.name.toUpperCase();
// }

// updateUser();
// console.log(user.name);
// console.log(user.age);


// // 4
// function oldAndLoud(person) {
//     person.age++;
//     person.name = person.name.toUpperCase();
// }
// oldAndLoud(user);

console.log("=====================================================\n\n");




/*  ===========================================================================
    VI. CAT COMBINATOR
===============================================================================
===========================================================================  */
console.log("===============================================================================");
console.log("VI. CAT COMBINATOR");
console.log("===============================================================================");

/*  =======================================================
    1) Mama Cat
===========================================================
- Define an object called cat1that contains the following properties:
  - name
  - breed
  - age (a number)
- console.log the cat's age
- console.log the cat's breed
======================================================= */
console.log("=====================================================");
console.log("1) Mama Cat");
console.log("=====================================================");
const cat1 = {
    name  : "Max",
    age   : 3,
    breed : "Tabby"
}

console.log(cat1.name);
console.log(cat1.age);
console.log(cat1.breed);
console.log("=====================================================\n\n");




/*  =======================================================
    2) Papa Cat
===========================================================
- Define an object called cat2 that also contains the properties:
  - name
  - breed
  - age (a number)
======================================================= */
console.log("=====================================================");
console.log("2) Papa Cat");
console.log("=====================================================");
const cat2 = {
    name  : "Sam",
    age   : 4,
    breed : "Calico"
}

console.log(cat2.name);
console.log(cat2.age);
console.log(cat2.breed);
console.log("=====================================================\n\n");




/*  =======================================================
    3) Combine Cats!
===========================================================
- The cats are multiplying!
- Write a function combineCats that has two parameters mama, and papa. 
  The function will take two arguments -- each a cat object.
- Pass cat1 and cat2 as arguments to the combineCats function. 
  The function should console.log them.
======================================================= */
console.log("=====================================================");
console.log("3) Combine Cats!");
console.log("=====================================================");

function combineCats(mama, papa) {
    console.log(mama);
    console.log(papa);

    let baby = {
        name  : mama.name + papa.name,
        age   : 1,
        breed : mama.breed + "-" + papa.breed
    }

    console.log(baby);
    return baby;
}
combineCats(cat1, cat2);

console.log("=====================================================\n\n");




/*  =======================================================
    4) Cat Brain Bender
===========================================================
- Write a console.log that is three levels deep of combineCats. 
- combineCats should have two arguments, each which are combineCats, 
  each which have two arguments, each which are combineCats.
=======================================================  */
console.log("=====================================================");
console.log("4) Cat Brain Bender");
console.log("=====================================================");

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));

console.log("=====================================================\n\n");

