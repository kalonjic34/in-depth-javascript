# JavaScript In-Depth: Functions, Scope & Execution Context

## Overview

This project is a comprehensive exploration of JavaScript functions, scope, and execution context. It covers various methods, operations, and challenges related to these fundamental concepts. Below is a detailed summary of what I have learned and accomplished in each file.

## Files and Content

### 1. `function-basics.js`

**Learnings:**
- **Defining Functions**: Understanding how to define functions using the `function` keyword.
- **Invoking Functions**: Learning how to call functions to execute the code within them.
- **Returning Values**: Using the `return` statement to return values from functions.
- **Function Parameters and Arguments**: Understanding how to pass data to functions using parameters and arguments.

**Key Code:**
```javascript
function sayHello() {
    console.log('Hello World');
}
sayHello();

function add(num1, num2) {
    console.log(num1 + num2);
}
add(5, 10);

function substract(num1, num2) {
    return num1 - num2;
}
const result = substract(10, 2);
console.log(result, substract(20, 5));
```

### 2. `more-parameters-arguments.js`

**Learnings:**
- **Default Parameters**: Setting default values for function parameters to handle cases where no arguments are passed.
- **Rest Parameters**: Using the rest parameter syntax (`...`) to handle an indefinite number of arguments as an array.
- **Objects and Arrays as Parameters**: Passing objects and arrays as function parameters and accessing their properties and elements within the function.

**Key Code:**
```javascript
function registerUser(user = 'Bot') {
    return user + ' is registered';
}
console.log(registerUser());

function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3));

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in.`;
}
const user = {
    id: 1,
    name: 'John'
};
console.log(loginUser(user));

function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}
getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

### 3. `global-function-scope.js`

**Learnings:**
- **Global Scope**: Variables declared outside any function have global scope and can be accessed from anywhere in the code.
- **Function Scope**: Variables declared within a function are local to that function and cannot be accessed from outside the function.
- **Scope Chain**: Understanding how JavaScript looks up variables in the scope chain, starting from the local scope and moving up to the global scope.

**Key Code:**
```javascript
const x = 100;
console.log(x, 'in global');

function run() {
    console.log(window.innerHeight);
    console.log(x, 'in function');
}
run();

if (true) {
    console.log(x, 'in block');
}

function add() {
    const x = 1;
    const y = 50;
    console.log(x + y);
}
add();
```

### 4. `block-scope.js`

**Learnings:**
- **Block Scope**: Variables declared with `let` and `const` inside a block (e.g., inside an `if` statement or a loop) are local to that block.
- **Difference Between `var`, `let`, and `const`**: Understanding how `var` is function-scoped while `let` and `const` are block-scoped.

**Key Code:**
```javascript
const x = 100;
const foo = 1;
var bar = 2;

if (true) {
    const y = 200;
    console.log(x + y);
}

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}
console.log(c);

function run() {
    var d = 100;
    console.log(d);
}
run();
```

### 5. `nested-scope.js`

**Learnings:**
- **Nested Functions**: Functions can be nested inside other functions, and inner functions have access to variables in their outer scope.
- **Scope Chain in Nested Functions**: Understanding how the scope chain works in nested functions, allowing inner functions to access variables from their parent functions.

**Key Code:**
```javascript
function first() {
    const x = 100;
    function second() {
        const y = 200;
    }
    second();
}
first();

if (true) {
    const x = 100;
    if (x === 100) {
        const y = 200;
        console.log(x + y);
    }
}
```

### 6. `declaration-expression.js`

**Learnings:**
- **Function Declaration**: Defining functions using the `function` keyword, which are hoisted to the top of their scope.
- **Function Expression**: Defining functions as expressions and assigning them to variables, which are not hoisted.

**Key Code:**
```javascript
function addDollorSign(value) {
    return '$' + value;
}
console.log(addDollorSign(100));

const addPlusSign = function(value) {
    return '+' + value;
}
console.log(addPlusSign(200));
```

### 7. `arrow-functions.js`

**Learnings:**
- **Arrow Functions**: Using arrow functions for concise function expressions.
- **Implicit Returns**: Understanding how arrow functions can implicitly return values without using the `return` keyword.
- **Single Parameter Syntax**: Learning that parentheses can be omitted when there is only one parameter.
- **Returning Objects**: Using parentheses to return objects from arrow functions.

**Key Code:**
```javascript
const add = (a, b) => {
    return a + b;
}
const substract = (a, b) => a - b;
const double = a => a * 2;
const createObj = () => ({
    name: 'Chris'
});

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n) {
    console.log(n);
});
numbers.forEach(n => console.log(n));

console.log(add(1, 2));
console.log(substract(10, 5));
console.log(double(10));
console.log(createObj());
```

### 8. `invoked-function-expressions.js`

**Learnings:**
- **IIFE (Immediately Invoked Function Expressions)**: Understanding how to create and execute functions immediately after they are defined.
- **Private Scope**: Using IIFE to create a private scope for variables and functions, preventing them from polluting the global scope.

**Key Code:**
```javascript
(function() {
    const user = 'Chris';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();
```

### 9. `function-challenges.js`

**Learnings:**
- **Practical Application**: Applying function concepts to solve practical problems and challenges.
- **Combining Concepts**: Using a combination of function definitions, scope, and execution context to achieve desired outcomes.

**Challenges and Solutions:**

**Challenge 1:**
- Convert Fahrenheit to Celsius.

**Solution:**
```javascript
const getCelsius = (f) => {
    return (f - 32) * 5 / 9;
}
console.log(`The temperature is ${getCelsius(32)} degrees`);
```

**Challenge 2:**
- Find the minimum and maximum values in an array.

**Solution:**
```javascript
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        min,
        max,
    };
}
console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));
```

**Challenge 3:**
- Calculate the area of a rectangle using an IIFE.

**Solution:**
```javascript
((length, width) => {
    const area = length * width;
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    console.log(output);
})(10, 5);
```

## Conclusion

This project has provided a deep dive into JavaScript functions, scope, and execution context, covering a wide range of methods and operations. Through practical examples and challenges, I have gained a solid understanding of how to work with these essential concepts in JavaScript.

