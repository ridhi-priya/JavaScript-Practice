// Creating polyfill of array methods
// map, filter and reduce polyfills
// map polyfill

const arr = [1, 2, 3, 4, 5];

let a = arr.map((i) => {
  return i * 2;
});
console.log(arr);
console.log(a);

// filter polyfill
let b = arr.filter((i) => {
  return i > 2;
});
console.log(b);
// reduce polyfill
let c = arr.reduce((acc, i) => {
  return acc + i;
}, 0);
console.log(c);
