// brute force approach
// find maximum sum od subarray if subarray length is k
function maxSumBruteForce(arr, k) {
  let max = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
function maxSumSlidingWindow(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  let max = sum;
  for (let i = 1; i <= arr.length - k; i++) {
    sum = sum - arr[i - 1] + arr[i + k - 1];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

let arr = [3, 8, 2, 5, 7, 6, 12];
let k = 4;
console.log(maxSumBruteForce(arr, k));
console.log(maxSumSlidingWindow(arr, k));
