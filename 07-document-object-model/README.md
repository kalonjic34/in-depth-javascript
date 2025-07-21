# JavaScript In-Depth: Document Object Model (DOM)

## Overview

This project is a comprehensive exploration of the JavaScript Document Object Model (DOM). It covers various techniques for selecting, traversing, manipulating, and interacting with DOM elements and nodes. Below is a detailed summary of what I have learned and accomplished in each file.

## Files and Content

### 1. index.html & script.js

**Learnings:**
- **DOM Basics**: Understanding what the DOM is and how JavaScript interacts with HTML documents.
- **Accessing Elements**: Using `document.getElementById`, `document.querySelector`, and other methods to access elements.
- **Modifying Content**: Changing text and HTML content using JavaScript.
- **Manipulating Structure**: Dynamically updating the DOM structure.

**Key Code:**
```javascript
console.log(document.links[0]);
console.log(document.getElementById('main'));
document.querySelector('#main h1').innerText = 'Hello';
```

### 2. script.js

**Learnings:**
- **Document Properties**: Exploring properties like `document.all`, `document.head`, `document.body`, `document.forms`, `document.links`, and `document.images`.
- **Accessing and Modifying Attributes**: Reading and updating element attributes and properties.
- **Working with Collections**: Converting HTML collections to arrays for easier manipulation.

**Key Code:**
```javascript
output = document.all;
output = document.head;
output = document.body;
output = document.forms[0].id;
document.forms[0].id = 'new-id';
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));
```

### 3. script.js

**Learnings:**
- **Single Element Selectors**: Using `getElementById` and `querySelector` to select single elements.
- **Setting Attributes and Styles**: Modifying element attributes and inline styles.
- **Changing Content**: Updating text and HTML content of elements.

**Key Code:**
```javascript
const title = document.getElementById('app-title');
title.textContent = 'Hello World';
title.innerHTML = '<strong>Shopping List</strong>';
title.style.color = 'red';
console.log(document.querySelector('li:nth-child(2)').innerText);
```

### 4. script.js

**Learnings:**
- **Multiple Element Selectors**: Using `querySelectorAll`, `getElementsByClassName`, and `getElementsByTagName`.
- **Iterating Over NodeLists and HTMLCollections**: Using `forEach` and `Array.from` to loop through collections.
- **Manipulating Multiple Elements**: Changing styles, content, and removing elements in bulk.

**Key Code:**
```javascript
const listItems = document.querySelectorAll('.item');
listItems.forEach((item, index) => {
    item.style.color = 'red';
    if (index === 1) item.remove();
});
const listItemsArray = Array.from(document.getElementsByClassName('item'));
listItemsArray.forEach((item) => console.log(item.innerText));
```

### 5. index.html, script.js, style.css

**Learnings:**
- **Traversing Elements**: Navigating between parent, child, and sibling elements.
- **Modifying Elements**: Changing content and styles of traversed elements.
- **Understanding Element Relationships**: Using properties like `children`, `parentElement`, `firstElementChild`, and `lastElementChild`.

**Key Code:**
```javascript
const parent = document.querySelector('.parent');
output = parent.children;
parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
```

### 6. index.html, script.js, style.css

**Learnings:**
- **Node Traversal**: Navigating nodes using `childNodes`, `parentNode`, `firstChild`, and `lastChild`.
- **Manipulating Node Content and Styles**: Changing text and styles of nodes.
- **Working with Sibling Nodes**: Accessing next and previous siblings.

**Key Code:**
```javascript
const parent = document.querySelector('.parent');
output = parent.childNodes;
output = parent.childNodes[0].textContent;
parent.childNodes[3].innerText = 'Child One';
parent.childNodes[5].style.color = 'red';
const child = document.querySelector('.child');
output = child.parentNode;
child.parentNode.style.backgroundColor = '#ccc';
```

### 7. script.js

**Learnings:**
- **Creating Elements**: Using `document.createElement` and `createTextNode` to build new elements.
- **Setting Attributes and Appending**: Assigning classes, IDs, and attributes, then appending elements to the DOM.

**Key Code:**
```javascript
const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');
const text = document.createTextNode('Hello world');
div.appendChild(text);
document.querySelector('ul').appendChild(div);
```

### 8. script.js

**Learnings:**
- **innerHTML vs. createElement**: Comparing quick but less safe `innerHTML` with the more robust `createElement` approach.
- **Building List Items**: Dynamically creating list items with buttons and icons.

**Key Code:**
```javascript
function createListItem(item){
    const li = document.createElement('li');
    li.innerHTML = `${item}
        <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
        </button>`;
    document.querySelector('.items').appendChild(li);
}
function createNewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    // ...add button and icon
    document.querySelector('.items').appendChild(li);
}
createListItem('Eggs');
createNewItem('Cheese');
```

### 9. script.js

**Learnings:**
- **Refactoring**: Breaking code into reusable functions for creating elements, buttons, and icons.
- **Modular Code**: Improving maintainability and readability by separating concerns.

**Key Code:**
```javascript
function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    document.querySelector('.items').appendChild(li);
}
function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
createNewItem('Cheese');
createNewItem('Sauce');
```

### 10. script.js

**Learnings:**
- **Inserting Elements**: Using `insertAdjacentElement`, `insertAdjacentText`, `insertAdjacentHTML`, and `insertBefore` to insert elements at specific positions.
- **Flexible DOM Manipulation**: Adding elements before, after, or within existing elements.

**Key Code:**
```javascript
function insertElement() {
    const filter = document.querySelector('.filter');
    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';
    filter.insertAdjacentElement('beforebegin', h1);
}
function insertText() {
    const item = document.querySelector('li');
    item.insertAdjacentText('afterend', 'insertAdjacentElement');
}
function insertHTML() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}
function insertBeforeItem() {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = 'insertBefore';
    const thirdItem = document.querySelector('li:nth-child(3)');
    ul.insertBefore(li, thirdItem);
}
insertElement();
insertText();
insertHTML();
insertBeforeItem();
```

### 11. script.js

**Learnings:**
- **Replacing Elements**: Using `replaceWith`, `outerHTML`, and `replaceChild` to replace elements in the DOM.
- **Selective Replacement**: Replacing specific items or headings based on conditions.

**Key Code:**
```javascript
function replaceFirstItem() {
    const firstItem = document.querySelector('li');
    const li = document.createElement('li');
    li.textContent = 'Replaced First';
    firstItem.replaceWith(li);
}
function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');
    secondItem.outerHTML = '<li>Replaced Second</li>';
}
function replaceChildHeading() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');
    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';
    header.replaceChild(h2, h1);
}
replaceFirstItem();
replaceSecondItem();
replaceChildHeading();
```

### 12. script.js

**Learnings:**
- **Removing Elements**: Using `remove`, `removeChild`, and targeting elements by selectors to remove them from the DOM.
- **Selective Removal**: Removing specific items or buttons based on their position or ID.

**Key Code:**
```javascript
function removeClearButton() {
    document.querySelector('#clear').remove();
}
function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    ul.removeChild(li);
}
function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}
removeClearButton();
removeItem(2);
```

## Conclusion

This project has provided a thorough understanding of the Document Object Model in JavaScript, including selecting, traversing, creating, inserting, replacing, and removing elements and nodes. Through practical examples and modular code, I have learned how to dynamically interact with and manipulate web page content using the DOM.

