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
      let returnAns = divide(a, b);
      if (b != 0) {
        return returnAns.toFixed(2);
      }
      return "Baka.";
      break;
  }
}

let numberList1 = [],
  numberList2 = [];
let operator = "";
let answer;
let round = 1;

display = document.querySelector('.display');

clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
  clearDisplay();
  clearMemory();
});

numbers = document.querySelectorAll('.numpad .num');
numbers.forEach(number => {
  number.addEventListener('click', numberClicked);
});

operators = document.querySelectorAll('.operators');
operators.forEach(operator => {
  operator.addEventListener('click', operatorClicked);
})

equals = document.querySelector('.equals');
equals.addEventListener('click', equalsClicked);

function displayNumbers(item) {
  display.textContent = item;
}

function clearDisplay() {
  display.textContent = "0";
  round = 1;
}

function clearMemory() {
  numberList1 = [];
  numberList2 = [];
  operator = "";
  round = 1;
}

function numberClicked(e) {
  if (round === -1) {
    clearMemory();
  }
  numberList1.push(e.target.textContent);
  displayNumbers(numberList1.join(""));
}

function operatorClicked(e) {
  if (round === 2) {
    answer = operate(operator, numberList2.join(""), numberList1.join(""));
    displayNumbers(answer);
  } else if (round > 2) {
    numberList2 = answer
    answer = operate(operator, numberList2, numberList1.join(""));
    displayNumbers(answer);
  } else if (round === -1) {
    operator = e.target.textContent;
    round++;
    return;
  } else if (round === 0) {
    answer = operate(operator, numberList2.join(""), numberList1.join(""));
    displayNumbers(answer);
    round = 2;
  }
  operator = e.target.textContent;
  numberList2 = numberList1;
  numberList1 = [];
  round++;
}

function equalsClicked() {
  if (numberList2.length === 0 && round >= 1) {
    displayNumbers(numberList1.join(""));
    round = -1;
    return;
  }
  if (numberList1.length === 0) {
    displayNumbers(numberList2.join(""));
    round = -1;
    return;
  }
  if (round === 2) {
    answer = operate(operator, numberList2.join(""), numberList1.join(""));
  } else if (round === 0) {
    answer = operate(operator, numberList2.join(""), numberList1.join(""));
    round = 2;
  } else {
    answer = operate(operator, answer, numberList1.join(""));
  }
  displayNumbers(answer);
  clearMemory();
  numberList2 = answer.toString().split("");
  round = -1;
}