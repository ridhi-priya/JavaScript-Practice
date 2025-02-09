let fruits = ["mango", "kiwi", "pears", "apple"];

// Using a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using a while loop (Corrected)
let j = 0;
while (j < fruits.length) {
  // Fix: Use 'j < fruits.length' instead of 'fruits.length > 0'
  console.log(fruits[j]);
  j++;
}
