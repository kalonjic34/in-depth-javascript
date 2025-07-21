const itemInput = document.getElementById('item-input')

const onKeyPress = e =>{
    console.log('keypress');
}

const onKeyUp = e =>{
    console.log('keyup');
}

const onKeyDown = e =>{
    // if (e.key == 'Enter') {
    //     alert('You pressed enter')
    // }

    if (e.keyCode === 13) {
        alert('You pressed enter')
    }

    if (e.code == 'Digit1') {
        console.log('You pressed 1');
    }

    if(e.repeat){
        console.log('You are holding down '+e.key);
    }
}

// itemInput.addEventListener('keypress',onKeyPress)
// itemInput.addEventListener('keypress',onKeyUp)
itemInput.addEventListener('keypress',onKeyDown)