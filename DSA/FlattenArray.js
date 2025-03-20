function flattenDeep(arr) {
  let temp = [];
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      temp = [...temp, ...flattenDeep(arr[i])];
    } else {
      temp.push(arr[i]);
    }
  }
  return temp;
}
let arr = [1, [2, 3], [4, [5, 6], 7], 8];
console.log(arr);
console.log(flattenDeep(arr));
