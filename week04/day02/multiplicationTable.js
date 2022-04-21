
let input = true;
let userNumber;
for(let number = 0; number < 10; number++) {
    do{
        userNumber = prompt("Please type: " + number);
        if(userNumber == number) {
            multiply(userNumber);
        } else {
            alert("Type the correct one.");
            input = false;
        }
    }while(input === false);
}

function multiply(number) {
    console.log(number + " * 9 = " + (number*9));
}