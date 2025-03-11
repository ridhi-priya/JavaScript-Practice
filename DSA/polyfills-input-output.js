let student = [
  {
    name: "Deepak",
    rollNo: 1,
    marks: 80,
  },
  {
    name: "Ridhi",
    rollNo: 4,
    marks: 60,
  },
  {
    name: "Siddhi",
    rollNo: 3,
    marks: 54,
  },
  {
    name: "Nidhi",
    rollNo: 6,
    marks: 33,
  },
];
// capitalize the name
// ****** using for loop *******
let names = [];
for (let i = 0; i < student.length; i++) {
  names.push(student[i].name.toUpperCase());
}
console.log(names);

// ******using map****

let mapStu = student.map((i) => {
  return i.name.toUpperCase();
});
console.log(mapStu);

// filter the details of student whose marks>50 and rollNo>2
let filterStu = student.filter((i) => {
  return i.marks > 50 && i.rollNo > 2;
});
console.log(filterStu);

// ***sum of the marks of all the students***
let reduceStu = student.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);
console.log(reduceStu);
