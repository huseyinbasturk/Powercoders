/* Must have requirements
- title
- list of to-dos
- possibility to add new to-do: input & button
- change order / set priority of to-dos
- change status of to-do (open/done - in progress)
inputs - todo (list of object: string, number, boolean)
- 1 todo = object
- many todos = array of objects
outputs - array of todos rendered as list items 
steps - 
- add todo
-- enter input 
-- submit input
-- get input 
-- validate input (is it empty, does exact string exist as open todo (repetition)) > invalid: return error message & enter input again / valid: move on to next step
-- create object with input string, number (default add to bottom of list), boolean (default isDone: false)
-- add to the list (push it to the array)
-- confirmation to user
- display list
- mark as done
- order / set priority
- for the buttons we need event listeners
1. variables
- not in yet / missing: user input how to order list
*/
const todo = document.querySelector("input[type='text']");
const addBtn = document.querySelector("button");
const list = document.querySelector("ol");


addBtn.insertAdjacentHTML("afterend",
        `<span class="red"></span>`);
const span = document.querySelector('span');
let todos = [
    {
        id:1,
        text:'create the HTML file and add tags',
        isDone: false
    },
    {
        id:2,
        text:'work on JavaScript to add functionality',
        isDone: false
    },
    {
        id:3,
        text:'make it beautiful and user-friendly with CSS',
        isDone: false
    },
    
];

//check for duplicate entries
let isInputUnique = (newItem) => {
  //loop through the todos and compare each item to newItem
  //item is equal to newItem > return false
 let flag = false;
 for(let i = 0; i< todos.length; i++) {
    if(todos[i].text === newItem){
        flag = false;
        break;
    }else {
         flag = true;     
    } 
 };   
  return flag;

}
let addTodo = () => {
    span.innerText ='';
  //get value from input field
  let newItem = todo.value;
  //validate value from input field, check for duplicates
  
  if (isInputUnique(newItem)) {
    //create instance
    //push to todos list
    //to optimize: setting ids not based on array length, but on id of the last object in todos array, if the array is empty start with 1
    todos.push(new ToDo(newItem, todos.length));
    //console.log(todos);
    displayList(todos);
     } else if(span.innerText === ''){
         
        span.innerText = "You have it";
    }
  
};

let clearList = () => {
  list.textContent = "";
};

let displayList = (todos) => {
  clearList();
  //loop through todos list
  //for each object in the list, we render HTML li-Tag
  //based on the properties of the object
  //each li-Tag will be appended to ol-DOM element "list"
  todos.forEach((li, i) => {
    let html = `<li>
                <input type="checkbox" name='todo${i}' id='todo${i}'/>
                <label for='todo${i}'>${li.text}</label>
                </li>`;
    list.insertAdjacentHTML("beforeend", html);
    
    });

    //add eventListener for checkbox to call changeStatus
     let checkboxes = document.querySelectorAll('ol li');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click',function(){
            changeStatus(checkbox.id);
        });
    }  

}
//
let changeStatus = (id) => {
  //check if input - checkbox - if it is checked
  let input = document.getElementById(id);
  if(input.checked) {
      todos[id].isDone = true;
  }
  //find the corresponding object and set isDone to true
  //if it is not checked, set isDone to false

}

addBtn.addEventListener("click", addTodo);

}

function ToDo(text, id, isDone = false) {
  this.id = id;
  this.text = text;
  this.isDone = isDone;
}
displayList(todos);