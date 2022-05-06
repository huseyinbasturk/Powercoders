/*must have requirements 
    title 
    list of to do 
    possibility to add new new to-do : input - button 
    change order / set priority 
    change status od to do (open / done - in progress)


inputs - todo (list of object: string, number, boolean)
    1 todo - object
    many todos - array of objects
outputs - array of todos rensered as list items

steps - 
    add to do
        enter input
        submit input
        validate input (is it empty, does exact string exist as open to do(repetition))
         > invalid: return error message & enter input again / valid: move on to next step
        create object with input string, number(default add to the bottom of list), boolean(default isDone : false)
        add to the list (push it to the array)

    display to do list
    mark as done
    order / set priority

    for the buttons - event listen

    1. variables
        not in yet - user input how to order
    */

const todo = document.querySelector("input[type='Text']");
const addButton = document.querySelector('button');
const list = document.querySelector('ol');


//listItem.forEach
let todos = [];

//check for duplicates
let isInputUnique = (newItem) => {
    //loop through the todos and compare each item to newItem
    //if one item is equal to new item > return false
    //else return true

}

let addToDo = () => {
    //get value from input field
    let newItem = todo.value;
    //validate value from input field,check for duplication
    if(isInputUnique(newItem)) {
        //create instance
        //push to todos list
        todos.push(new Todo(newItem,todos.length));
        clearList();
        displayList(todos);
    } else {
        //returns error message
    }
    
}

let clearList = () => {
    list.textContent = '';
}
let displayList = todos => {
    clearList();
    //loop through to do list
    //for each object in the list, we render HTML li-tag
    //each li tag will be appended to do ol-DOM element 'list'
    //add evenTListener for checkbox to call changestatus
    //const listItem = document.querySelectorAll("input[type='checkBox']");
}

//
let changeStatus = () => {
    //check input -checkbox- if it is checked
    //find a corresponding object and set isDone to true
    //if it is not checked set isDone is to false
}
addButton.addEventListener('click', addToDo);

function Todo(text, id, isDone=false){
    this.text = text;
    this.id = id;
    this.isDone = isDone;
    this.setId  = function() {

    }
}


