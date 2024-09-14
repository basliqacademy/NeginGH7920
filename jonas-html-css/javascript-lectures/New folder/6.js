const neighbours=['Denmark','Poland','France']
//add
console.log(neighbours.push('Utopia'))
console.log(neighbours)
//remove
console.log(neighbours.pop())
console.log(neighbours)
//includes
if (!(neighbours.includes('Germany'))) {
    console.log('Probably not a central European country :D')
}

//replace
//neighbours[0]='Belgium'
//console.log(neighbours)
console.log(neighbours)
neighbours[neighbours.indexOf('Denmark')] = 'Belgium'
console.log(neighbours)