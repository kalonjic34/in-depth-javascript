// Using the console

console.log(100);

console.log("Hello World");

console.log(20, "Hello", true);

const x = 100;

console.log(x);

console.error("Alert");

console.log("Warning");
console.table({
    name: "Chris",
    email: "kalonjic@gmail.com"
});

console.group("simple");
console.log(x);

console.error("Alert");

console.log("Warning");

console.groupEnd();

const styles = 'padding 10px; background-color: white; color: green';
console.log('%cHello World', styles);