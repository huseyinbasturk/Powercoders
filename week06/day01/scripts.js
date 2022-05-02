/** declare list of authors based on img names
 * 
 to do check special characters in name, check what happens with several firstname or several lastnames
 */
let authors = [
    {
        firstName:'Andreas',
        lastName: 'Neeser'
    },
    {
        firstName:'Anna',
        lastName: 'Ruchat'
    },
    {
        firstName:'Arno',
        lastName: 'Camenisch'
    },
    {
        firstName:'Barbara',
        lastName: 'Schibli'
    },
    {
        firstName:'Demian',
        lastName: 'Leinhard'
    },
    {
        firstName:'Flurina',
        lastName: 'Bader'
    },
    {
        firstName:'Franco',
        lastName: 'Supino'
    }, {
        firstName:'Lukas',
        lastName: 'Hartmann'
    },
    {
        firstName:'Marius',
        lastName: 'Popescu'
    },
    {
        firstName:'Reto',
        lastName: 'Haenny'
    },
    {
        firstName:'Sandra',
        lastName: 'Kuenzi'
    },
    {
        firstName:'Simon',
        lastName: 'Libsig'
    }

]

/** create object per author */
let Author = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.imgUrl = `img/tile_${firstName.toLowerCase()}_${lastName.toLowerCase()}.jpg`;
    this.link = `authors/${firstName.toLowerCase()}-${lastName.toLowerCase()}.html`;
    this.altText = `Portrait of ${firstName} ${lastName}`;

}

/** create function createTiles to create list items */

function createTiles(authors){
    let tileList = [];
    authors.forEach(author => {
        const currentAuthor = new Author (author.firstName, author.lastName)
        const liTag = document.createElement('li');
        const aTag = document.createElement('a');
        const imgTag = document.createElement('img');
        const h2Tag = document.createElement('h2');
        const spanTag = document.createElement('span');

        aTag.href = currentAuthor.link;
        imgTag.src = currentAuthor.imgUrl;
        imgTag.alt = currentAuthor.altText;
        spanTag.textContent = currentAuthor.firstName + ' ' + currentAuthor.lastName;

        liTag.appendChild(aTag);
        aTag.appendChild(imgTag);
        aTag.appendChild(h2Tag);
        h2Tag.appendChild(spanTag);


        tileList.push(liTag);
        
    });
    return tileList;

}


/** create function addTiles to add all tiles to the DOM randomly */
function addTiles(list) {
    const ulTag = document.querySelector('main ul');
    /* randomize list first */
    randomize(list).forEach(li => ulTag.appendChild(li));

   
}

function randomize(list) {
    let randomNumber;
    let tempList = [];
    list.forEach(item => {
        do {
            randomNumber = Math.floor(Math.random() * (list.length));
        }while(tempList[randomNumber] !== undefined)
             tempList[randomNumber] = item;  
    });
    return tempList;
}
addTiles(createTiles(authors));

/** add a eventListener on the logo to rebuild the list on click */
document.querySelector("header a img").addEventListener("click", function () {
    document.querySelector('main ul').innerHTML = "";
    addTiles(createTiles(authors));
});