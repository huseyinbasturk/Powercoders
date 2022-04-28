// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Change your top choices into objects, e.g. presidents with name, year of presidency, etc as properties.
const topChoices = ['Besiktas','Death Poetry Society','Tarkan'];
for(var i = 0; i < topChoices.length; i++) {
    console.log("My #" + (i+1) + " choice is " + topChoices[i]);
}

let footballTeam = {
    name : 'Besiktas',
    foundingYear : 1903,
    numberofTitle : 16,
    origin : 'Turkey',
    
}

function filmCreator(name, year, star, director){
    this.name = name;
    this.year = year;
    this.star = star;
    this.director = director
}
let filmArray = [];
let film1 = new filmCreator('Troy',2004, 'Brad Pitt', 'Wolfgang Petersen');
//console.log(film1);
let film2 = new filmCreator('The Godfather',1972, 'Marlon Brando', 'Francis Ford Coppola');
//console.log(film1);
filmArray.push(film1);
filmArray.push(film2);
console.log(filmArray);

function singerCreator(name, origin, age, numberOfAlbums){
    this.name = name;
    this.origin = origin;
    this.age = age;
    this.numberOfAlbums = numberOfAlbums;
    this.printSinger = function() {
        console.log(`My favourite singer is ${this.name} from ${this.origin} . He is ${this.age} years old and so far has ${this.numberOfAlbums}.`);
    }
}
let singerArray = [];
let singer1 = new singerCreator('Tarkan', 'Turkey',50, 10);
singer1.printSinger();
let singer2 = new singerCreator('Shakira', 'Colombia', 45, 8);
singerArray.push(singer1);
singerArray.push(singer2);
console.log(singerArray);
console.log("=================================================")


/*


const array = ['id','name','age'];
const convertArrayToObject = (array, key) => {
    const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

console.log(
    convertArrayToObject(
      [
        { id: 111, name: 'John', age: 29 },
        { id: 112, name: 'Sarah', age: 25 },
        { id: 122, name: 'Kate', age: 22 },
        { id: 123, name: 'Tom', age: 21 },
        { id: 125, name: 'Emma', age: 24 },
      ],
      'id',
    ),
  );
*/

// with Mustafa
function allChoices() {
  let topChoices = {
      Team: "Galatasaray FC",
      Color: "Blue",
      Number: 8,
      Day: "Saturday",
      Sport: "Football",
      Film: "Inception",
  };

  for (let i = 0; i < 6; i++) {
      console.log("My " + (i + 1) + ". choice:  My Favorite " + Object.keys(topChoices)[i] + " is " + topChoices[Object.keys(topChoices)[i]]);
      
  }
}

allChoices();