// Loop through arrays
const items = ['book', 'table', 'chair', 'kite']
for(const item of items){
    console.log(item);
}

const users = [
    {name: 'Chris'},
    {name: 'Sam'},
    {name: 'Ian'}
]

for(const user of users){
    console.log(user.name);
}

// Loop over strings
const str = 'Hello World'
for(const letter of str){
    console.log(letter);
}


// Loop over maps

const map = new Map()
map.set('name', 'Chris')
map.set('age', '24')

for(const [key,value] of map){
    console.log(key,value);
}
