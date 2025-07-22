const form = document.getElementById('item-form')

const onSubmit = (e) =>{
    e.preventDefault();

    const item = document.getElementById('item-input').value
    const priorty = document.getElementById('priorty-input').value

    if (item ==='' || priorty === '0') {
        alert('Please fill in all fields')
        return
    }

    console.log(item, priorty);
}

const onSubmit2 = (e) =>{
    e.preventDefault();

    const formData = new FormData(form);

    // const item = formData.get('item')
    // const priorty = formData.get('priorty')

    const entries = formData.entries()
    // console.log(entries);

    for (const entry of entries) {
        console.log(entry[0]);
    }

    // console.log(item, priorty);
}

form.addEventListener('submit', onSubmit2)