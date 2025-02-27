let x;

const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberry', 'blueberry', 'rasberry']

// fruits.push(berries)

// x = fruits[3][1]

const allFruits = [fruits, berries]

x = allFruits[1][0]

x = fruits.concat(berries)

// Spread Operators(...)

x = [...fruits,...berries]

// Flatten Arrays

const arr = [1,2,[3,4],5,[6,7],8]
x = arr.flat()

// Static methods on Array Object

x = Array.isArray('fruits')

x = Array.from('12345')

x = Array

console.log(x);
