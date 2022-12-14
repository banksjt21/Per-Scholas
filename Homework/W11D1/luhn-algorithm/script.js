function validCard(cardNum) {
    const numberString = cardNum.toString();        // Convert the number to a string
    const numberLength = numberString.length;       // Get the length of the number string
    let sum1  = 0;
    let sum2  = 0;
    let total = 0;

    for(let i = numberLength-2; i >= 0; i-=2) {     // Set i to numberLength minus to get the next to the last digit
        let temp = Number(numberString[i]) * 2;     // Multiply the number by 2 and Store the current digit in 'temp'
        if(temp >= 10) {                            // If the current digit is greater than 10 or equal to 10 ...
            temp = temp - 10;                       // ... Subtract 10 from 'temp'
            temp = temp + 1;                        // ... Then add 1 to 'temp'
        }

        sum1 += temp;                               // Add the number to sum
    }

    for (let j = numberLength-1; j >= 0; j-=2) {
        sum2 += Number(numberString[j]); 
    }

    total = sum1 + sum2;

    // console.log(numberString);
    // console.log(numberLength);
    // console.log("=======");
    // console.log(sum1);
    // console.log(sum2);
    // console.log(total);

    let result = total % 10 == 0 ? true : false;
    console.log(result);
    return result;
}

validCard(1234567890123456); //should be false
validCard(4408041234567893); //should be true
validCard(38520000023237); //should be true
validCard(4222222222222); //should be true