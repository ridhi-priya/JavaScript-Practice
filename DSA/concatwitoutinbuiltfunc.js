const arr = ["a", "b"];
const ele = [0, 1, 2, 3];

const concatArr = [...arr, ...ele];
console.log(concatArr);

console.log(arr.concat(ele));
arr.push.apply(arr, ele); //here arr got changed arr=['a', 'b', 0, 1, 2, 3]

console.log(arr);
