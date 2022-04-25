/*Retirement calculator
Create a program that determines how many years you have left until retirement and the year you can retire.
It should prompt for your current age and the age you want to retire and display the output as shown 
in the example that follows on the next slide.

What to do
-List inputs, outputs, processes in a text file.
-What are the constraints? Any edge case to consider? Note in your text file.
-Write the steps of your algorithm in pseudo-code in a second text file.
-Write the program in JavaScript. Find out how to get the current year from your computer.
-Push all 3 files (1 js and 2 txt) to your Github account.
*/


const currentAge = prompt("Please enter your age.");

const retirementWish = prompt("Please enter in which year you want to retire.");

const currentYear = new Date().getFullYear();  // returns the current year\

const workYears = retirementWish - currentAge;

alert(`You have ${workYears} years left until you can retire. It's ${currentYear}, so you can retire in ${currentYear + workYears}.`);