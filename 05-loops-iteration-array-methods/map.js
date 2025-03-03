const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = numbers.map(function (numbers) {
    return 'Number ' + numbers * 2
})
console.log(doubledNumbers);

// Same with forEach

const doubledNumbers2 = [];

numbers.forEach((number) => {
    doubledNumbers2.push(number * 2)
})

console.log(doubledNumbers2);

const companies = [

    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },

]

// Create an array of company names
const companyName = companies.map(function(company){
    return company.name
})

console.log(companyName);

// Create an array with just company and category
const companyInfo = companies.map(function(company){
    return{
        name: company.name,
        category: company.category
    } 
})
console.log(companyInfo);

// Create an array of objects with name and the lengh of each company in years

const companyYears = companies.map(function(company){
    return {
        name: company.name,
        length: company.end - company.start + ' years'
    }
})

console.log(companyYears);

// Chain map method
const numbers2 = [1, 2, 3, 4, 5]
const squareAndDouble = numbers2.map((number) =>{
    return Math.sqrt(number)
})

console.log(squareAndDouble);