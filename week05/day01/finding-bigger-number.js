/* Declare 2 variables, both numbers
Compare which number is greater
Log the output, e.g. "The greater number of 5 and 10 is 10."
Add an output for the else statement, e.g. "The smaller number of 5 and 10 is 5."*/

const firstNumber = 5
const secondNumber = 10

function biggerNumberCounting(firstNumber, secondNumber) {

    if (firstNumber > secondNumber) {
        console.log(`The greater number of ${firstNumber} and ${secondNumber} is ${firstNumber} `)

    } else if (firstNumber == secondNumber) {
        console.log(`The ${firstNumber} and ${secondNumber} is equal.`)
    } else {
        console.log(`The greater number of ${firstNumber} and ${secondNumber} is ${secondNumber} `)
    }
};

biggerNumberCounting(firstNumber, secondNumber);

biggerNumberCounting(10, 10);

biggerNumberCounting(15, 10);