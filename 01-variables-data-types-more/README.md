# Variables, Data Types, and Additional Concepts

## Overview

This project is a comprehensive exploration of JavaScript, covering various fundamental and advanced topics. Below is a summary of what I've learned and the code examples I've worked on.

## Topics Covered

### 1. Console

- **Console Methods**: Using `console.log()`, `console.error()`, `console.table()`, `console.group()`, and `console.groupEnd()`.
- **Example**:
    ```javascript
    // console.js
    console.log(100);
    console.log("Hello World");
    console.log(20, "Hello", true);
    const x = 100;
    console.log(x);
    console.error("Alert");
    console.log("Warning");
    console.table({
        name: "Chris",
        email: "kalonjic@gmail.com"
    });
    console.group("simple");
    console.log(x);
    console.error("Alert");
    console.log("Warning");
    console.groupEnd();
    const styles = 'padding 10px; background-color: white; color: green';
    console.log('%cHello World', styles);
    ```

### 2. Variables

- **Variables**: Different ways to declare variables using `var`, `let`, and `const`.
- **Naming Conventions**: Rules for naming variables and different naming styles.
- **Example**:
    ```javascript
    // variables.js
    let firstName = 'John';
    let lastName = 'Doe';
    console.log(firstName, lastName);
    let age = 30;
    console.log(age);
    age = 31;
    console.log(age);
    let score;
    score = 1;
    console.log(score);
    if (true) {
        score += 1;
    }
    console.log(score);
    const y = 100;
    const arr = [1, 2, 3, 4];
    arr.push(5);
    console.log(arr);
    const person = {
        name: 'Chris'
    };
    person.name = 'Liam';
    person.email = 'liamgraham@gmail.com';
    console.log(person);
    let a, b, c;
    const d = 10, e = 20, f = 30;
    console.log(d);
    console.log(e);
    ```

### 3. Data Types

- **Data Types**: Understanding primitive data types such as strings, numbers, booleans, null, undefined, symbols, and BigInt.
- **Reference Types**: Arrays, objects, and functions.
- **Example**:
    ```javascript
    // datatypes.js
    const firstName = 'Sarah';
    const age = 30;
    const temp = 98.9;
    const hasKids = true;
    const aptNumber = null;
    const score = undefined;
    const id = Symbol('id');
    const n = 592745026404057262n;
    const numbers = [1, 2, 3, 4];
    const person = {
        name: "Chris"
    };
    function sayHello() {
        console.log("Hello");
    }
    const output = sayHello;
    console.log(output, typeof output);
    ```

### 4. Math Object

- **Math Methods**: Using methods like `Math.sqrt()`, `Math.abs()`, `Math.round()`, `Math.ceil()`, `Math.floor()`, `Math.pow()`, `Math.min()`, `Math.max()`, and `Math.random()`.
- **Example**:
    ```javascript
    // math-object.js
    let x;
    x = Math.sqrt(9);
    x = Math.abs(-5);
    x = Math.round(4.2);
    x = Math.ceil(4.2);
    x = Math.floor(4.9);
    x = Math.pow(2, 3);
    x = Math.min(4, 5, 3);
    x = Math.max(4, 5, 3);
    x = Math.random();
    x = Math.floor(Math.random() * 10 + 1);
    console.log(x);
    ```

### 5. Date Objects and Methods

- **Date Methods**: Creating and manipulating dates using `Date` object methods like `toString()`, `getTime()`, `getFullYear()`, `getMonth()`, `getDate()`, and `Intl.DateTimeFormat`.
- **Example**:
    ```javascript
    // date-objects-methods.js
    let x;
    let d = new Date();
    x = d.toString();
    x = d.getTime();
    x = d.getFullYear();
    x = d.getMonth() + 1;
    x = d.getDate();
    x = Intl.DateTimeFormat('en-US').format(d);
    x = Intl.DateTimeFormat('en-GB').format(d);
    x = Intl.DateTimeFormat('default').format(d);
    x = d.toLocaleString('default', { month: 'short' });
    console.log(x);
    ```

### 6. Date and Time

- **Date Creation**: Creating dates using different formats and methods.
- **Example**:
    ```javascript
    // date-times.js
    let d;
    d = new Date();
    d = new Date(2021, 5, 12, 12, 30, 0);
    d = new Date('2021-07-10T12:30:00');
    d = new Date('07-10-2021 12:30:00');
    d = new Date('2022-07-10');
    d = Date.now();
    d = new Date('07-10-2022 12:30:00');
    d = d.getTime();
    console.log(d);
    ```

### 7. Numbers

