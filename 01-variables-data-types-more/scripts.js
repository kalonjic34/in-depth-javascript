// 1. Using the console
/*

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



// 2. Variables and constants
// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe'

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

arr.push(5)

console.log(arr);

const person = {
    name: 'Chris'
};

person.name = 'Liam';
person.email = 'liamgraham@gmail.com';

console.log(person);

// Declare multiple values at once

let a,b,c;

const d = 10, e = 20, f = 30;

console.log(d);
console.log(e);

*/

//3. Data Types
// String
const firstName = 'Sarah';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true

// Null
const aptNumber = null;

// Undefinded
// let score;
const score  = undefined;

// Symbol
const id = Symbol('id');


// BigInt
const n = 592745026404057262n;

// Reference types

const numbers = [1,2,3,4];

const person ={
    name: "Chris",
};

function sayHello(){
    console.log("Hello");
}


const output = sayHello;

console.log(output, typeof output);