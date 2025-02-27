// function add(a, b) {
//     return a + b
// }

// Arrow function
const add = (a,b) => {
    return a + b
}

// Implicit return
const substract = (a,b) => a-b

// Can leave off () with a single param
const double = a => a * 2

// Return an object
const createObj = () => ({
    name: 'Chris'
})

const numbers = [1,2,3,4,5]
numbers.forEach(function(n){
    console.log(n);
})

// Arrow function in a callback
numbers.forEach(n => console.log(n)) 

console.log(add(1,2));
console.log(substract(10,5));
console.log(double(10));
console.log(createObj());

