//normal function
function percentageOfWorld1(population) {
    return (`${(population / 7900) * 100}%`)
}
function describePopulation(country, population) {
    return (`${country} has ${population} million people, so its about ${percentageOfWorld1(population)} of the world population`)
}
console.log(describePopulation('Iran', 100))
console.log(describePopulation('Turkey',200))
console.log(describePopulation('Germany',300))


//expression function
percentageOfWorld1 = function (population) {
    return (`${(population / 7900) * 100}%`)
}
function describePopulation(country, population) {
    return (`${country} has ${population} million people, so its about ${percentageOfWorld1(population)} of the world population`)
}
console.log(describePopulation('Iran', 100))
console.log(describePopulation('Turkey',200))
console.log(describePopulation('Germany',300))


//arrow function
percentageOfWorld1 = (population) => {
    return (`${(population / 7900) * 100}%`)
}
function describePopulation(country, population) {
    return (`${country} has ${population} million people, so its about ${percentageOfWorld1(population)} of the world population`)
}
console.log(describePopulation('Iran', 100))
console.log(describePopulation('Turkey',200))
console.log(describePopulation('Germany',300))