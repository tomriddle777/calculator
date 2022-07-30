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
    case "add":
      add(a, b);
      break;
    case "subtract":
      subtract(a, b);
      break;
    case "multiply":
      multiply(a, b);
      break;
    case "divide":
      divide(a, b);
      break;
  }
}

function displayNumbers() {
  display.textContent = numberList.join("");
}

function clearDisplay() {
  display.textContent = "0";
}

const numberList = [];

function numberClicked(e) {
  numberList.push(e.target.textContent);
  e.stopPropagation();
  console.log(numberList);
  displayNumbers();
}

display = document.querySelector('.display');
display.addEventListener('click', displayNumbers);

clear = document.querySelector(".clear");
clear.addEventListener('click', clearDisplay);

numbers = document.querySelectorAll('.numpad button');
numbers.forEach(number => {
  number = number.addEventListener('click', numberClicked)
});


