function Person(name, partnersName, numberOfChildren, location, jobTitle) {
    this.name = name;
    this.partnersName = partnersName;
    this.numberOfChildren = numberOfChildren;
    this.location = location;
    this.jobTitle = jobTitle
    this.fortuneTeller = function() {
      console.log(`You will be ${this.name} in ${this.location}, and married to ${this.partnersName} with ${this.numberOfChildren} kids.`)  ;
    }
  }   

  let p1 = new Person('Seb','Jessica',2,'USA','Prasident');
  console.log(p1.fortuneTeller());
  let p2 = new Person('Mustafa','Adriana',4,'Norway','Boss');
  console.log(p2.fortuneTeller());
  let p3 = new Person('Dominic','Ayse',3,'Turkey','General Manager');
  console.log(p3.fortuneTeller());