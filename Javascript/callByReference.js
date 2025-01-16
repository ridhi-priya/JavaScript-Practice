function change(object) {
  object.greet = "good evening";
}
let object = {
  greet: "good morning",
};
console.log(object);
change(object);
console.log(object);
