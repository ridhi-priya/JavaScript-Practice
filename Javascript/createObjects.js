// Method	            Description	                                                 Use Case
// Object Literal	    Easiest way to create objects	                             Best for static objects
// new Object()	        Creates an empty object and assigns properties dynamically	 Rarely used, but useful for dynamic properties
// Constructor Function	Uses new to create objects	                                 When needing reusable object blueprints
// Class (ES6)	        Modern way of creating objects	                             Best for OOP-based projects
// Object.create()	    Creates objects inheriting from a prototype	                 When prototype-based inheritance is needed
// Object.assign()	    Copies properties between objects	                         Merging objects or cloning
// Factory Function	    Returns a new object from a function	                     When you need object creation without new

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
