// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
//  The original array will not be modified.

// always make new array

var fruits = ["mango", "kiwi", "pears", "apple", "Banana", "papaya"];

document.write(fruits);
document.write("<br>");

document.write(fruits.slice(2)); // ["pears", "apple", "banana", "papaya"]
document.write("<br>");

document.write(fruits.slice(2, 4)); // ["pears", "apple"]
document.write("<br>");

document.write(fruits.slice(1, 5)); //["kiwi", "pears", "apple", "banana", "papaya"]
document.write("<br>");

document.write(fruits.slice(-2)); //["banana", "papaya"]
document.write("<br>");

document.write(fruits.slice(2, -1)); //["pears","apple","banana"]
document.write("<br>");

document.write(fruits.slice()); // ["mango", "kiwi", "pears", "apple", "Banana", "papaya"]
