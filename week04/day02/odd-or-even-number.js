let number;
var input=true;

do {
    number = prompt("Please enter a number between 0 and 20");
   
    if(number < 0 || number > 20 || isNaN(number)){
        alert("Please type a valid number!");
        input=false;
    }
}while(input === false)    
    
checkNumber(number);

function checkNumber(number) {
    if(number % 2 === 0) {
        console.log(number + " is even")
    } else {
        console.log(number + " is odd")
    }
}