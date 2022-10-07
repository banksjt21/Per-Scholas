
/*  ========================================================================= *
    1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two 
    numbers as arguments and returns the largest of them. If they are the same, 
    return that number. Use the if-else construct or a ternary expression - the 
    Math.max method is not allowed.
    
    or more "elegantly" using the fantastic ternary expression!
    return  x >= y ? x : y;
 *  ======================================================================== */
//  1a. If Statement
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
}
console.log("1a: " + maxOfTwoNumbers(3, 9));


//  1b. Ternary  Expression
function maxOfTwoNumbersB(x, y) {
    return x >= y ? x : y;
}
console.log("1b: " + maxOfTwoNumbersB(3, 9));
  



/*  ========================================================================= *
    2. Define a function, as a function expression, maxOfThree that takes three 
    numbers as arguments and returns the largest of them. Again, the Math.max 
    method is not allowed.
 *  ======================================================================== */
//  2a. If/Else If/Else Statement
const maxOfThree = function(a, b, c) {
    let largest;
    if (a >= b) {
        largest = a;
    } else {
        largest = b;
    }

    if (largest >= c) {
        return largest;
    } else {
        return c;
    }
}
console.log("2a: " + maxOfThree(26, 47, 10));



//  2b. If/ElseIf/Else Statement
const maxOfThreeB = function(a, b, c) {
    let largest;
    if(a >= b) {
        largest = a;
    } else if (b >= c) {
        largest = b;
    } else {
        largest = c;
    }

    return largest;
}
console.log("2b: " + maxOfThreeB(24, 5, 55));




/*  ========================================================================= *
    3. Define a function, as a function declaration, isCharAVowel that takes a 
    character as an argument and returns true if it is a vowel, false otherwise.
 *  ======================================================================== */
//  3a. While Loop
function isCharAVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    let i = 0;

    while(char) {
        if (char === vowels[i]) {
            return true;
        } else if (i === vowels.length) {
            return false;
        } else {
            i++;
        }
    }
}
console.log("3a: " + isCharAVowel("a"));


// 3b. Switch Statement
function isCharAVowelB(char) {
    const vowels = ["a", "e", "i", "o", "u"];

    switch(char) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
            break;
        case "y":
            return "sometimes";
            break;
        default:
            return false;
            break;
    }

}
console.log("3b: " + isCharAVowelB("a"));




/*  ========================================================================= *
    4. Define a function, as a function expression, sumArraythat takes an array 
    of numbers and returns the sum of those numbers. 
    For example, sumArray([2, 4, 5]); would return 11.
 *  ======================================================================== */
//  4a. Array with forEach loop
const sumArray = function(nums) {
    let sum = 0;

    nums.forEach(function(num) {
        sum += num;
    });

    return sum;
}
console.log("4a: " + sumArray([5, 4, 3, 2, 1]));


// 4b. Array with for loop
const sumArrayB = function(nums) {
    let sum = 0;

    for (let x = 0; x < nums.length; x++) {
        sum += nums[x]
    }

    return sum;
}
console.log("4b: " + sumArrayB([5, 4, 3, 2, 1]));




/*  ========================================================================= *
    5. Define a function, as a function declaration, multiplyArray that takes 
    an array of numbers and returns the product of those numbers. 
    For example, multiplyArray([2, 4, 5]); would return 40.
 *  ======================================================================== */
//  5a. Array with forEach loop
function multiplyArray(nums) {
    let product = 1;

    nums.forEach(function(num) {
        product *= num;
    });

    return product;
}
console.log("5a: " + multiplyArray([5, 4, 3, 2, 1]));


//  5b. Array with for loop
function multiplyArrayB(nums) {
    let product = 1;

    for(let x = 0; x < nums.length; x++) {
        product *= nums[x];
    }

    return product;
}
console.log("5b: " + multiplyArrayB([5, 4, 3, 2, 1]));




/*  ========================================================================= *
    6. Define a function, as a function expression, numArgs that returns the 
    number of arguments passed to the function when called.
 *  ======================================================================== */
//  6a. Array Length Property
const numArgs = function(...args) {
    return args.length;
}
console.log("6a: " + numArgs(1, 2, 3, 4, 5));


//  6b. Array Length using arguments.length
const numArgsB = function(...args) {
    return arguments.length;
}
console.log("6b: " + numArgsB(1, 2, 3, 4, 5));



/*  ========================================================================= *
    7. Define a function, as a function declaration, reverseString that takes 
    a string, reverses the characters, and returns it. 
    For example, reverseString('rockstar'); would return the string "ratskcor".
 *  ======================================================================== */
//  7a. String with substr
function reverseString(str) {
    let reversed = "";
    let count = -1;
    
    for(let k = 0; k < str.length; k++) {
        reversed = reversed + str.substr(count, 1)
        count--;
    }
    return reversed;
}
console.log("7a: " + reverseString("Hello Hola"));


//  7b. string with for loop
function reverseStringB(str) {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}
console.log("7b: " + reverseStringB("Hello Hola"));




/*  ========================================================================= *
    8. Define a function, as a function expression, longestStringInArray that 
    takes an array of strings as an argument and returns the length of the 
    longest string.
 *  ======================================================================== */
//  8. Array with forEach
const longestStringInArray = function(args) {
    let longest = 0;

    args.forEach((str) => {
        if (str.length > longest)
        {
            longest = str.length;
        }
    });

    return longest;
}
console.log("8a: " + longestStringInArray(["First", "Second", "Fifth", "Seventh", "Fourteenth"]));


const longestStringInArrayB = function(arrayOfNums) {
    let longest = 0;

    for(let x = 0; x < arrayOfNums.length; x++) {
        if(arrayOfNums[x].length > longest) {
            longest = arrayOfNums[x].length;
        }
    }

    return longest;

}
console.log("8b: " + longestStringInArrayB(["First", "Second", "Fifth", "Seventh", "Fourteenth"]));


/*  ========================================================================= *
    9. Define a function, as a function declaration, stringsLongerThan that 
    takes an array of strings and a number as arguments, and returns an array 
    of the strings that are longer than the number passed in. 
    For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
    would return ["hello", "morning"].
 *  ======================================================================== */
//  9a. Array with forEach and spread operator (not passing in array)
function stringsLongerThan(num, ...args) {
    const keptStrings = [];

    args.forEach((function(str) {
        if(str.length > num) {
            keptStrings.push(str);
        }
    }));

    return keptStrings;

}
console.log("9a: " + stringsLongerThan(4, "Ford", "Dodge", "Chevrolet", "Kia"));


//  9b. Array with forEach without spread operator
function stringsLongerThanB(names, num) {
    const keptStrings = [];

    names.forEach((function(str) {
        if(str.length > num) {
            keptStrings.push(str);
        }
    }));

    return keptStrings;

}
console.log("9b: " + stringsLongerThanB(["Ford", "Dodge", "Chevrolet", "Kia"], 4));