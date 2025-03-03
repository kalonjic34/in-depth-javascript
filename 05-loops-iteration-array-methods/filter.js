const numbers = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers1 = numbers.filter(function(number){
    return number % 2 == 0
})

console.log(evenNumbers1);

// Short version

const evenNumbers2 = numbers.filter(number => number %2 ==0)
console.log(evenNumbers2);


// Same with forEach
let evenNumbers3 =[]
numbers.forEach(number =>{
    if (number % 2 ==0) {
        evenNumbers3.push(number)
    }
})

console.log(evenNumbers3);

const companies = [

    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },

]

// Get only retail companies

const companyRetails = companies.filter((company) =>{
    return company.category === 'Retail'
})

console.log(companyRetails);

// Get companies that started in or after 1980 and ended in or before 2005

const earlyCompany = companies.filter((company)=>{
    return company.start >= 1980 && company.end <= 2005
})

console.log(earlyCompany);

// Get companies that lasted 10 years or more 
const longCompanies = companies.filter((company) =>{
    return company.end - company.start >= 10
})
console.log(longCompanies);