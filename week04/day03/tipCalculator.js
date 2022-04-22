// Tip calculator
// Initialize amountMeal as 0
// Initialize tipPercentage as 0
// Initialize tipAmount as 0
// Initialize totalAmount as 0
// Initialize resetBtn
// Print "please enter the amount of meal and tip"
// Get userInput as amountMeal
// Get userInput as tipPercentage
// Convert amountMeal to number
// Convert tipPercentage to number
// IF amountMeal is not number or amountMeal smaller than 0 print "insert a valid number please"
// IF tipPercentage is not number or smaller than 0 print "insert a valid number please"
// tipAmount = Math.round(amountMeal * tipPercentage / 100)
// // tipAmount = Math.round(137.5 * 27 / 100 = 37.13)
// totalAmount = amountMeal + tipAmount

let totalBill;
const tipCalculator = (amountMeal, tipRate) => {
    let tip = amountMeal * tipRate/100;
    totalBill = amountMeal + tip;
    console.log(`Your bill is: ${amountMeal} and tip is: ${tip}. Total amount is: ${totalBill}`);
}
tipCalculator(250, 10);