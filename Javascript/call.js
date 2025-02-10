let emp1 = {
  name: "ridhi",
  age: 24,
  designation: "frontend dev",
  printName: function () {
    console.log(this.name);
  },
};
let printDetails = function (state) {
  console.log(this.name + " " + state);
};
// emp1.printName();
printDetails.call(emp1, "jharkhand");
let emp2 = {
  name: "deepak",
  age: 27,
  designation: "software dev",
};
printDetails.call(emp2, "jharkhand");
// printDetails.call(emp2);
