# JavaScript In-Depth: Loops, Iteration & Array Methods

## Overview

This project is a comprehensive exploration of JavaScript loops, iteration, and array methods. It covers various methods, operations, and challenges related to these fundamental concepts. Below is a detailed summary of what I have learned and accomplished in each file.

## Files and Content

### 1. `for-loop.js`

**Learnings:**
- **For Loops**: Understanding how to use `for` loops to iterate over a sequence of numbers.
- **Loop Control**: Using `break` and `continue` statements to control the flow of loops.
- **Nested Loops**: Using nested `for` loops to perform operations within multiple levels of iteration.
- **Looping Through Arrays**: Iterating over arrays using `for` loops.
- **Conditional Logic in Loops**: Implementing conditional logic within loops to perform specific actions based on conditions.

**Key Code:**
```javascript
for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        console.log('7 is my lucky number');
    } else {
        console.log('Number ' + i);
    }
}

// Nested loops
for (let i = 1; i <= 10; i++) {
    console.log('Number ' + i);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Loop through an array
const names = ['Chris', 'Sam', 'Ian', 'Alice'];
for (let i = 0; i < names.length; i++) {
    if (names[i] == 'Sam') {
        console.log('Sam is the best');
    } else {
        console.log(names[i]);
    }
}
```

### 2. `break-continue.js`

**Learnings:**
- **Break Statement**: Using the `break` statement to exit a loop prematurely.
- **Continue Statement**: Using the `continue` statement to skip the current iteration and proceed to the next one.
- **Loop Control**: Understanding how to control the flow of loops using `break` and `continue`.

**Key Code:**
```javascript
// Break
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Breaking...');
        break;
    }
    console.log(i);
}

// Continue
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('Skipping 13...');
        continue;
    }
    console.log(i);
}
```

### 3. `while-do-while-loops.js`

**Learnings:**
- **While Loops**: Using `while` loops to execute code as long as a condition is true.
- **Do-While Loops**: Using `do-while` loops to execute code at least once before checking the condition.
- **Looping Over Arrays**: Iterating over arrays using `while` loops.
- **Nesting While Loops**: Using nested `while` loops for more complex iterations.
- **Infinite Loops**: Understanding the risks of infinite loops and how to avoid them.

**Key Code:**
```javascript
let i = 0;

// Loop over arrays
const arr = [10, 20, 30, 40];
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Nesting while loops
while (i <= 5) {
    console.log('Number ' + i);
    let j = 1;
    while (j <= 5) {
        console.log(`${i * j} = ${i * j}`);
        j++;
    }
    i++;
}

do {
    console.log('Number ' + i);
    i++;
} while (i <= 20);
```

### 4. `fizzbuzz-challenge.js`

**Learnings:**
- **FizzBuzz Challenge**: Solving the classic FizzBuzz challenge using loops and conditional statements.
- **Modulus Operator**: Using the modulus operator (`%`) to determine divisibility.
- **Conditional Logic**: Implementing complex conditional logic within loops.

**Key Code:**
```javascript
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    }
    console.log(i);
}
```

### 5. `for-of-loop.js`

**Learnings:**
- **For-Of Loops**: Using `for-of` loops to iterate over iterable objects such as arrays, strings, and maps.
- **Iterating Over Arrays**: Simplifying array iteration with `for-of` loops.
- **Iterating Over Strings**: Using `for-of` loops to iterate over characters in a string.
- **Iterating Over Maps**: Using `for-of` loops to iterate over key-value pairs in a map.

**Key Code:**
```javascript
// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
for (const item of items) {
    console.log(item);
}

const users = [
    { name: 'Chris' },
    { name: 'Sam' },
    { name: 'Ian' }
];
for (const user of users) {
    console.log(user.name);
}

// Loop over strings
const str = 'Hello World';
for (const letter of str) {
    console.log(letter);
}

// Loop over maps
const map = new Map();
map.set('name', 'Chris');
map.set('age', '24');
for (const [key, value] of map) {
    console.log(key, value);
}
```

### 6. `for-in-loop.js`

**Learnings:**
- **For-In Loops**: Using `for-in` loops to iterate over the properties of an object or the indices of an array.
- **Iterating Over Object Properties**: Accessing object properties and their values using `for-in` loops.
- **Iterating Over Array Indices**: Using `for-in` loops to iterate over array indices.

**Key Code:**
```javascript
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};
for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'blue', 'orange', 'green'];
for (const key in colorArr) {
    console.log(colorArr[key]);
}
```

### 7. `forEach.js`

**Learnings:**
- **ForEach Method**: Using the `forEach` method to iterate over arrays and perform operations on each element.
- **Callback Functions**: Understanding how to pass callback functions to `forEach`.
- **Accessing Array Elements**: Accessing array elements, indices, and the array itself within the callback function.

**Key Code:**
```javascript
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
socials.forEach(function(item) {
    console.log(item);
});

socials.forEach((item, index, arr) => console.log(`${index}-${item}`, arr));

function logSocial(socials) {
    console.log(socials);
}
socials.forEach(logSocial);

const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
];
socialObjs.forEach((item) => console.log(item));
```

### 8. `filter.js`

