const myCountry = {
    country :'German',
    capital : 'Berlin',
    language :'Deutsch',
    population :100,
    neighbours:['France','Belgium','Poland'],
    describe :function(){
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },
    checkIsland :function(){
        this.isIsland = `${this.neighbours.length==0?true:false}`
        return this.isIsland
    }

}
console.log(myCountry.describe())
console.log(myCountry.checkIsland())