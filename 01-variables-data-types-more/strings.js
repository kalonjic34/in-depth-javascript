let a;

const name1 = 'John';
const age1 = 31;

a = "Hello, my name is " + name1 + " and I am " + age1 + " years old";

// Template Literals
a = `Hello, my name is ${name1} and I am ${age1} years old`;

// String Properties and Methods 
const s = "Hello World";

a = typeof s;

a = s.length;

// Access value by key
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
