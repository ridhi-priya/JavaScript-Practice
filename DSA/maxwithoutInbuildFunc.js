const arr = [4, 5, 2, 3, 443, 234, 43, 2];

console.log(Math.max(...arr));

// with bind method

console.log(Math.max.apply(null, arr));
