const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ?  0.15 * bill : 0.2 * bill
}
for (let i = 0;i<=bills.length-1;i++){
    const tip =calcTip(bills[i])
    tips.push(tip)
    totals.push(tip+bills[i])
}
console.log(bills,tips,totals)


