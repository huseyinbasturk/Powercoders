let array = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(array);
console.log(array[2]);
console.log(array.shift());
console.log(array);
console.log(array.sort());
array.push("Kiwi");
console.log(array);

func("Apples");

console.log(array.reverse());

//console.log(array);
function func(removingElement) {
    // Removing the specified element by value from the array
    for (var i = 0; i < array.length; i++) {
        if (array[i] === removingElement) {
            var spliced = array.splice(i, 1);
            console.log("Removed element: " + spliced );
            console.log("array " + array );
        }
    }
   
}

