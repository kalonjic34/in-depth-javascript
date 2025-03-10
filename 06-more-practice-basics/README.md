
# More Practice: Basics Variables, Data Types, Operators & Functions

## Overview

This project is a simple calculator application that demonstrates the basics of JavaScript, including variables, data types, operators, and functions. The application allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- Get user input from an input field
- Perform arithmetic operations (addition, subtraction, multiplication, division)
- Display the result of the calculation
- Log the calculation details

## Concepts Covered

### Variables

Variables are used to store data that can be referenced and manipulated in a program. In this project, we use variables to store the current result and log entries.

```javascript
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
```

### Data Types

JavaScript supports various data types, including numbers, strings, and objects. In this project, we primarily work with numbers and objects.

```javascript
const enteredNumber = parseFloat(usrInput.value); // Number
const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
}; // Object
```

### Operators

Operators are used to perform operations on variables and values. In this project, we use arithmetic operators to perform calculations.

```javascript
currentResult += enteredNumber; // Addition
currentResult -= enteredNumber; // Subtraction
currentResult *= enteredNumber; // Multiplication
currentResult /= enteredNumber; // Division
```

### Functions

Functions are blocks of code designed to perform a particular task. In this project, we use functions to get user input, perform calculations, and log the results.

```javascript
function getUserNumberInput() {
    return parseFloat(usrInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteLog('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

// Similar functions for subtract, multiply, and divide
```

## How to Run

1. Clone the repository.
2. Open the `index.html` file in a web browser.
3. Enter a number in the input field.
4. Click on one of the operation buttons (Add, Subtract, Multiply, Divide) to perform the calculation.
5. The result and calculation details will be displayed on the screen.

## Conclusion

This project provides a practical example of using variables, data types, operators, and functions in JavaScript. By building this simple calculator, you can reinforce your understanding of these fundamental concepts.
