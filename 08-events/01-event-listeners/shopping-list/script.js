const clear_btn = document.querySelector("#clear")

function onClear(){
    const item_list = document.querySelector('ul')
    const items = item_list.querySelectorAll('li')

    // item_list.innerHTML = ''

    // items.forEach((item) => item.remove())

    while (item_list.firstChild) {
        item_list.removeChild(item_list.firstChild)
    }
}

// clear_btn.onclick = function(){
//     alert("Clear Items")
// };

// clear_btn.addEventListener('click',() => {
//     console.log('Clear Items');
// })

// clear_btn.addEventListener('click',() => {
//     alert('Clear Items')
// })
clear_btn.addEventListener('click', onClear)

// setTimeout(() =>clear_btn.removeEventListener('click',onClear),5000)

// setTimeout(() => clear_btn.click(), 5000)