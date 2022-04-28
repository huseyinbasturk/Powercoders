// function isUserValid(bool){
//     return bool;
//   }
  
//   var answer = isUserValid(true) ? "You may enter" : "Access denied";
  
//   var automatedAnswer = "You account number is " 
//     + ( isUserValid(false) ? "1234" : "not available") + "."

// console.log(answer);
// console.log(automatedAnswer);

// console.log("=================");

// let list = ["doors", "windows", "rooms"];
//     for(let x of list){
//         console.log(x);
//     }   

// for(let ch of "hello"){
//     console.log(ch);
// }  

// let obj = {doors: 2, windows: 8, rooms: 5};
//     for(let x in obj){
//         console.log(x);
    
// } 
// console.log("!=====================================!");

// let obj1 = {doors:2,windows:8,rooms:5};
// Object.keys(obj).forEach(function(property_name){
//     console.log(obj[property_name]);
// });

// Object.values(obj).forEach(function(property_value){
//     console.log(property_value);
// });

// class Person {
//     constructor(name, age, married) {
//         this.name = name;
//         this.age = age;
//         this.isMarried = married;
//     }
//     hello(){
//         return "hello " + this.name;
//     }
// }

class Animal {
    constructor(name) {
      this.name = name;
    }
    jump() { console.log(`${this.name} is jumping.`); }
  }
  class Bird extends Animal {
    fly() { console.log(`${this.name} is flying.`); }
  }
  class Dog extends Animal {
    bark() { console.log(`${this.name} says "Woof!"`); }
  }

  const myDog = new Dog("Luna");
console.log(myDog.name); // "Luna"
myDog.jump(); // "Luna is jumping."
myDog.bark(); // "Luna says 'Woof!'"
//myDog.fly(); // Uncaught TypeError: myDog.fly is not a function

console.log("-----------------------------")
const obj = {
    person: "Susanne",
    age: 38,
    experience: 13
  }
  
  /** the way we know */
  /*const person = obj.person;
  let age = obj.age;
  let experience = obj.experience;
  */
  /** destructured */
  const { person } = obj;
  let { age, experience } = obj;

  const person2 = {
    firstName2 : "John",
    lastName  : "Doe",
    age2      : 50,
    eyeColor  : "blue"
};
/*
let firstName = person2.firstName;
let lastName = person2.lastName;
let age2 = person2.age;
let eyeColor = person2.eyeColor;
*/
let{firstName2} = person2;
let{lastName} = person2
let{age2} = person2;
let{eyeColor} = person2;


const name = "first name";

const teacher = {
  [name]: "Susanne",
  [5 + 13]: 38,
  experience: 13
}

const s1 = Symbol();
const s2 = Symbol();

const possibleStatus = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
};


let status = Symbol('status');
const task = {
    [status]: possibleStatus.OPEN,
    description: 'Learn ES6 Symbol'
};

// complete a task
// task.setStatus(possibleStatus.COMPLETED);
console.log(task);