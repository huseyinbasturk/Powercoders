
const person = {
    name: "John",
    age: 38,
    
  };
  
  console.log(person.age);

  function printPerson(person) {
      console.log(`The person's name is ${person.name} and her age is ${person.age}` );
  }

  printPerson(person);

  function Person(name, age, married) {
    this.name = name;
    this.age = age;
    this.isMarried = married;
    this.hello = function() {
      console.log("Hello " + this.name)  ;
    }
  };     

  let p1 = new Person("Jack", 42);
  printPerson(p1);
  p1.hello();