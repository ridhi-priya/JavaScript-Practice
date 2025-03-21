// const objects = [{ a: 1 }, { b: 2 }];
// const deep = cloneDeep(objects);

// console.log(e);
// // Output: false. The objects are not the same reference.

// deep[0].a = 42;
// console.log(objects[0].a);
// // Output: 1. Original object remains unchanged.

// above is the question and below is the solution

function deepClone(value) {
  if (value === null || typeof value !== "object") return value;

  if (Array.isArray(value)) {
    return value.map((ele) => {
      return deepClone(ele);
    });
  }
  const clonedObj = {};

  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(value[key]);
    }
  }
  return clonedObj;
}

const objects = [{ a: 1 }, { b: 2 }];
const deep = deepClone(objects);

console.log(deep === objects); // Output: false
deep[0].a = 42;
console.log(objects[0].a); // Output: 1
