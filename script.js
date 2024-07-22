let num1;
let operator;
let num2;

const numbers = document.querySelectorAll(".numbers");
const screen = document.querySelector("#screen");
// we use the .forEach method to iterate through each button
numbers.forEach((numberKey) => {
  // and for each one we add a 'click' listener
  numberKey.addEventListener("click", () => {
        screen.textContent += numberKey.id;
  });
});


const operators = document.querySelectorAll(".operator");

operators.forEach((operatorKey) => {
    // and for each one we add a 'click' listener
operatorKey.addEventListener("click", () => {
        num1 = screen.textContent;
        operator = operatorKey.id;
        screen.textContent = "";
    });
});

const equals = document.querySelector(".equals");

equals.addEventListener("click", () => {
    num2 = screen.textContent;
    let result = operate(Number(num1), Number(num2), operator);
    console.log(result);
    screen.textContent = result;
});


const operate = function(num1, num2, operator) {
    const operatorRelation = {
        '+': add,
        '-': subtract,
        'x': multiply,
        '/': divide,
        '^': power,
    };

    return operatorRelation[operator](num1, num2);
}

const add = function(num1, num2) {

	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

const power = function(num, pow) {
  return Math.pow(num, pow);
};

const factorial = function(num) {
  var fac = 1;
	for (var i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
};