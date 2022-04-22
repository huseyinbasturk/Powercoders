let futureYear = 2041;
let futureMonth = "April";
let age;

function ageCalculator(birthYear, birthMonth) {
    age = futureYear - birthYear + compareTheMonth(birthMonth, futureMonth);
}

function compareTheMonth(birthMonth, futureMonth) {
    if((changeNumberValue(birthMonth)) < (changeNumberValue(futureMonth))) {
        return 1;
    } else {
        return 0;
    }
    
}

function changeNumberValue(month) {
    
    switch(month) {
        case "January":
            number = 1;
            break;
        case "February":
            number = 2;
            break;
        case "March":
            number = 3;
            break;
        case "April":
            number = 4;
            break;
        case "May":
            number = 5;
            break;
        case "June":
            number = 6;
            break;
        case "July":
            number = 7;
            break;
        case "August":
            number = 8;
            break;
        case "September":
            number = 9;
            break;
        case "October":
            number = 10;
            break;
        case "November":
            number=11;
            break;
        case "December":
            number=12;
            break;
        default:
            number=0;
    }
    return number;
}

ageCalculator(1989,"January");

console.log(`I will be ${age} in ${futureYear}`);