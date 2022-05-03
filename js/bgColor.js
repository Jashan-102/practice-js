const body = document.querySelector("#bgColorBody");
console.log(body);

const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

// body.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;

// const changeColorBtn = document.querySelector("#changeColorBtn");

// function ChangeColor1() {
// }

setInterval(() => {
  body.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;
}, 100);
