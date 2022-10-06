// Loops and Arrays
// Operators
// ++ operator, increments by one
// -- , decrements by one
// !=, not equals
// % - modulo (remainder operator)



/*
===============
Loops
===============
*/

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// // This will throw error
// for (const i = 0; i < 10; i++) {
//   console.log(i)
// }

// Exercise:

//1.
// for (let i = 10; i > 0; i--){
//   console.log(i)
// }

//2a.
// for (let i = 1; i <= 10; i+=2) {
//   console.log(i)
// }

//2b.
// for (let i = 2; i <= 10; i+=2) {
//   console.log(i)
// }

//3.
// for (let i = 6; i <= 60; i = i + 3) {
//   console.log(i)
// }

//4.
// let str = ""

// for (let i = 0; i < 7; i++){
//   // str = str + "#"
//   str += "#"
//   console.log(str)
// }

// 5.
// for (let i = 0; i <= 10; i++) {
//   if(i % 2 === 0) {
//     console.log(i)
//   } else {
//     console.log("odd")
//   }
// }


/*
===============
Arrays 
===============
*/

let nums = [2 , 4, 18, 90, 45]

let movies = ["50 First Dates", "Interstellar", "El Camino"]

let firstMovie = movies[0]

// Adds to end of array
movies.push("Shawshank", "Toy Story")

// Adds to beginning of array
movies.unshift("Star Wars")

// Removes the last element of the array
movies.pop()

movies.shift()

/*
The "longer" named methods do the same thing (add to an array)
unshift -> [...] <- push

The "shorter" named ones remove
shift <- [...] -> pop

*/

// array.splice(start, deleteCount, newItem1, newItem2...)
movies.splice(1, 0, "Toy Story", "Lord Of Rings")

let removedMovies = movies.splice(0, 3)

// console.log(movies)


// Iterate Over an Array w/ a For Loop

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i])
}

// forEach Method
movies.forEach((movie) => {
  console.log(movie + "is a great movie")
})
// String Concatination
console.log("The movie " + movies[0] + " is awesome")

// for (let movie of movies) {
//   console.log(movie)
// }

// Spread Operator will take the element of the given array and spread them out. 
const movieCopy = [...movies]
console.log(movieCopy)


let moreMovies = ["Spaceballs", "Alien", ...movies, "armagden"]
console.log(moreMovies)