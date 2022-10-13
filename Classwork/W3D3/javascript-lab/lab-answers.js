// JavaScript Lab

/*  ===========================================================================
Part I: HTML & CSS
===========================================================================  */
// Rank you comfort with the following material on a scale of 0 - 5:

//  Answer:  5 - I got this! I am ready to code








/*  ===========================================================================
Part II: JavaScro[t Reps
===========================================================================  */


/*  =====================================================
1)  Easy Going
=====================================================  */
// console.log("=====================================================");
// console.log("1) Easy Going")
// console.log("=====================================================");
// for( let a = 1; a <=20; a++) {
//     console.log(a);
// }
// console.log("=====================================================\n\n");




/*  =====================================================
2)  Get Even
=====================================================  */
// console.log("=====================================================");
// console.log("2) Get Even")
// console.log("=====================================================");
// let b = 1;
// while(b <= 200) {
//     if(b % 2 === 0) {
//         console.log(b);
//     }
//     b++;
// }
// console.log("=====================================================\n\n");




/*  =====================================================
3)  Fizz Buzz
=====================================================  */
// console.log("=====================================================");
// console.log("3) Fizz Buzz")
// console.log("=====================================================");
// for (let c = 1; c <= 100; c++) {
//     if((c % 3 === 0) && (c % 5 === 0)) {
//         console.log("FizzBuzz");
//     } else if(c % 3 === 0) {
//         console.log("Fizz");
//     } else if(c % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(c)
//     }
// }
// console.log("=====================================================\n\n");




/*  =====================================================
4)  Wild Wild Life
=====================================================  */
// console.log("=====================================================");
// console.log("4) Wild Wild Life")
// console.log("=====================================================");
// // array(name,species ,age, hometown)
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant",  5000 , "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

// plantee[2]++;
// wolfy[3] = "Gotham City";
// dart[3] = dart[3] + "/Hawkins";
// wolfy[0] = "Gameboy";

// console.log(wolfy);
// console.log(sharky);
// console.log(plantee);
// console.log(porgee);
// console.log(dart);
// console.log("=====================================================\n\n");




/*  =====================================================
5)  Yell at the Ninja Turtles
=====================================================  */
// console.log("=====================================================");
// console.log("5) Yell at the Ninja Turtles")
// console.log("=====================================================");
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for(let turtle of ninjaTurtles) {
//     console.log(turtle.toUpperCase());
// }
// console.log("=====================================================\n\n");




/*  =====================================================
6)  Methods, Revisted
=====================================================  */
// console.log("=====================================================");
// console.log("6) Methods, Revisited")
// console.log("=====================================================");
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies[8]);  // Titanic

// favMovies.sort();                           // 1. Permanently sorts the array in alphabetical order
// favMovies.pop();                            // 2. Removed 'Volver'
// favMovies.push("Guardians of the Galaxy");  // 3. Added "Guardians of the Galaxy" to the end of the array
// favMovies.reverse();                        // 4. Reversed the order of the array
// favMovies.shift();                          // 5. Removes "Guardians of the Galaxy" from beginning of the array
// favMovies.unshift("Batman");                // 6. Returns the new array length once "Batman" is added to the beginning of the array
// favMovies.splice(16, 0, "Avatar");          // 7. Yes, "Avatar" was permanently added as an element to the array directly after "Django Unchained"
// favMovies.slice((favMovies.length / 2));    // 8. No, the original array is unaffected. Slice simply returned the last half of the array
// const lastHalf = favMovies.slice((favMovies.length / 2));   // 9. The last half of the array is returned and stored in the variable
// console.log(favMovies);                     // 10. Output the entire array to console
// console.log(favMovies[14]);                 // 11a. Fast and Furious is still in the array at favMovies[14]
// console.log(favMovies[20]);                 // 11b. Volver was removed from the array in step 2 with pop. 
//                                             //      The index could have been favMovies[20] if it were still in the array. 
//                                             //      Since it is not, the index is undefined since it's missing.
//                                             // 12.  The values within an array and an object can be modified regardless of whether the variable is declared with var, let, or const
//                                             //      But, const will prevent you from redeclaring the variable (useful if you do not want the data type or structure modified)

// console.log("=====================================================\n\n");




/*  =====================================================
7)  Where is Waldo
=====================================================  */
// console.log("=====================================================");
// console.log("7) Where is Waldo")
// console.log("=====================================================");

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// whereIsWaldo.splice(1, 1);          // Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo[1][2] = "No One";      // Change "Neff" to "No One"
// console.log(whereIsWaldo[2][1][1]); // Access and console.log "Waldo"
// console.log(whereIsWaldo);          // Entire Array for review

// console.log("=====================================================\n\n");




/*  =====================================================
8)  Excited Kitten
=====================================================  */
// console.log("=====================================================");
// console.log("8) Excited Kitten");
// console.log("=====================================================");

// let comment = "Love me, pet me! HSSSSSS!";
// let kittyTalk = ["...human...why you taking pictures of me?...",
//                 "...the catnip made me do it...", 
//                 "...why does the red dot always get away..."];

// let randomNum = 0;
             
// for(let meow = 1; meow <= 20; meow++) {
//     console.log(comment);
//     if(meow % 2 === 0) {
//         randomNum = Math.floor(Math.random() * kittyTalk.length);
//         console.log(kittyTalk[randomNum]);
//     }
// }

// console.log("=====================================================\n\n");




/*  =====================================================
9)  Find the Median
=====================================================  */
console.log("=====================================================");
console.log("9) Find the Median");
console.log("=====================================================");
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
let median;
let temp;


temp = nums.length / 2;
if(temp % 2 !== 0) {
    temp = Math.floor(temp);
}

if(nums.length % 2 !== 0){
    median = ((nums[temp] + (nums[temp + 1])) / 2);
} else {
    median = nums[temp];
}

console.log(median);


// Alternative simpler way
// nums.sort();
// console.log(nums[Math.floor(nums.length / 2)]);

console.log("=====================================================\n\n");