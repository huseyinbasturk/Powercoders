/*

find the node 
and store in the variable
manipulate

*/

let paragraph = document.querySelector('#changeMe');
let new_text = "the text was magically changed.";
paragraph.innerText = new_text;
paragraph.textContent = "... and gone"

let list = document.querySelectorAll("li")
// list.foreach((li, index) => {
//     li.innerText = index + 1;
// })

for (let li of list) {
    // li.innerText = li.innerText.substring(5);
    li.innerText = li.innerText.replace('item', "")
}

let el = document.querySelector("h1");
  el.style.color="#6600FF";
  el.style.backgroundColor="red";

  let span = document.createElement("li");
  let node = document.createTextNode("Item 6");
  let parent = document.querySelector("ul");
  span.appendChild(node);
  parent.appendChild(span);

  parent = document.querySelector("ul");
  child = parent.querySelector("li");
  parent.removeChild(child);
