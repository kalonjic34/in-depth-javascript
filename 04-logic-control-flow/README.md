# JavaScript In-Depth: Logic & Control Flow

## Overview

This project is a comprehensive exploration of JavaScript logic and control flow. It covers various methods, operations, and challenges related to these fundamental concepts. Below is a detailed summary of what I have learned and accomplished in each file.

## Files and Content

### 1. `if-statement.js`

**Learnings:**
- **If Statements**: Understanding how to use `if` statements to execute code based on a condition.
- **Else Statements**: Using `else` to execute code when the `if` condition is false.
- **Else If Statements**: Combining multiple conditions using `else if`.
- **Shorthand If Statements**: Writing concise `if` statements without braces for single-line statements.

**Key Code:**
```javascript
if (true) {
    console.log("This is true");
}

if (false) {
    console.log("This is NOT true");
}

const x = 10;
const y = 5;

if (x >= y) {
   console.log(`${x} is greater than or equal to ${y}`); 
}

if (x === y) {
   console.log(`${x} is equal to ${y}`); 
} else {
    console.log(`${x} is NOT equal to ${y}`);
}

const z = 20;
if (x !== y) {
    console.log(`${z} is 20`);
}

console.log(z);

// Shorthand If
if (x >= y) console.log(`${x} is greater than or equal to ${y}`), console.log("This is true");
else console.log('this is false');
```

### 2. `if-else-nesting.js`

**Learnings:**
- **Nested If Statements**: Using `if` statements within other `if` statements to create complex conditions.
- **Combining Conditions**: Using logical operators (`&&`, `||`) to combine multiple conditions in `if` statements.

**Key Code:**
```javascript
const d = new Date(10, 30, 2024, 6, 0, 0);
const hour = d.getHours();

if (hour < 12) {
    console.log("Good Morning");
} else if (hour < 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Night");
}

// Nested If
if (hour < 12) {
    console.log("Good Morning");
    if (hour === 6) {
        console.log("Wake up!");
    }
} else if (hour < 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Night");
    if (hour >= 20) {
        console.log("zzzzzz");
    }
}

if (hour >= 7 && hour < 15) {
    console.log("It is work time!");
}

if (hour === 6 || hour === 20) {
    console.log("Brush your teeth!");
}
```

### 3. `switches.js`

**Learnings:**
- **Switch Statements**: Using `switch` statements to execute code based on the value of a variable.
- **Case and Default**: Understanding how to use `case` to match specific values and `default` for unmatched cases.
- **Switch with Conditions**: Using `switch` with conditions to handle ranges of values.

**Key Code:**
```javascript
const d = new Date(2025, 1, 10, 13, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
    default:
        console.log('Its not Jan, Feb or March');
        break;
}

switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
    default:
        console.log('Good night');
        break;
}
```

### 4. `calculator-challenge.js`

**Learnings:**
- **Switch Statements in Functions**: Using `switch` statements within functions to perform different operations based on input.
- **Basic Calculator**: Implementing a basic calculator that can add, subtract, multiply, and divide two numbers.

**Key Code:**
```javascript
const calculator = (num1, num2, operator) => {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    console.log(result);
    return result;
}
calculator(5, 2, '*');
```

### 5. `truthy-falsy.js`

**Learnings:**
- **Truthy and Falsy Values**: Understanding which values are considered truthy or falsy in JavaScript.
- **Boolean Conversion**: Using `Boolean()` to convert values to their boolean equivalents.
- **Common Caveats**: Recognizing common pitfalls when working with truthy and falsy values.

**Key Code:**
```javascript
const x = function() {};

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 3;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

// Checking for empty arrays
const post = ['Post One', 'Post Two'];

if (post.length > 0) {
    console.log('List Post');
} else {
    console.log('No Post to list');
}

// Checking for empty objects
const user = {
    name: 'Chris'
};

if (Object.keys(user).length > 0) {
    console.log('List user');
} else {
    console.log('No user');
}

// Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
```

### 6. `logical-operator.js`

**Learnings:**
- **Logical AND (`&&`)**: Understanding how `&&` returns the first falsy value or the last value if all are truthy.
- **Logical OR (`||`)**: Understanding how `||` returns the first truthy value or the last value if all are falsy.
- **Nullish Coalescing (`??`)**: Using `??` to return the right side operand when the left is `null` or `undefined`.

**Key Code:**
```javascript
console.log(10 > 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 < 15);

// && - Will return first falsy value or the last value
let a;
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 30;
console.log(a);

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// || - Will return the first truthy value or the last
let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;
console.log(b);

// ?? Returns the right side operand when the left is null or undefined
let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 20;
c = 0 ?? 20;
c = '' ?? 20;
console.log(c);
```

### 7. `logical-assignment.js`

**Learnings:**
- **Logical OR Assignment (`||=`)**: Assigning the right side value only if the left is a falsy value.
- **Logical AND Assignment (`&&=`)**: Assigning the right side value only if the left is truthy.
- **Nullish Coalescing Assignment (`??=`)**: Assigning the right side value only if the left is `null` or `undefined`.

**Key Code:**
```javascript
let a = null;
a ||= 10;
console.log(a);

let b = 10;
b &&= 20;
console.log(b);

let c = null;
c ??= 20;
console.log(c);
```

### 8. `ternary-operator.js`

**Learnings:**
- **Ternary Operator**: Using the ternary operator (`? :`) as a shorthand for `if-else` statements.
- **Conditional Assignment**: Assigning values to variables based on conditions using the ternary operator.
- **Multiple Statements**: Executing multiple statements within the ternary operator using the comma operator.

**Key Code:**
```javascript
const age = 24;

// Using an if statement
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You cannot vote!');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log('You cannot vote!');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You cannot vote!';
console.log(canVote);
console.log(canVote2);

// Multiple statements
const auth = true;
const redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access Denied'), '/login');
console.log(redirect);

auth ? console.log('Welcome to the dashboard') : null;
auth && console.log('Welcome to the dashboard');
```

## Conclusion

This project has provided a deep dive into JavaScript logic and control flow, covering a wide range of methods and operations. Through practical examples and challenges, I have gained a solid understanding of how to work with these essential concepts in JavaScript.

