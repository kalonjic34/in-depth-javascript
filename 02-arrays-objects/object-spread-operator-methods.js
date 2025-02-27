let x;

const todo = new Object()

todo.id = 1
todo.name = 'Buy Milk'
todo.completed = false

x = todo

const person = {
    address: {
        coords: {
            lat: 43.9343,
            lng: -71.4871,
        },
    },
}

x = person.address.coords.lat

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

const obj3 = {...obj1, ...obj2}
const obj4 = Object.assign({}, obj1, obj2)

const todos = [
    {id:1, name: 'Buy Milk'},
    {id:2, name: 'Pick up kids from school'},
    {id:3, name: 'Take out the trash'}
]

x = todos[0].name
x = todos[0].id

x = Object.keys(todo)

x = Object.keys(todo).length

x = Object.keys(todo)

x = Object.entries(todo)
x = Object.hasOwnProperty('age')

console.log(x);