const fb = [];
// ADD CODE HERE

for (let x = 1; x <= 16; x++) {
  
 	if ((x % 3 === 0) && (x % 5 ===0)) {
    fb.push('fizzbuzz');
  } else if (x % 5 === 0) {
    fb.push('buzz');
  } else if (x % 3 === 0) {
    fb.push('fizz');
  } else {
      fb.push(x);
  }

}

console.log(fb);