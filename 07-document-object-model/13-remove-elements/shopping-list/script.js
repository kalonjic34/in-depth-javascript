function removeClearButton(){
    document.querySelector('#clear').remove()
    clearBtn.remove()
}

function removeFirstItem(){
    const ul = document.querySelector('ul')
    const li = document.querySelector('li:first-child')

    ul.removeChild(li)
}

function removeItem(itemNumber){
    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${itemNumber})`)
    ul.removeChild(li)
}

removeClearButton()
removeItem(2)