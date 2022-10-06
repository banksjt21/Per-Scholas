// Conditionals and IF statements

// Operators
  // === - strictly equals, compares value and datatype
  // == - loose equals, only compares value
  // greater than - >
  // less than - <
  // less than or equal to = <=
  // greater than or equal to = >=
  // AND - &&
  // OR - ||


//Exercises: 

// Example of loose equals
// let x = "10"

// if (x == 11) {
//   console.log("That is true!!")
// } else {
//   console.log("It was false")
// }

//Example of strictly equals
let y = 10

if (y === 10) {
  console.log("That is true!!")
} else {
  console.log("It was false")
}


let num = 0

if (num > 0) {
  console.log("It's positive")
} else if (num < 0) {
  console.log("It's negative")
} else {
  console.log("I'm zero")
}

let age = 17

if (age >= 18) {
  console.log("True, access granted")
} else {
  console.log("Access denied")
}


// Nested if statements

if (true) {
  if (false) {
    console.log("nested if is runnning")
  } else {
    console.log("second expression is false")
  }
} else{
  console.log("first expression is false")
}

// Exercises:

const integer = 100

if (integer > 0) {
  if (integer > 100) {
    console.log("integer is greater than 100")
  } else if (integer === 100){
    console.log("its's 100")
  } else {
    console.log("integer is less than 100")
  }
} else {
  console.log("integer is negative")
}


// Chained else/if statements
// const integer = 21

// if (integer > 100) {
//     console.log("Greater than 100 and positive!")
// } else if (integer > 0 && integer < 100) {
//     console.log("Less than 100 and positive!")
// } else if (integer === 100) {
//     console.log("It is exactly 100!")
// } else {
//     console.log("It is negative...")
// }