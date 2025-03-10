// map with prototype

Array.prototype.myMap = function (cb) {
  newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

let arr = [1, 2, 3, 4, 5];
let sqrArr = arr.myMap((i) => {
  return i * 2;
});

console.log(sqrArr);
