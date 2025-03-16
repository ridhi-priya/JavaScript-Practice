let arr = [1, 3, 5, 4, 3];
let arr2 = [2, 7, 6, 8];
// Length
console.log("Length");
console.log(arr.length);
// Push
arr.push(6); //push method will change the existing array
console.log(arr);
// Join
console.log(arr.join(" "));
console.log(arr);

// Includes - DONE
console.log(arr.includes(3));
// Some - DONE
console.log(arr.some((num) => num > 3));
// Every - DONE
console.log(arr.every((num) => num > 3));
// Splice - DONE - revision
let removed = arr.splice(1, 2);

console.log(arr);
console.log(removed);
// indexOf - DONE
console.log(arr.indexOf(3));
// Concat - DONE
console.log(arr.concat(arr2));
// Filter - DONE
console.log(
  arr.filter((i) => {
    return i > 3;
  })
);
// forEach - DONE
arr2.forEach((i) => console.log(i * 1000));
// lastIndexOf - DONE (returns the last index of element exist in the array, else return -1)
console.log("lastIndexOf");
console.log(arr.lastIndexOf(3));
// Map - DONE
console.log(
  arr2.map((i) => {
    return i + 1;
  })
);
// Reduce - DONE
console.log(
  arr2.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
);
// Reverse - DONE
console.log(arr.reverse());
console.log(arr);
// Sort - imp (for strings as well as numbers, customSort implementation)
console.log("sort");
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));

// Find - DONE
console.log(arr2.find((num) => num % 2 !== 0));
// FindIndex - DONE
console.log(arr.findIndex((num) => num === 3));
// Map vs forEach
console.log(
  arr2.map((i) => {
    return i + 100;
  })
);
arr2.forEach((i) => console.log(i * 1000));
// Chaining map, filter and reduce
let arr3 = [1, 2, 3, 4];
console.log(
  arr3
    .map((i) => {
      return i + 1;
    })
    .filter((i) => {
      return i <= 3;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    })
);
