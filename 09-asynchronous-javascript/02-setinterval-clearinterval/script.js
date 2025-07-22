// const interval_Id = setInterval(my_callback, 1000, 'hello')

// function my_callback(a){
//     console.log(a, Date.now());
// }

let interval_id;

function start_change(){
    if (!interval_id) {
        interval_id = setInterval(changeColor,1000)
    }
}

function changeColor(){
    if (document.body.style.backgroundColor !== 'black') {
        document.body.style.backgroundColor = 'black'
        document.body.style.color= 'white'
    }else{
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
}

function stop_change(){
    clearInterval(interval_Id)
}

document.getElementById('start'),addEventListener('click', start_change)
document.getElementById('stop'),addEventListener('click', stop_change)