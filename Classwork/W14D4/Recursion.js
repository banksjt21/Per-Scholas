const nums = []
function range(x, y){
  if (x + 1 === y) {
    return nums
  }

  nums.push(x + 1)
  const result = range(x + 1, y)
  return result
}

console.log(range(2, 30))


function sumRange(n) {
  if (n === 1) return 1
  
  return n + sumRange(n - 1)
}

console.log(sumRange(3))

function sumRange(n) {
  if (n === 1) {
    console.trace("the base case was hit, return value: ", n )
    return 1
  }
  console.trace(`sumRange${n}` )
  console.log("=============")
  return n + sumRange(n - 1)
}

console.log(sumRange(3))