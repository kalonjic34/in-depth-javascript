const numbers = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers1 = numbers.filter(function(number){
    return number % 2 == 0
})

console.log(evenNumbers1);

// Short version

const evenNumbers2 = numbers.filter(number => number %2 ==0)
console.log(evenNumbers2);


// Same with forEach
let evenNumbers3 =[]
numbers.forEach(number =>{
    if (number % 2 ==0) {
        evenNumbers3.push(number)
    }
})

console.log(evenNumbers3);