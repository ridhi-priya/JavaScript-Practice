document.querySelector(".products").addEventListener("click", (event) => {
  console.log(event.target.closest("SPAN"));
  if (event.target.tagName === "SPAN") {
    window.location.href += "./" + event.target.className;
  }
});
