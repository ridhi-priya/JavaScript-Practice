// 1.object literals

// const obj = {
//   name: "ridhi",
//   age: 24,
// };
// console.log(obj);

// 2.Object using new keyword

// const obj = new Object();
// obj.name = "john";
// obj.age = 23;
// obj.greet = function () {
//   console.log(`hello my name is ${obj.name} and age is ${obj.age}`);
// };

// console.log(obj);
// obj.greet();

// 3. object using spreed operator

// const employee = {
//   name: "Ridhi",
//   salary: 200000,
// };
// const newemployee = { ...employee };

// console.log(newemployee);

// 4. object using constructor
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`hello my name is ${this.name} and age is ${this.age}`);
//   };
// }

// const display = new Person("Ridhi", 24);
// display.greet();

// // 5. object.assign()

// const employee = {
//   name: "Ridhi",
//   salary: 200000,
// };
// const obj = Object.assign({ ...display }, employee);
// console.log(obj);

// Parsing JSON:

// const employee = '{ "name": "Ridhi", "salary": 200000}';
// const usingparseJson = JSON.parse(employee);
// console.log(usingparseJson);

// const stringyfy json
// const obj = { name: "ridhi", age: 24 };
// const usinstringifyJson = JSON.stringify(obj);
// console.log(usinstringifyJson);
