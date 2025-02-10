const x = {
  name: "Ridhi",
  age: 24,
  course: "MCA",
  show: function () {
    console.log(this.course);
    let valofx = this;
    setTimeout(function () {
      console.log(`the name is ${valofx.name}\nage is ${valofx.course}`);
    }, 2000);
  },
};
console.log(x);
x.show();
