const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener(
  "click",
  function () {
    alert("div");
  },
  {
    capture: true,
  }
);
form.addEventListener(
  "click",
  function () {
    alert("form");
  },
  {
    capture: true,
  }
);
button.addEventListener(
  "click",
  function () {
    alert("button");
  },
  {
    capture: true,
  }
);
