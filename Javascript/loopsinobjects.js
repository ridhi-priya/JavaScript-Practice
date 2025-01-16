// const employee = {
//   name: "John",
//   age: 26,
//   company: "SAP",
//   Salary: 400000,
// };

//1. using for loop

// for (let key in employee) {
//   console.log(`${key}: ${employee[key]}`);
// }

//2. using object.key (foreach loop)

// Object.keys(employee).forEach((key) => {
//   console.log(`${key}: ${employee[key]}`);
// });

//3. using object.value

// Object.values(employee).forEach((value) => {
//   console.log(`${value}`);
// });

//4. using object.entries

// Object.entries(employee).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

//5. using for...of with entries

// for (let [key, value] of Object.entries(employee)) {
//   console.log(`${key}: ${value}`);
// }

//6. using foreach with map-like object

// const employee = new Map([
//   ["name", "John"],
//   ["age", 26],
//   ["company", "SAP"],
//   ["Salary", 400000],
// ]);

// employee.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });
