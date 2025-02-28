// const x = false
// const x = 0
// const x = null

// const x = NaN
// const x = ''
// const x = 'false'
// const x = []
const x = function(){}

if (x) {
    console.log('This is truty');
}else{
    console.log('This is flasy');
}

console.log(Boolean(x));

// Truthy and falsy caveats

// const children = 2
// const children = 0
const children = 3

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
}else{
    console.log('Please enter number of children');
}

// Checking for empty arrays

// const post = ['Post One', 'Post Two']
// const post = []
// console.log(post.length);
const post = ['Post One', 'Post Two']

if (post.length > 0) {
    console.log('List Post');
}else{
    console.log('No Post to list');
}

// Checking for empty objects

// const user = {
//     name: 'Chris'
// }
// const user = {}
const user = {
    name: 'Chris'
}

if (Object.keys(user).length > 0) {
    console.log('List user');
}else{
    console.log('No user');
}

// Loose Equality (==)

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);