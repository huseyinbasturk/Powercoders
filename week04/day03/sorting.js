var list = [1, 3, 5, 25, -4];

var smallestValue = Number.MAX_SAFE_INTEGER;
var smallestValueIndex = -1;

for(var i = 0; i < list.length; i++) {
    for(var j=i; j< list.length; j++) {
        var currentValue = list[j];
        if(currentValue < smallestValue) {
            smallestValue = currentValue;
            smallestValueIndex = j;
        }

    }

    var temp = list[smallestValueIndex];
    list[smallestValueIndex] = list[i];
    list[i] = temp;
}
console.log(list);

var list2 = [2,-4,55,100,0,12]
list2.sort((a,b) => a - b);
console.log(list2);

// for(var i=0; i< list.length; i++) {
//     var currentValue = list[i];
//     if(currentValue < smallest_value) {
//         smallest_value = currentValue;
//     }
// }

// console.log(smallest_value);

/*
let numberList = [60, 35, 84, 25, -5, 8, -3, 98796, -5];
var min = numberList [0]
var max = numberList [0];

for (var i = 0; i < numberList.length; i++) {

    if (max < numberList[i])
        max = numberList[i];

    if (min > numberList[i])
        min = numberList[i];
};

console.log(min);
*/