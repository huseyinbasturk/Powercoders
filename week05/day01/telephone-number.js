 /* TELEPHONE NUMBER VALIDATION

Validate a telephone number, as if written on an input form. Telephone numbers can be written as ten digits, or with dashes, spaces, or dots between the three segments, or with the area code parenthesized; both the area code and any white space between segments are optional.

After questions cilent clarifies:
only swiss numbers, no country code, it has to have 10 digits and can optionally have the other characters

Costraints:
allowed characters: digits, spaces, dashes, dots, parantheses
only area code can be in parantheses
spaces are optional, parantheses are optional
number has to start with area code
if phone number has parantheses, the first character in th input has to be (
if phone number has no parantheses, the first character in the input has to be a 0
the phone number has to have 10 digits, no more, no less
characters only allowed between segments: defined for number after area code, split in 2, 2 and 3
inputs cannot be empty

 Possibilites:

=================
078 79 54 123 > true
(078) 79 54 123 > true
078-79-54-123 > true
078 79.54.123 > true
0787954123 > true
(078)-79-54-123 > true
(078)7954123 > true
(078) 79.54.123 > true

FALSE
078 79-541-23 
078-79-(54)-123
(0787954123) 
890787954123 
abcduh
......

Input:
string, with characters and digits

Output:
boolean: true or false

Procedure:
1. check if input is empty
   >yes: check again with error message
   >no: go to next step
2. looping through the string and check constraints for each character
   -first character either 0 or ( > if (, the ) needs to be at index 4 and 2nd character has to be a 0 
   -while looping we count the number of digits
   -the moment we find something wrong, e.g. not allowed character, character on the wrong position, etc. => output is false
*/



function validateTelephoneNumber(input){
   console.log(input);
   var spaceRemoved = removeWhiteSpace(input);
   console.log(spaceRemoved);
   if(checkLength(spaceRemoved)) {
      if(isAllDigit(spaceRemoved)) {
         return "Valid Number";
      } else {
         return "Invalid Number";
      } 
        
   } else {
      var removedSpecialCharacter = removeSpecialCharacter(spaceRemoved); 
      console.log("char is removed " + removedSpecialCharacter);
      if(isAllDigit(removedSpecialCharacter)){
         return "Valid Number";
      } else {
         return "Invalid Number";
      } 
      
   }
}
function removeWhiteSpace(input) {
   return input.replace(/\s/g, "");
  
}

function isAllDigit(input) {
   var flag = true;
   for(var i = 0; i < input.length; i++) {
      if(isNaN(input)) {
         flag = false;
         break;
      }
   }
   console.log(flag);
   return flag;
}

function checkLength(input) {
   if(input.length === 10) {
      console.log("check length");
      return true;
   }else 
      console.log("length is bigger");
      return false;
} 
   
function checkEmpty(input) {
   return input === '';
}

function removeSpecialCharacter(input){
   console.log(input);
   return input.replace(/\D/g, '');
}

console.log(validateTelephoneNumber("078 79 54 123") );
//console.log(validateTelephoneNumber("(078) 79 54 123"));

   // console.log("check spec ch");
   // var removedSpecialCharacter =input.replace(/\D/g, '');
   // console.log(removedSpecialCharacter);
   // isAllDigit(removedSpecialCharacter);