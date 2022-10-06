// Functions


// function declarations are hoisted

addition(10, 60)

function addition (x, y) {
  let sum = x + y ;
 // console.log(sum)
}


// Many Arguments
const spreadArgs = (...args) => {
  console.log(args)
}

spreadArgs(1,2,3,4,"chesse", 79)


// Exercise:

function addThreeNums(x, y, z) {
  return x + y + z
}

const sum = addThreeNums(5, 10, 20)


const addAndDivide = (x, y, z) => {
  return (x + y + z) / 3
}

// console.log(addAndDivide(3, 6, 9))

const findAverage = (...args) => {
  let base = 0
  //console.log(args)
  args.forEach((num) => {
    base = base + num
    //console.log(base)
  })
  return base / args.length
}

//console.log(findAverage(2,58,89,10,53, 89, 47, 28))



let tracker = 0

function printHelloWorld(str) {
  console.log(str)
  printName("Toby")
}

function printName (tracker) {
  console.log(tracker)
  console.trace("my first trace")
}

const increment = () => {
  const avariable = "hello world"
  
  tracker++
  
  
  
  printHelloWorld(avariable)


}



increment()