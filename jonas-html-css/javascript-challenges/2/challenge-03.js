
let teamMark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}


let teamJohn = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}
console.log(teamMark.calcBMI())
console.log(teamJohn.calcBMI())
if (teamMark.BMI>teamJohn.BMI){
    console.log(`${teamMark.fullname}'s BMI (${teamMark.calcBMI()}) is higher than ${teamJohn.fullname}'s BMI (${teamJohn.calcBMI()})`)
}else{
    console.log(`${teamJohn.fullname}'s BMI (${teamJohn.calcBMI()}) is higher than ${teamMark.fullname}'s BMI (${teamMark.calcBMI()})`)
}
