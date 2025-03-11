// **********map with prototype**********

// Array.prototype.myMap = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, this));
//   }
//   return newArr;
// };

// let arr = [1, 2, 3, 4, 5];
// let arrMap = arr.myMap((i) => {
//   return i * 2;
// });
// console.log(arrMap);
// **********Filter with prototype**********

// Array.prototype.myFilter = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };

// let arr = [1, 0, -2, 3, 4, 5];
// let arrFilter = arr.myFilter((i) => {
//   return i < 2;
// });
// console.log(arrFilter);

// // *****sorted the filterArr***********
// let sortArr = arrFilter.sort();
// console.log(sortArr);

// **********Reduce with prototype**********

// Array.prototype.myReduce = function (cb, initialval) {
//   var acc = initialval;
//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i], i, this) : this[i];
//   }
//   return acc;
// };

// let arr = [1, 2, 3, 4, 5];
// let reduceArr = arr.myReduce((acc, curr) => {
//   return acc + curr;
// });
// console.log(arr);
// console.log(reduceArr);

// **********Include with prototype**********

Array.prototype.myInclude = function (val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === val) return true;
  }
  return false;
};

let arr = [1, 2, 3, 4, 5];
let includeArr = arr.myInclude(63);
console.log(arr);
console.log(includeArr);
