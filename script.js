let num1 = undefined;
let operator = undefined;
let num2 = undefined;
let screenContent = "";
let result = 0;
let decimals = 5;

const numbers = document.querySelectorAll(".numbers");
const writeText = document.querySelector("#writeText");
const resultView = document.querySelector("#resultView");

// we use the .forEach method to iterate through each button
numbers.forEach((numberKey) => {
  // and for each one we add a 'click' listener
    numberKey.addEventListener("click", () => {
        if (numberKey.id === "." && containsDot()) {
        }
        else {
            screenContent += numberKey.id;
        }
        writeText.textContent = screenContent;
  });
});


const operators = document.querySelectorAll(".operator");

operators.forEach((operatorKey) => {
    // and for each one we add a 'click' listener
operatorKey.addEventListener("click", () => {
    
    if (screenContent != "" && operator === undefined) {
        num1 = parseFloat(screenContent);
    }
    else if (screenContent === "" && operator !== undefined) {
        num1 = num1;
    }
    else {
        num1 = result;
    }

    operator = operatorKey.id;
    resultView.textContent = Math.round(num1*Math.pow(10, decimals))/Math.pow(10, decimals) + " " + operator;
    screenContent = "";
    writeText.textContent = screenContent;
    });
});

const equals = document.querySelector(".equals");

equals.addEventListener("click", () => {
    num2 = screenContent;
    result = operate(parseFloat(num1), parseFloat(num2), operator);
    clearContent();
    resultView.textContent = Math.round(result*Math.pow(10, decimals))/Math.pow(10, decimals);
    screenContent = "";
    writeText.textContent = screenContent;
});


const clearCalc = document.querySelector(".AC");

clearCalc.addEventListener("click", () => {
    clearCalculator();
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


const clearCalculator = function() {
    num1 = undefined;
    operator = undefined;
    num2 = undefined;
    screenContent = "";
    result = 0;
    writeText.textContent = "";
    resultView.textContent = "";

}

const containsDot = function() {
    var dot = false;
    for (var i = 0; i < screenContent.length; i++) {
        if (screenContent.charAt(i) === '.') {
            dot = true;
            break;
        }
    }
    return dot;
}

let clearContent = function() {
    num2 = undefined;
    operator = undefined;
}
