function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(a, b) {
  return +a * +b;
}

function divide(a, b) {
  return +a / +b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}

let numberList1 = [],
  numberList2 = [];
let operator = "";
let masterList = [];

display = document.querySelector('.display');

clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
  clearDisplay();
  clearMemory();
});

numbers = document.querySelectorAll('.numpad .num');
numbers.forEach(number => {
  number.addEventListener('click', numberClicked)
});

operators = document.querySelectorAll('.operators');
operators.forEach(operator => {
  operator.addEventListener('click', operatorClicked)
})

equals = document.querySelector('.equals');
equals.addEventListener('click', equalsClicked);

function displayNumbers(item) {
  display.textContent = item;
}

function clearDisplay() {
  display.textContent = "0";
}

function clearMemory() {
  numberList1 = [];
  numberList2 = [];
  operator = "";
}

function numberClicked(e) {
  numberList1.push(e.target.textContent);
  console.log(numberList1);
  displayNumbers(numberList1.join(""));
}

function operatorClicked(e) {
  operator = e.target.textContent;
  clearDisplay()
  numberList2 = numberList1;
  numberList1 = [];
  console.log(operator);
}

function equalsClicked(e) {
  displayNumbers(operate(operator, numberList2.join(""), numberList1.join("")));
  clearMemory();
}