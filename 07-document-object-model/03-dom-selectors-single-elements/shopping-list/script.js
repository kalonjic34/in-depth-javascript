// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));


//Set attributes
document.getElementById('app-title').title = 'Shopping list'
document.getElementById('app-title').setAttribute = ('class', 'title')

const title = document.getElementById('app-title');
console.log(title);

// Get/change content
console.log(title.textContent);

title.textContent = 'Hello World'
title.innerText = 'Hello Again'
title.innerHTML = '<strong>Shopping List</strong>'

// Change styles
title.style.color = 'red'
title.style.color.backgroundColor = 'black'
title.style.padding = '10px'
title.style.borderRadius = '10px'

// dccumebt.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));

console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)')
secondItem.innerText = 'Apple Juice'
secondItem.style.color = 'red'


const list = document.querySelector('ul')
console.log(list);

const firstItem = list.querySelector('li')
firstItem.style.color = 'blue'