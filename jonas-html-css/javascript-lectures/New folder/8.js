const myCountry = {
    country :'German',
    capital : 'Berlin',
    language :'Deutsch',
    population :100,
    neighbours:['France','Belgium','Poland']

}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

console.log(myCountry.population+=2)
console.log(myCountry['population']-=2)