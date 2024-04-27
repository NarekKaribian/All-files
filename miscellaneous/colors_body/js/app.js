const button = document.getElementById("btn");
const color = document.querySelector(".color");

const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

button.addEventListener("click", () => {
  let bodyColor = generateColor();
  document.body.style.backgroundColor = bodyColor;
  color.textContent = bodyColor;
});

function generateColor() {
  let bodyColor = "#";
  for (let i = 0; i < 6; i++) {
    bodyColor += colors[getRandomNumber()];
  }
  return bodyColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
