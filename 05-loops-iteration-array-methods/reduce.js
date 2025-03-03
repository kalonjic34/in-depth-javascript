const numbers = [1,2,3,4,5,6,7,8,9,10]

const sum = numbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue
},0)

const sum2 = numbers.reduce((acc, curr)=>{
    return acc + curr
},0)
console.log(sum2);

// Using a for loop

const sum3 = () =>{
    let acc = 0
    for(const curr of numbers){
        acc += curr
    }
    return acc
}

console.log(sum3());

const cart = [
    {id:1,name: 'Product 1',price:130},
    {id:2,name: 'Product 2',price:150},
    {id:3,name: 'Product 3',price:170}
]

const total = cart.reduce((acc, product)=>{
    return acc + product.price
},0)

console.log(total);