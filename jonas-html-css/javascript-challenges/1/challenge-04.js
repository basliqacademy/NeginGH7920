let bill = 275
let tip
/*  
if (bill>=50 && bill<=300){
    console.log(`the bill is ${bill}, the tip is ${tip = 0.15*bill} and the total value is ${tip+bill} `)
}else {
    console.log(`the bill is ${bill}, the tip is ${tip = 0.2*bill} and the total value is ${tip+bill} `)
}*/


console.log( `the bill is ${bill}, the tip is ${bill >= 50 && bill <= 300 ? tip = 0.15 * bill : tip = 0.2 * bill} and the total value is ${bill+tip} `)

bill = 40
console.log( `the bill is ${bill}, the tip is ${bill >= 50 && bill <= 300 ? tip = 0.15 * bill : tip = 0.2 * bill} and the total value is ${bill+tip} `)


bill = 430
console.log( `the bill is ${bill}, the tip is ${bill >= 50 && bill <= 300 ? tip = 0.15 * bill : tip = 0.2 * bill} and the total value is ${bill+tip} `)

