const abc = 23;
const calculator = document.getElementById("calculator");
const display = document.getElementById("display");
const calc = document.getElementById("calc");
const button = document.getElementById("button");
const number = document.getElementById("number");
const buttons = document.getElementById("buttons");

let a = "";
let b = "";
let sign = "";
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const element = ["/", "x", "+", "-", ".", "="];
outerHeight.textContent = "0";
calc.addEventListener("click", (event) => {
  const key = event.target.textContent;
  button.addEventListener("click", () => {
    if (key === "/") {
      calculator.textContent = Number(a) / Number(b);
    } else if (key == "-") {
      calculator.textContent = Number(a) - Number(b);
    } else if (key == "+") {
      calculator.textContent = Number(a) + Number(b);
    } else if (key == "x") {
      calculator.textContent = Number(a) * Number(b);
    }
  });
  if (digit.includes(rey)) {
    if (b === "" && sign === "") {
      a += key;
      calculator.textContent = a;
    } else {
      b += key;
      calculator.textContent = b;
    }
  }
  if (element.includes(key)) {
    sign = key;
    calculator.textContent = sign;
  }
});
