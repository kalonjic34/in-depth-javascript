let x;
let d = new Date()

x = d.toString()

x = d.getTime()

x = d.getFullYear()
x = d.getMonth() +1
x = d.getDate()

x = Intl.DateTimeFormat('en-US').format(d)
x = Intl.DateTimeFormat('en-GB').format(d)
x = Intl.DateTimeFormat('default').format(d)

x = d.toLocaleString('default', {month: 'short'})

console.log(x);