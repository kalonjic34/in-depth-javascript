const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram']

socials.forEach(function(item){
    console.log(item);
})

socials.forEach((item, index, arr) => console.log(`${index}-${item}`,arr))

function logSocial(socials){
    console.log(socials);
}

socials.forEach(logSocial)

const socialObjs =[
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'LinkedIn', url: 'https://linkedin.com'},
    {name: 'Instagram', url: 'https://instagram.com'},
]

socialObjs.forEach((item) => console.log(item));