- **Number Methods**: Using methods like `toString()`, `toFixed()`, `toPrecision()`, `toExponential()`, `toLocaleString()`, and properties like `Number.MAX_VALUE` and `Number.MIN_VALUE`.
- **Example**:
    ```javascript
    // numbers.js
    let x;
    const num = new Number(5);
    x = num.toString();
    x = num.toString().length;
    x = num.toFixed(2);
    x = num.toPrecision(3);
    x = num.toExponential(2);
    x = num.toLocaleString('en-US');
    x = num.valueOf();
    x = Number.MAX_VALUE;
    x = Number.MIN_VALUE;
    console.log(x);
    ```

### 8. Type Conversion

- **Type Conversion**: Converting between different data types using methods like `parseFloat()`, `Number()`, `toString()`, and `Boolean()`.
- **Example**:
    ```javascript
    // typeConversion.js
    let amount = '99.5';
    amount = Boolean(amount);
    console.log(amount, typeof amount);
    ```

### 9. Type Coercion

- **Type Coercion**: Understanding implicit type conversion in JavaScript.
- **Example**:
    ```javascript
    // typecoercion.js
    let y;
    y = 5 + '5';
    y = 5 + Number('5');
    y = 5 * '5';
    y = Number(null);
    y = Number(false);
    y = 5 + true;
    y = 5 + false;
    y = 5 + undefined;
    console.log(y, typeof y);
    ```

### 10. Operators

- **Operators**: Using arithmetic, concatenation, exponentiation, increment, decrement, assignment, and comparison operators.
- **Example**:
    ```javascript
    // operators.js
    let x;
    x = 5 + 5;
    x = 5 - 5;
    x = 5 * 5;
    x = 5 / 5;
    x = 5 % 5;
    x = "Hello" + " world";
    console.log(x);
    x = 2 ** 3;
    x = 1;
    x++;
    x = x - 1;
    x--;
    x = 10;
    x += 5;
    x -= 5;
    x *= 5;
    x /= 5;
    x **= 5;
    x = x + 1;
    console.log(x);
    x = 2 == 1;
    x = 2 === 2;
    x = 2 != 2;
    x = 2 !== 2;
    x = 10 > 5;
    x = 10 < 5;
    x = 10 <= 5;
    x = 10 >= 5;
    console.log(x);
    ```

### 11. Strings

- **String Methods**: Using methods like `toUpperCase()`, `toLowerCase()`, `charAt()`, `indexOf()`, `substring()`, and `slice()`.
- **Example**:
    ```javascript
    // strings.js
    let a;
    const name1 = 'John';
    const age1 = 31;
    a = "Hello, my name is " + name1 + " and I am " + age1 + " years old";
    a = `Hello, my name is ${name1} and I am ${age1} years old`;
    const s = "Hello World";
    a = typeof s;
    a = s.length;
    a = s[1];
    a = s.__proto__;
    a = s.toUpperCase();
    a = s.toLowerCase();
    a = s.charAt(0);
    a = s.indexOf('e');
    a = s.indexOf('d');
    a = s.substring(0, 4);
    a = s.substring(7);
    a = s.slice(0, 5);
    console.log(a);
    ```

### 12. Capitalize Challenge

- **String Manipulation**: Capitalizing the first letter of a string.
- **Example**:
    ```javascript
    // capitalize-challenge.js
    const myString = 'developer';
    const myNewString = myString[0].toUpperCase() + myString.substring(1);
    console.log(myNewString);
    ```

### 13. Number Challenge

- **Random Numbers**: Generating random numbers and performing arithmetic operations.
- **Example**:
    ```javascript
    // number-challenge.js
    const x = Math.floor(Math.random() * 100) + 1;
    const y = Math.floor(Math.random() * 50) + 1;
    const sum = x + y;
    const sumOfOutput = `${x} + ${y} = ${sum}`;
    const difference = x - y;
    const differenceOutput = `${x} - ${y} = ${difference}`;
    const product = x * y;
    const productOutput = `${x} * ${y} = ${product}`;
    const quotient = x / y;
    const quotientOutput = `${x} / ${y} = ${quotient}`;
    const rm = x % y;
    const rmOutput = `${x} % ${y} = ${rm}`;
    console.log(sumOfOutput);
    console.log(differenceOutput);
    console.log(productOutput);
    console.log(quotientOutput);
    console.log(rmOutput);
    ```

## Conclusion

This project has provided a solid foundation in JavaScript, covering essential concepts and practical examples. The knowledge gained here will be instrumental in building more complex applications and understanding advanced JavaScript topics.