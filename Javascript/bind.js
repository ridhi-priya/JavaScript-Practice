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

const bindFunc = sayHello.bind(obj);
console.log(bindFunc(24, "SDE"));
