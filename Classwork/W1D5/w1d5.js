// Exercise 1
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]

let sum1 = 0
arr_1.forEach((i)=>{
    sum1 += i
})

let sum2 = 0
arr_2.forEach((j)=>{
    sum2 += j
})

console.log(sum1 + sum2)

// Example output: 
// 276 + 351 = 627





// Exercise 2
let arr_3  = [4, 6, 7]
let arr_4  = [8, 1, 9]
let arr_5 = []
for (k=0; k < 3; k++){
    arr_5.push(arr_3[k] + arr_4[k])
}
console.log(arr_5)





// Exercise 3
function addList(...args) {
    let sum_args = 0;

    if (!args.length) {
        return "No arguments";
    } else {
        args.forEach((num) => {
            sum_args += num;
        })
        return sum_args;
    }

    
}
console.log(addList(7, -12, 93, 16, -4));



//  Write a JavaScript function that checks whether a passed string is a palindrome or not?
//  A palindrome is word, phrase, or sequence that reads the same backward as forward, ex., "madam" or "nurses run" or "racecar". (edited)
function checkPalindrome(str) {
    const trimmed = str.trim().replace(/\s/g, '');
    const flipped_str = trimmed.split("").reverse().join("");

    return flipped_str.toLowerCase() === trimmed.toLowerCase();
}

console.log(checkPalindrome("nurses run"));


// Another way to flip a string
let str = "hello world";
let reversedString = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
}

console.log(reversedString);