**Learnings:**
- **Filter Method**: Using the `filter` method to create a new array with elements that pass a test defined by a function.
- **Predicate Functions**: Understanding how to write predicate functions to determine which elements to include in the new array.
- **Filtering Arrays**: Applying the `filter` method to arrays to extract specific elements based on conditions.

**Key Code:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers1 = numbers.filter(function(number) {
    return number % 2 == 0;
});
console.log(evenNumbers1);

// Short version
const evenNumbers2 = numbers.filter(number => number % 2 == 0);
console.log(evenNumbers2);

// Same with forEach
let evenNumbers3 = [];
numbers.forEach(number => {
    if (number % 2 == 0) {
        evenNumbers3.push(number);
    }
});
console.log(evenNumbers3);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
];

// Get only retail companies
const companyRetails = companies.filter((company) => {
    return company.category === 'Retail';
});
console.log(companyRetails);

// Get companies that started in or after 1980 and ended in or before 2005
const earlyCompany = companies.filter((company) => {
    return company.start >= 1980 && company.end <= 2005;
});
console.log(earlyCompany);

// Get companies that lasted 10 years or more
const longCompanies = companies.filter((company) => {
    return company.end - company.start >= 10;
});
console.log(longCompanies);
```

### 9. `map.js`

**Learnings:**
- **Map Method**: Using the `map` method to create a new array with the results of calling a function on every element in the original array.
- **Transforming Arrays**: Applying transformations to array elements using the `map` method.
- **Chaining Methods**: Combining `map` with other array methods to perform complex operations.

**Key Code:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(numbers) {
    return 'Number ' + numbers * 2;
});
console.log(doubledNumbers);

// Same with forEach
const doubledNumbers2 = [];
numbers.forEach((number) => {
    doubledNumbers2.push(number * 2);
});
console.log(doubledNumbers2);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
];

// Create an array of company names
const companyName = companies.map(function(company) {
    return company.name;
});
console.log(companyName);

// Create an array with just company and category
const companyInfo = companies.map(function(company) {
    return {
        name: company.name,
        category: company.category
    };
});
console.log(companyInfo);

// Create an array of objects with name and the length of each company in years
const companyYears = companies.map(function(company) {
    return {
        name: company.name,
        length: company.end - company.start + ' years'
    };
});
console.log(companyYears);

// Chain map method
const numbers2 = [1, 2, 3, 4, 5];
const squareAndDouble = numbers2.map((number) => {
    return Math.sqrt(number);
});
console.log(squareAndDouble);
```

### 10. `reduce.js`

**Learnings:**
- **Reduce Method**: Using the `reduce` method to execute a reducer function on each element of the array, resulting in a single output value.
- **Accumulator Pattern**: Understanding the accumulator pattern used in the `reduce` method.
- **Summing Values**: Using `reduce` to sum values in an array.
- **Calculating Totals**: Applying `reduce` to calculate totals from arrays of objects.

**Key Code:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum);

// Using a for loop
const sum3 = () => {
    let acc = 0;
    for (const curr of numbers) {
        acc += curr;
    }
    return acc;
};
console.log(sum3());

const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 170 }
];
const total = cart.reduce((acc, product) => {
    return acc + product.price;
}, 0);
console.log(total);
```

### 11. `array-method-challenges.js`

**Learnings:**
- **Array Method Challenges**: Solving practical problems using array methods such as `filter`, `map`, and `reduce`.
- **Combining Methods**: Combining multiple array methods to achieve complex data transformations.
- **Real-World Applications**: Applying array methods to solve real-world problems and challenges.

**Challenges and Solutions:**

**Challenge 1:**
- Filter out people aged 25 or younger and create a new array with their names and emails.

**Solution:**
```javascript
const people = [
    { firstName: 'John', lastName: 'Doe', email: 'john@gmail.com', phone: '111-111-1111', age: 30 },
    { firstName: 'Jane', lastName: 'Poe', email: 'jane@gmail.com', phone: '222-222-2222', age: 25 },
    { firstName: 'Bob', lastName: 'Foe', email: 'bob@gmail.com', phone: '333-333-3333', age: 45 },
    { firstName: 'Sara', lastName: 'Soe', email: 'Sara@gmail.com', phone: '444-444-4444', age: 19 },
    { firstName: 'Jose', lastName: 'Koe', email: 'jose@gmail.com', phone: '555-555-5555', age: 23 },
];
const youngPeople = people
    .filter((user) => user.age <= 25)
    .map((user) => ({
        name: user.firstName + " " + user.lastName,
        email: user.email,
    }));
console.log(youngPeople);
```

**Challenge 2:**
- Calculate the sum of all positive numbers in an array.

**Solution:**
```javascript
const numbers = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = numbers
    .filter((number) => number > 0)
    .reduce((acc, curr) => {
        return acc + curr;
    }, 0);
console.log(positiveSum);
```

**Challenge 3:**
- Capitalize the first letter of each word in an array.

**Solution:**
```javascript
const words = ['coder', 'programmer', 'developer'];
const capitalizedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length)
);
console.log(capitalizedWords);
```

## Conclusion

This project has offered an in-depth exploration of JavaScript loops, iteration, and array methods, encompassing a variety of techniques and operations. Through hands-on examples and challenges, I have developed a comprehensive understanding of how to effectively utilize these fundamental concepts in JavaScript.
