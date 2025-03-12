let obj = {
  name: "Ridhi",
};
function sayHello(age, profession) {
  return (
    "Hello " +
    this.name +
    " age is " +
    age +
    " age " +
    "profession is " +
    profession
  );
}
console.log(sayHello.apply(obj, [24, "SDE"]));

// ******another example******
let emp1 = {
  name: "ridhi",
  age: 24,
  designation: "frontend dev",
  printName: function () {
    console.log(this.name);
  },
};
let printDetails = function (state, country) {
  console.log(this.name + " " + state + " " + country);
};
// emp1.printName();
printDetails.call(emp1, "jharkhand", "India"); //
let emp2 = {
  name: "deepak",
  age: 27,
  designation: "software dev",
};
printDetails.call(emp2, ["jharkhand", "India"]);
// printDetails.call(emp2);
