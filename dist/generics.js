"use strict";
// Generics
// Type keyword here is a convention and it can be anything it can T, myType and anything you wish.
// T here is like an argument to a function you can call it whatever you want! :))) Things are getting complicated.🤣
// T is a Type Argument
function genericFunction(arg) {
    return arg;
}
const result = genericFunction(2);
console.log(result);
function sortItems(items, compareFn) {
    return items.sort(compareFn);
}
const numbers = [42, 3, 77, 13, 104, 82];
// the type we pass to sortItems<number>() function is what determines other things type like arguments
const sortedNumbers = sortItems(numbers, (a, b) => a - b);
console.log(sortedNumbers);
const names = ["CJ", "Trash_Dev", "loco86", "RyanRoga"];
const sortedNames = sortItems(names, (a, b) => a.localeCompare(b));
console.log(sortedNames);
let myArray = ["CJ", "Trash_Dev", "loco86", "RyanRoga"];
function sortArray(items, compareFunction) {
    return items.sort(compareFunction);
}
const sortedArray = sortArray(names, (a, b) => a.localeCompare(b));
console.log(sortedArray);
