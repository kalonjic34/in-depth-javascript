(function () {
    const user = 'Chris'
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello()
})()

// (function(name){
//     console.log('Hello '+name);
// })('Sam')

// (function hello(){
//     console.log('Hello');
// })()