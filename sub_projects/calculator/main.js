//yellow nav
const navButton = document.querySelector("button[aria-expanded]");

function toggleNav({ target }) {
  const expanded = target.getAttribute("aria-expanded") === "true" || false;
  navButton.setAttribute("aria-expanded", !expanded);
}

navButton.addEventListener("click", toggleNav);

//const num1 = parseInt(prompt("please select a number"));
//const operator = prompt("please select an operator");
//const num2 = parseInt(prompt("please select the second number"));

const operatorPlus = document.getElementById("+");
const operatorMinus = document.getElementById("-");
const operatorTimes = document.getElementById("x");
const operatorDivide = document.getElementById("/");

//operator functions
const operate = (n1, operator, n2) => {
  let result = "";
  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result.toFixed();
};

const calculator = document.querySelector(".container");
const output = document.getElementById("output");
const keys = document.querySelector(".keypad");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = output.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        output.textContent = keyContent;
      } else {
        output.textContent = displayedNum + keyContent;
      }
    }

    if (action === "decimal") {
      output.textContent = displayedNum + ".";
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      output.textContent = operate(firstValue, operator, secondValue);

      operatorPlus.classList.remove("is-depressed");
      operatorMinus.classList.remove("is-depressed");
      operatorTimes.classList.remove("is-depressed");
      operatorDivide.classList.remove("is-depressed");
    }

    if (action === "clear") {
      output.textContent = "0";
      operatorPlus.classList.remove("is-depressed");
      operatorMinus.classList.remove("is-depressed");
      operatorTimes.classList.remove("is-depressed");
      operatorDivide.classList.remove("is-depressed");
    }
  }
});

//console key presses
keys.addEventListener("click", (e) => {
  const key = e.target;
  const action = key.dataset.action;
  if (e.target.matches("button")) {
    if (!action) {
      console.log("number key!");
    } else if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key!");
    } else if (action === "decimal") {
      console.log("decimal key!");
    } else if (action === "clear") {
      console.log("clear key!");
    } else if (action === "calculate") {
      console.log("calculate key!");
    }
  }
});
