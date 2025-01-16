const employee = {
  name: "ridhi",
  age: 24,
  company: "TCS",
  salary: 20000,
  email: "ridhi.priya@tcs.com",
  Project: "shell",
};

console.log(employee);

console.log(JSON.stringify(employee));

const emp =
  '{"name":"ridhi","age":24,"company":"TCS","salary":20000,"email":"ridhi.priya@tcs.com","Project":"shell"}';

console.log(JSON.parse(emp));

const emp2 = ["shristy", 10000, "infodart", "shristy.kumari@infodart.com"];
console.log(emp2);
console.log(JSON.stringify(emp2));
