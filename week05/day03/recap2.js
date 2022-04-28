class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayAge(){
        console.log(this.age);
    }
}
const seb = new Person('Seb', 25);
class Animal {
    constructor(name, age, isSleeping){
        this.name = name;
        this.age = age;
        this.isSleeping = isSleeping;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    move(){
        console.log(`${this.name} is walking`);
    }
}
class Bird extends Animal {
    constructor(name, age, isSleeping, flownDistance){
        super(name, age, isSleeping);
        this.flownDistance = flownDistance;
    }
    move(){
        console.log(`${this.name} is flying`);
    }
}
const obj = {
    person: "Susanne",
    age: 38,
    experience: 13
  }
let myName = 'dominicsdsd';
const dominic = {
    [myName]: 'Dominic',
    [1+2]: 'Test',
    experience: NaN,
}
const s1 = Symbol('s1');
const s2 = Symbol('s1');
const possibleStatus = {
    OPEN: Symbol('open'),
    IN_PROGRESS: Symbol('in_progress'),
}
const project = {
    name: "do something real quick",
    status: possibleStatus.OPEN
}
if(project.status === possibleStatus.OPEN){
       
}
  /** the way we know */