const itemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input')
const checkbox = document.getElementById('checkbox')
const heading = document.querySelector('h1')

const onInput = (e)=>{
    heading.textContent = e.target.value;
}

const onChecked = (e) =>{
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked'
}

const onFocus = (e) =>{
    console.log('input is focused');
    itemInput.style.outlineStyle = 'solid'
    itemInput.style.outlineWidth = '1px'
    itemInput.style.outlineColor = 'green'
}

const onBlur = (e) =>{
    console.log('input is not focused');
    itemInput.style.outlineStyle = 'none'
}

itemInput.addEventListener('input', onInput)
priorityInput.addEventListener('change', onInput)
checkbox.addEventListener('input',onChecked)
itemInput.addEventListener('focus',onFocus)
itemInput.addEventListener('focus',onBlur)