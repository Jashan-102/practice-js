const bgcolor = document.querySelector("#bgChange");
console.log(bgcolor);
function ChangeColor1() {
  debugger;
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgba(${red}, ${green}, ${blue})`;
  return randomColor;
}

bgcolor.addEventListener("click", () => {
  const getRandomColor = ChangeColor1();
  document.body.style.backgroundColor = getRandomColor;
});
