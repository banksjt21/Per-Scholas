/**
 * Functions Continued
 * 

Things to remember
* DRY - Don't Repeat Yourself 
* Good input (Garbage in garbage out)
*/

// 2 Ways to write a function

// Function Declaration
  //function declarations will be hoisted to the top.

  function sayHello (name) {
    console.log("Hello " + name + "!")
  }
  
  //sayHello("Toby")
  
  
  // Function Expression
  
  
  const sayHelloAgain = function (name) {
    if (typeof name !== "string" ) {
      console.log("Input was not a string, Try again")
      return
    }
    console.log("Hello " + name + "!")
  }
  
  //sayHelloAgain(20)
  
  // Arrow Functions
  // With an example of default parameters
  
  const add = (num1 = 10, num2 = 15, num3 = 5) => num1 + num2 + num3
  
  //console.log(add(70, 15, 30))
  function areBothEven(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      console.log("is not a number")
      return null
    } else {
      return !(n1 % 2) && !(n2 % 2);
    }
  }
  // 0 - falsey
  // anything that isn't zero is truthy
  // "christina" - truthy
  // "" - falsey
  
    // Example of truthy and falsey in a real scerniao
  // const arr = []
  
  // if (arr.length) {
  //   console.log("I have elements!!")
  // } else {
  //   console.log("i'm empty:(")
  // }
  
  
  // console.log(areBothEven(2, 8))
  
  
  // Parameters/Arguments 
  function bottleCapper( bottle /** parameters */, cap) {
    return bottle + cap;
  }
  //console.log(bottle) ReferenceError
  bottleCapper("green bottle (arugment)", " white cap (argument)")
  
  // Spread Operator 
  function getDevObject(name,age, ...skills) {
    console.log(skills)
  
    return {
      devName: name,
      age: age,
      jobSkills: skills
    };
  }
  
  //console.log(getDevObject("Betty", 1298736,"awesome", "cool"))
  
  
  // Objects
  // Key/value pairs
  const arr = [1,2,34,3] // Bracket notation
  const person = { // Dot notation
    name: "Mina",
    job: "developer",
    isAwesome: true,
    skills: ["coding", "something else"],
    pet: {
      name: "fido"
    }
  }
  //console.log(person.pet.name)
  
  const arrOfObj = [
    {
      username: "blah",
      emaill: "alksdj@gmail.com"
    },
    {
      username: "blah",
      emaill: "alksdj@gmail.com"
    },
    {
      username: "blah",
      emaill: "alksdj@gmail.com"
    },
    {
      username: "blah",
      emaill: "alksdj@gmail.com"
    },
  ]
  
  //console.log(arrOfObj[1].username)
  
  
  // Default Parameters
  const bicycle = { 
    brand: "mongoose",
    color: "red"
  }
  // ES5
  // function setColor(bicycle, color) {
  //     bicycle.color = color || "purple"
  // }
  // setColor(bicycle)
  
  // console.log(bicycle)
  
  // ES6
  function setColor(bicycle, color = "purple") {
    bicycle.color = color 
  }
  
  setColor(bicycle, "green")
  
  //console.log(bicycle)
  
  
  
  // Functions as arguments
  const a = ['red', 'green', 'blue']
  
  
  a.forEach(function(color) {
    const a = color
      //console.log(a)
  })
  
  
  // Scope
  
  // Global Scope
  const num = 4
  
  function foo(x) {
    // Function local scope
    const  b= num * 4
    
    function bar(y) {
      const c = y * b
      // foo1() this will give a reference error
      return c
    }
    // even though on same level of scope, you cannot share variables
    function foo1 () {
      console.log(c)
    }
  
  
    return bar(b);
  }
  //console.log(foo(num));
  
  // You can look out, but you can't look in!
  
  
  // Global Scope in the Browser 
  
  
  
  // IIFE
  // (() => {
  //   console.log("im running")
  // })()
  
  
  
  
  //Block Scope
  function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  } 
  
  //varTest()
  
  function letTest() {
    let x = 1;
    if (true) {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }
  
  letTest()
  
  // Hoisting
  
  
  // Nesting Funcitons // Reference previous problem