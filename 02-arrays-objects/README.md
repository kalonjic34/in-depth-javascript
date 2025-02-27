# JavaScript In-Depth: Arrays and Objects

## Overview

This project is a comprehensive exploration of JavaScript arrays and objects. It covers various methods, operations, and challenges related to these fundamental data structures. Below is a detailed summary of what I have learned and accomplished in each file.

## Files and Content

### 1. `creating-arrays.js`

**Learnings:**
- Creating arrays using array literals and constructors.
- Accessing and modifying array elements.
- Determining the length of an array.
- Adding new elements to an array dynamically.

**Key Code:**
```javascript
const numbers = [12, 43, 33, 29, 67, 234];
const mixed = [12, 'hello', true, null];
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favorite fruit is an ${fruits[1]}`;
x = numbers.length;

fruits[2] = 'pear';
fruits[3] = 'strawberry';
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

console.log(x);
```

### 2. `basic-array-methods.js`

**Learnings:**
- Using array methods such as `push`, `pop`, `unshift`, `shift`, `reverse`, `includes`, `indexOf`, `slice`, and `splice`.
- Understanding how these methods modify the array and their return values.
- Combining multiple array methods to achieve complex manipulations.

**Key Code:**
```javascript
const arr = [34, 55, 95, 20, 15];

x = arr.includes(100);
x = arr.indexOf(34);
x = arr.slice(1, 4);
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);
```

### 3. `nesting-concat-spread-operator.js`

**Learnings:**
- Nesting arrays and accessing nested elements.
- Concatenating arrays using `concat` and the spread operator.
- Flattening arrays using the `flat` method.
- Using static methods on the Array object such as `Array.isArray` and `Array.from`.

**Key Code:**
```javascript
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

x = fruits.concat(berries);
x = [...fruits, ...berries];

const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

console.log(x);
```

### 4. `array-challenges.js`

**Learnings:**
- Solving array manipulation challenges using various methods.
- Applying array methods to solve practical problems.
- Combining multiple array methods to achieve desired outcomes.

**Challenges and Solutions:**

**Challenge 1:**
- Reverse the array `[1, 2, 3, 4, 5]`.
- Add `6` to the beginning of the array.
- Add `0` to the end of the array.

**Solution:**
```javascript
const arr = [1, 2, 3, 4, 5];
arr.reverse();
arr.unshift(6);
arr.push(0);
console.log(arr);
```

**Challenge 2:**
- Merge two arrays `[1, 2, 3, 4, 5]` and `[5, 6, 7, 8, 9, 10]`.
- Remove the element at index `4` from the merged array.

**Solution:**
```javascript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);
console.log(arr3);
```

### 5. `object-literals.js`

**Learnings:**
- Creating and manipulating objects using object literals.
- Accessing and modifying object properties using dot notation and bracket notation.
- Adding and deleting properties dynamically.
- Adding methods to objects and using `this` keyword within methods.

**Key Code:**
```javascript
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Cape Town',
        province: 'Western Cape'
    },
    hobbies: ['music', 'sports']
};

person.name = 'Jane Doe';
person.isAdmin = false;
delete person.age;
person.hasChildren = true;

person.greet = function() {
    console.log(`Hello my name is ${this.name}`);
};
person.greet();

const person2 = {
    'first name': 'Chris',
    'last name': 'Kalonji'
};

x = person2["first name"];
console.log(x);
```

### 6. `object-spread-operator-methods.js`

**Learnings:**
- Using the spread operator to merge objects.
- Using `Object.assign` to copy properties from one object to another.
- Working with object methods such as `Object.keys`, `Object.entries`, and `Object.hasOwnProperty`.
- Understanding the differences between shallow and deep copies of objects.

**Key Code:**
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pick up kids from school' },
    { id: 3, name: 'Take out the trash' }
];

x = Object.keys(todo);
x = Object.entries(todo);
x = Object.hasOwnProperty('age');

console.log(x);
```

### 7. `destructuring-naming.js`

**Learnings:**
- Using destructuring to extract values from objects and arrays.
- Renaming variables while destructuring.
- Using rest syntax to collect remaining elements.
- Destructuring nested objects and arrays.

**Key Code:**
```javascript
const todo = {
    id: 1,
    title: 'Take out the trash',
    user: {
        name: 'John'
    }
};

const { id: todoId, title, user: { name } } = todo;
console.log(todoId);

const numbers = [23, 67, 33, 49];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);
```

### 8. `json-intro.js`

**Learnings:**
- Converting objects to JSON strings using `JSON.stringify`.
- Parsing JSON strings back to objects using `JSON.parse`.
- Understanding the structure and format of JSON.
- Working with JSON data in arrays and objects.

**Key Code:**
```javascript
const post = {
    title: 'Post One',
    body: "This is a body"
};

const str = JSON.stringify(post);
console.log(str);

const obj = JSON.parse(str);
console.log(obj);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: "This is a body"
    },
    {
        id: 2,
        title: 'Post Two',
        body: "This is a body"
    }
];

const str2 = JSON.stringify(posts);
console.log(str2);
```


### 9. `object-challenge.js`

**Learnings:**
- Working with complex objects and nested structures.
- Using destructuring to extract values from nested objects.
- Converting objects to JSON strings and understanding the benefits of JSON for data interchange.
- Modifying nested object properties.

**Challenges and Solutions:**

**Challenge 1:**
- Update the `read` status of all books in the library to `true`.

**Solution:**
```javascript
const library = [
    {
        title: 'The Road Ahead',
        author: 'Pamela Samson',
        status: {
            own: true,
            reading: true,
            read: false
        }
    },
    {
        title: 'Steve Jobs',
        author: 'Owen Jackson',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Alice Wilson',
        status: {
            own: true,
            reading: false,
            read: true
        }
    }
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);
```

**Challenge 2:**
- Extract the title of the first book in the library using destructuring.

**Solution:**
```javascript
const { title: firstBook } = library[0];
console.log(firstBook);
```

**Challenge 3:**
- Convert the `library` object to a JSON string.

**Solution:**
```javascript
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
```

## Conclusion

This project has provided a deep dive into JavaScript arrays and objects, covering a wide range of methods and operations. Through practical examples and challenges, I have gained a solid understanding of how to work with these essential data structures in JavaScript.
