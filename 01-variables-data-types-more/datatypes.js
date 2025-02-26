// String
const firstName = 'Sarah';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score  = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 592745026404057262n;

// Reference types

const numbers = [1,2,3,4];

const person ={
    name: "Chris"
};

function sayHello(){
    console.log("Hello");
}

const output = sayHello;

console.log(output, typeof output);
