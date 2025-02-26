// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Coventions
// - Only letters, numbers, underscores and dollor signs
// - Can't start with a number

// let 1name  = "John";

// Multi-word formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstName = lowercase

// Resigning Variables

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

const arr = [1,2,3,4];

arr.push(5);

console.log(arr);

const person = {
    name: 'Chris'
};

person.name = 'Liam';
person.email = 'liamgraham@gmail.com';

console.log(person);

// Declare multiple values at once

let a, b, c;

const d = 10, e = 20, f = 30;

console.log(d);
console.log(e);
