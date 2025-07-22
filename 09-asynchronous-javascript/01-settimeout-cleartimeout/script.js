// setTimeout(change_text, 2000)

function change_text(){
    document.querySelector('h1').textContent = 'hello from callback'
}

const timer_Id = setTimeout(change_text,3000)

document.querySelector('#cancel').addEventListener('click', ()=>{
    console.log(timer_Id);
    clearTimeout(timer_Id)
    console.log('Timer Cancelled');
})